import styled, { css } from 'styled-components'
import Tooltip from '../Tooltip'

interface InputProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<InputProps>`
  background-color: var(--background-input);
  height: 60px;
  width: 100%;
  max-width: 340px;
  display:flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  border: 2px solid var(--background-input);
  box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.1);

  div:first-child {
    width: 60px;
    height: 100%;
    background-color: var(--background-icon-input);
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: 2px solid var(--background-icon-input);
    border-radius: 10px 0px 0px 10px
  }

  input {
    flex: 1;
    color: var(--color);
    background-color: transparent;
    border: none;
    padding-left: 10px;

    &::placeholder {
      color: var(--color-input)
    }
  }

  ${props => props.isErrored && css`
    border-color: #c53030;
  `}

  ${props => props.isFocused && css`
    border-color: var(--background-secondary);

    svg {
      color: var(--background-secondary)
    }
  `}

  ${props => props.isFilled && css`
    div:first-child {
      border-color: var(--background-secondary);
      color: var(--background-secondary);
    }
  `}

  & + div {
    margin-top: 10px;
  }
`

export const Error = styled(Tooltip)`
  height: 20px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    margin: 0;
  }

  span {
    background: #c53030;
    color: var(--color);

    &::before {
      border-color: #c53030 transparent;
    }
  }
`
