import { FormHandles } from '@unform/core'
import React, { useCallback, useRef } from 'react'
import { CgProfile } from 'react-icons/cg'
import { FiKey } from 'react-icons/fi'
import { IoIosArrowBack } from 'react-icons/io'
import { Link } from 'react-router-dom'
import Button from '../../components/Button'
import Header from '../../components/Header'
import Input from '../../components/Input'
import { useAuth } from '../../hooks/auth'
import { Container, Form } from './styles'
import * as Yup from 'yup'
import getValidationErrors from '../../utils/getValidationErrors'
import { useToast } from '../../hooks/toast'

interface FormData {
  password: string;
  newPassword: string;
}

const Account: React.FC = () => {
  const { user, changePassword } = useAuth()
  const { addToast } = useToast()
  const formRef = useRef<FormHandles>(null)

  const handleSubmit = useCallback(async (data: FormData) => {
    try {
      formRef.current?.setErrors({})
      const schema = Yup.object().shape({
        password: Yup.string().required('Senha obrigatória'),
        newPassword: Yup.string().min(8, 'Mínimo 8 digitos')
      })

      await schema.validate(data, {
        abortEarly: false
      })

      await changePassword(data)

      addToast({
        title: 'Senha alterada com sucesso!',
        type: 'success'
      })
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const error = getValidationErrors(err)
        formRef.current?.setErrors(error)
        return
      }

      addToast({
        title: 'Senha atual incorreta',
        type: 'error'
      })
    }
  }, [])

  return (
    <Container>
      <Header />
      <section>
        <div>
          <div>
            <p>
              <CgProfile size={200} color="#6930C3"/>
            </p>
            <h1>{user.name}</h1>
          </div>
        </div>
      </section>

      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input name="password" icon={FiKey} type="password" placeholder="Senha atual"/>
        <Input name="newPassword" icon={FiKey} type="password" placeholder="Senha nova"/>
        <Button type="submit">Alterar senha</Button>
      </Form>

      <Link to="/dashboard">
        <IoIosArrowBack size={20}/>
        Voltar
      </Link>
    </Container>
  )
}
export default Account
