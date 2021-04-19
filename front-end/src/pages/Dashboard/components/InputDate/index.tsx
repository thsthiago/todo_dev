import { useField } from '@unform/core'
import React, { InputHTMLAttributes, useCallback, useEffect, useRef } from 'react'

import { Container } from './styles'

interface InputDateProps extends InputHTMLAttributes<HTMLInputElement>{}

const InputDate: React.FC<InputDateProps> = ({ name }) => {
  const inputRef = useRef(null)
  const { fieldName, registerField, error } = useField(name as string)

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value'
    })
  }, [fieldName, registerField])

  const dataAtual = useCallback(() => {
    const date = new Date().toISOString()
    const dateFormat = date.split('T')

    return dateFormat[0]
  }, [])

  return (
    <Container ref={inputRef} type="date" err={!!error} name={name} min={dataAtual()}/>
  )
}

export default InputDate
