import styled from 'styled-components'
import background from '../../assets/background.svg'

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
`

export const Background = styled.div`
  flex: 1;
  background: url(${background}) no-repeat center;
  background-size: 70%;
`

export const Content = styled.div`
  width: 100%;
  padding: 20px 10px;
  max-width: 550px;
  background-color: var(--background);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 70%;
    margin-bottom: 40px;
  }

  h1 {
    font-size: 30px;
  }

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
  }

  a {
    color: var(--color);
    text-decoration: none;
    display: flex;
    align-items: center;
    margin-top: 90px;
    transition: color .4s;

    svg {
      margin-right: 5px;
    }

    &:hover {
      color: var(--color-input)
    }
  }
`
