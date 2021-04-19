import React, { useCallback, useRef } from 'react'
import { Container, Background, Content } from './styles'
import { Form } from '@unform/web'
import { FiMail, FiKey, FiLogIn } from 'react-icons/fi'

import Logo from '../../assets/Logo.svg'
import Input from '../../components/Input'
import Button from '../../components/Button'
import { Link, useHistory } from 'react-router-dom'
import { FormHandles } from '@unform/core'
import * as Yup from 'yup'
import getValidationErrors from '../../utils/getValidationErrors'
import { useAuth } from '../../hooks/auth'
import { useToast } from '../../hooks/toast'

interface SignIFormData {
  email: string;
  password: string;
}

const SignIn:React.FC = () => {
  const formRef = useRef<FormHandles>(null)
  const { signIn } = useAuth()
  const { addToast } = useToast()
  const history = useHistory()

  const handleSubmit = useCallback(async (data: SignIFormData) => {
    try {
      formRef.current?.setErrors({})
      const schema = Yup.object().shape({
        email: Yup.string().required('E-mail obrigatório').email('Digite um e-mail válido'),
        password: Yup.string().required('Senha obrigatória')
      })

      await schema.validate(data, {
        abortEarly: false
      })

      await signIn({
        email: data.email,
        password: data.password
      })

      addToast({
        type: 'success',
        title: 'Login realizado com sucesso!'
      })

      history.push('/dashboard')
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err)

        formRef.current?.setErrors(errors)

        return
      }

      addToast({
        type: 'error',
        title: 'Erro na autenticação',
        description: 'Ocorreu um erro ao fazer login, cheque as credenciais.'
      })
    }
  }, [signIn, addToast, history])

  return (
    <Container>
      <Background />
      <Content>
        <img src={Logo} title="Todo Dev" />

        <h1>Faça seu login</h1>

        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input name="email" icon={FiMail} type="text" placeholder="E-mail"/>
          <Input name="password" icon={FiKey} type="password" placeholder="Senha"/>
          <Button type="submit">Entrar</Button>
        </Form>

        <Link to="/signup">
          Quero criar uma conta
          <FiLogIn size={20}/>
        </Link>
      </Content>
    </Container>
  )
}

export default SignIn
