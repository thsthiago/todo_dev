import styled from 'styled-components'
import background from '../../assets/background.svg'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`

export const Background = styled.div`
  flex: 1;
  background: url(${background}) no-repeat center;
  background-size: 70%;
`

export const Content = styled.div`
  width: 100%;
  min-height: 500px;
  padding: 0px 10px;
  max-width: 550px;
  background-color: var(--background);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

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
    margin-top: 130px;
    transition: color .4s;

    svg {
      margin-left: 5px;
    }

    &:hover {
      color: var(--color-input)
    }
  }

  @media(max-width: 767px) {
    h1 {
      font-size: 20px;
    }

    a {
      margin-top: 80px;
      padding-bottom: 30px;
    }
  }
`
