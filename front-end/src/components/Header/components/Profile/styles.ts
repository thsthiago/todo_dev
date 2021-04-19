import styled, { keyframes } from 'styled-components'

interface animate {
  nav: boolean;
}

const animateNav = keyframes`
  from { opacity: 0 }
  to { opacity: 1 }
`

export const Container = styled.div<animate>`
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;

  svg {
    margin-right: 5px;
  }

  div {
    position: absolute;
    top: calc(100% + 20px);
    left: 50%;
    transform: translateX(-50%);
    width: 150px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    background: var(--background-input);
    border: 2px solid #6930C3;

    &::after {
    content: " ";
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    border-width: 10px;
    border-style: solid;
    border-color: transparent transparent #6930C3 transparent;
  }

    a {
      color: var(--color);
      text-decoration: none;
      display: block;
      display: flex;
      justify-content: center;
      padding: 4px 0;
      transition: color 0.3s;
      animation-name: ${props => props.nav && animateNav};
      animation-duration: 0.4s;

      &:hover {
        color: #6930C3;
      }
    }

  }
`
