import { FormHandles, FormProvider } from '@unform/core'
import React, { useCallback, useRef, useState } from 'react'
import { FiPlusCircle } from 'react-icons/fi'
import Input from '../Input'
import InputDate from '../InputDate'
import { useTasks } from '../../../../hooks/tasks'
import * as Yup from 'yup'
import { Container } from './styles'
import getValidationErrors from '../../../../utils/getValidationErrors'

interface FormData {
  task: string;
  data: string;
}

const Form: React.FC = () => {
  const formRef = useRef<FormHandles>(null)
  const { addTask } = useTasks()
  const [err, setErr] = useState(false)

  const handleSubmit = useCallback(async (data: FormData) => {
    try {
      formRef.current?.setErrors({})
      setErr(false)
      const schema = Yup.object().shape({
        task: Yup.string().required('Esse campo é obrigatório'),
        data: Yup.string().required('Campo data obrigatório')
      })

      await schema.validate(data, {
        abortEarly: false
      })

      await addTask(data)
      formRef.current?.reset()
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const error = getValidationErrors(err)
        formRef.current?.setErrors(error)
        setErr(true)
      }
    }
  }, [])

  return (
    <Container ref={formRef} iserror={String(err)} onSubmit={handleSubmit}>
      <Input name="task" placeholder="Digite uma tarefa..."/>
      <InputDate name="data"/>
      <button type="submit">
        <FiPlusCircle size={30} color="#fff"/>
      </button>
    </Container>
  )
}

export default Form
