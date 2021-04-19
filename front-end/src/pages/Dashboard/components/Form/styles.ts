import styled, { keyframes } from 'styled-components'
import { Form } from '@unform/web'

interface FormData {
  iserror: string;
}

const errorAnimation = keyframes`
  20% { transform: translateX(-1%); }
  40% { transform: translateX(1%); }
  60% { transform: translateX(-1%); }
  80% { transform: translateX(1%); }
  100% { transform: translateX(0%); }
`

export const Container = styled(Form)<FormData>`
  position: absolute;
  bottom: calc(0px - 35px);
  width: 90%;
  max-width: 800px;
  height: 70px;
  padding: 0 25px;
  display: flex;
  background: var(--background-input);
  align-items: center;
  box-shadow: 0px 0px 10px 4px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  margin: 0 2%;
  border: 2px solid var(--background-input);
  border-color: ${props => props.iserror !== 'false' && '#c53030'};
  animation-name: ${props => props.iserror !== 'false' && errorAnimation};
  animation-duration: 0.5s;

  input {
    color: var(--color);
    padding-bottom: 4px;
    height: 25px;
  }

  input::placeholder {
    color: var(--color-input)
  }

  button {
    background: transparent;
    border: none;
  }
`
