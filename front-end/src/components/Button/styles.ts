import styled from 'styled-components'
import { shade } from 'polished'

const Container = styled.button`
  background-color: var(--background-secondary);
  height: 60px;
  width: 100%;
  max-width: 340px;
  border-radius: 10px;
  border: none;
  color: var(--color);
  margin-top: 10px;
  transition: background .4s;

  &:hover {
    background: ${shade(0.2, '#6930C3')}
  }
`

export default Container
