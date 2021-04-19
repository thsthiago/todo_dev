import styled, { css } from 'styled-components'

interface headerProps {
  bars: boolean;
}

const barsEffect = {
  barsEffect: css`
    width: 0px;
    background: #000;

    &::before {
      background: #000;
      transform: rotate(45deg) translate(0px);
      -webkit-transform: rotate(45deg) translate(0px);
    }

    &::after {
      background: #000;
      transform: rotate(-45deg) translate(0px);
      -webkit-transform: rotate(-45deg) translate(0px);
    }
  `
}

export const Container = styled.header<headerProps>`
  position: relative;
  width: 100%;
  height: 70px;
  background: var(--background);
  z-index: 3;

  > div {
    margin: 0 auto;
    max-width: 1100px;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2%;

    > div:last-of-type {
      display: none;

      > div {
        width: 40px;
        height: 40px;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 5%;
        z-index: 3;
        cursor: pointer;

        div {
          cursor: pointer;
          z-index: 2;
          top: 50%;
          left: 50%;
          margin-left: -50%;
          margin-top: -7.5px;
          background: white;

          &,
          &::before,
          &::after {
            cursor: pointer;
            position: absolute;
            width: 40px;
            height: 5px;
            border-radius: 5px;
            background: #fff;
            transition: .4s;
            -webkit-transition: .4s;
          }

          &::before{
            content: "";
            transform: translateY(-15px);
            -webkit-transform: translateY(-15px);
          }

          &:after{
            content: "";
            transform: translateY(15px);
            -webkit-transform: translateY(15px);
          }

          & {
            ${props => props.bars && barsEffect.barsEffect}
          }

        }
      }

      nav {
        display: flex;
        overflow-y: hidden;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        position: absolute;
        top: 0px;
        left: 0px;
        background: #fff;
        width: 100%;
        height: 0%;
        transition: height 0.5s;
        z-index: 2;

        a {
          text-decoration: none;
          width: 100%;
          text-align: center;
          color: var(--background-secondary);
          font-weight: 600;
          padding: 20px 5px;
          position: relative;
          border-left: 4px solid var(--title);
          margin-bottom: 1%;

          &:hover{
            color: var(--background-secondary);
          }

          svg {
            position: absolute;
            top:50%;
            left: 2%;
            transform: translateY(-50%);
          }
        }

        ${props => props.bars && 'height: 100vh;'}
      }
    }

    @media(max-width: 1023px) {
      max-width: 80%;
    }

    @media(max-width: 767px) {
      max-width: 80%;

      > a {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        img {
          height: 25px;
        }
      }

      > div:first-of-type {
        display: none;
      }

      > div:last-of-type {
        display: block;
      }
    }

    img {
      height: 30px;
    }
  }
`
