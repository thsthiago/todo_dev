import styled from 'styled-components'
import backgroundList from '../../assets/background_transparent.svg'
import { Form as Formulario } from '@unform/web'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-bottom: 20px;
  background: url(${backgroundList}) no-repeat;
  background-position: center 80%;
  background-size: 45% 45%;

  > section {
    width: 100%;
    height: 160px;
    background: var(--background);

    > div {
      position: relative;
      max-width: 800px;
      height: 100%;
      margin: 0 auto;

      div {
        position: absolute;
        bottom: -50%;
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;

        p{
          background: #fff;
          border-radius: 50%;
          padding: 20px;

          svg {
            font-size: 200px;
          }
        }

        h1 {
          padding-bottom: 60px;
          padding-left: 40px;
          font-size: 2rem;
        }

        @media(max-width: 1024px) {
          justify-content: center;
          p {
            margin-left: -15%;
            svg {
              font-size: 140px;
            }
          }

          h1 {
            font-size: 30px;
          }
        }

        @media(max-width: 600px) {
          flex-direction: column;
          align-items: center;

          p {
            margin-left: 0%;
            svg {
              font-size: 140px;
            }
          }

          h1 {
            font-size: 30px;
            color: var(--background);
            padding: 0;
            border: 0;
            border-bottom: 3px solid var(--background);
          }
        }
      }
    }
  }

  > a {
    text-decoration: none;
    position: absolute;
    bottom: 20px;
    color: var(--background);
    font-weight: 500;
    display: flex;
    align-items: center;
    transition: color 0.4s;

    svg {
      margin-right: 5px;
    }

    &:hover {
      color: #6930C3;
    }
  }

  @media(max-width: 600px) {
    > a {
      width: 100%;
      position: relative;
      bottom: 0px;
      text-align: center;
      justify-content: center;
      margin-top: 10px;
      padding-bottom: 20px;
    }
  }
`

export const Form = styled(Formulario)`
  margin: 20px auto;
  max-width: 500px;
  width: 90%;
  padding-top: 100px;
  display: flex;
  align-items: center;
  flex-direction: column;

  @media(max-width: 600px) {
    padding-top: 150px;
  }
`
