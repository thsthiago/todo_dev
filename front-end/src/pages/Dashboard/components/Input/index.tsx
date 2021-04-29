import React, { InputHTMLAttributes, useEffect, useRef } from 'react'
import { useField } from '@unform/core'
import { Container } from './styles'

interface InputData extends InputHTMLAttributes<HTMLInputElement>{}

const Input: React.FC<InputData> = ({ name, ...rest }) => {
  const inputRef = useRef(null)
  const { fieldName, registerField, error } = useField(name as string)

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value'
    })
  }, [fieldName, registerField])

  return (
    <Container ref={inputRef} err={!!error} name={name} {...rest} autoComplete="off"/>
  )
}

export default Input
