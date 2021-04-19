import styled from 'styled-components'
import backgroundList from '../../assets/background_transparent.svg'

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
  position: relative;

  section {
    width: 100%;
    height: 160px;
    background: var(--background);
    position: relative;

    > div {
      max-width: 1100px;
      height: 100%;
      margin: 0 auto;
      display: flex;
      align-items: center;
      flex-direction: column;

      h1 {
        padding-top: 40px;
        font-size: 2rem;

        svg {
          font-size: 2rem;
          margin-right: 7px;
        }
      }
    }
  }

  @media(max-width: 1024px) {
    section div h1 {
      padding-top: 40px;
      font-size: 1.4rem;

      svg {
        font-size: 1.4rem;
        margin-right: 7px;
      }
    }
  }

  @media(max-width: 767px) {
    section div h1 {
      padding-top: 40px;
      font-size: 1.2rem;

      svg {
        font-size: 1.2rem;
        margin-right: 7px;
      }
    }
  }
`
