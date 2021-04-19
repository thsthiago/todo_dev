import styled from 'styled-components'

interface inputData {
  err: boolean;
}

export const Container = styled.input<inputData>`
  flex: 1;
  background: transparent;
  border: none;
  border-bottom: solid 1px var(--background-input);
  border-color: ${props => props.err && '#c53030'};

  @media(max-width: 767px) {
    flex: 1;
    width: 100%;
  }
`
