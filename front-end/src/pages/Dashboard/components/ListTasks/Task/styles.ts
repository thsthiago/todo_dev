import styled, { css } from 'styled-components'
import { animated } from 'react-spring'

interface statusTask {
  status: 'incomplete' | 'complete' | 'unsuccessful';
}

const colorStatus = {
  incomplete: css`
    background: var(--background);
  `,
  complete: css`
    background: var(--background-secondary);
  `,
  unsuccessful: css`
    background: #B93B3B;
  `
}

export const Container = styled(animated.div)<statusTask>`
  ${props => props.status ? colorStatus[props.status] : colorStatus.incomplete}
  width: 90%;
  max-width: 800px;
  display: flex;
  align-items: center;
  padding: 15px 30px;
  box-shadow: 0px 0px 10px 4px rgba(0, 0, 0, 0.1);
  border-radius: 10px;

  & + div {
    margin-top: 15px;
  }

  strong {
    flex: 1;
    padding-right: 10px;
  }

  div {
    display: flex;
    align-items: center;

    p {
      position: relative;
      margin: 0 4px;
      font-size: 0;
      cursor: pointer;

      &:hover span{
        display: block;
      }

      span {
        display: none;
        width: 130px;
        text-align: center;
        position: absolute;
        bottom: calc(100% + 14px);
        left: 50%;
        transform: translateX(-50%);
        background: var(--background);
        padding: 10px;
        font-size: 14px;
        box-shadow: 0px 0px 10px 4px rgba(0, 0, 0, 0.1);
        border-radius: 5px;
        border: 2px solid var(--background-secondary);

        &::after {
          content: " ";
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
          border-width: 10px;
          border-style: solid;
          border-color: ${props => props.status !== 'complete' ? '#6930C3' : '#252525'} transparent transparent transparent;
        }
      }

      svg {
        margin: 0 4px;
      }
    }

    button {
      background: transparent;
      margin: 0 4px;
      border: none;
      color: var(--color);
      font-size: 0px;
    }
  }
`
