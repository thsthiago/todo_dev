import styled from 'styled-components'

export const Container = styled.header`
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

    img {
      height: 30px;
    }
  }
`
