import React, { useCallback, useRef } from 'react'
import { Container, Background, Content } from './styles'
import { Form } from '@unform/web'
import { FiMail, FiKey, FiUser, FiArrowLeft } from 'react-icons/fi'

import Logo from '../../assets/Logo.svg'
import Input from '../../components/Input'
import Button from '../../components/Button'
import { Link, useHistory } from 'react-router-dom'
import { FormHandles } from '@unform/core'
import * as Yup from 'yup'
import getValidationErrors from '../../utils/getValidationErrors'
import { useToast } from '../../hooks/toast'
import api from '../../services/api'

interface SignIFormData {
  name: string;
  email: string;
  password: string;
}

const SignUp:React.FC = () => {
  const formRef = useRef<FormHandles>(null)
  const { addToast } = useToast()
  const history = useHistory()

  const handleSubmit = useCallback(async (data: SignIFormData) => {
    try {
      formRef.current?.setErrors({})
      const schema = Yup.object().shape({
        name: Yup.string().required('Nome obrigatório'),
        email: Yup.string().required('E-mail obrigatório').email('Digite um e-mail válido'),
        password: Yup.string().min(8, 'Minímo de 8 caracteres')
      })

      await schema.validate(data, {
        abortEarly: false
      })

      await api.post('/users', data)

      addToast({
        type: 'success',
        title: 'Conta criada com sucesso!'
      })

      history.push('/')
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err)

        formRef.current?.setErrors(errors)

        return
      }

      addToast({
        type: 'error',
        title: 'Erro no cadastro',
        description: 'Ocorreu um erro ao criar a conta'
      })
    }
  }, [addToast, history])

  return (
    <Container>
      <Content>
        <img src={Logo} title="Todo Dev" />

        <h1>Crie sua conta</h1>

        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input name="name" icon={FiUser} type="text" placeholder="Name"/>
          <Input name="email" icon={FiMail} type="text" placeholder="E-mail"/>
          <Input name="password" icon={FiKey} type="password" placeholder="Senha"/>
          <Button type="submit">Criar conta</Button>
        </Form>

        <Link to="/">
          <FiArrowLeft size={20}/>
          Já tenho uma conta
        </Link>
      </Content>
      <Background />
    </Container>
  )
}

export default SignUp
