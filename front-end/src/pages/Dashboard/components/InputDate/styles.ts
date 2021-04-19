import styled from 'styled-components'
import calendarImg from '../../../../assets/calendar.svg'

interface inputData {
  err: boolean;
}

export const Container = styled.input<inputData>`
  margin: 0 15px;
  width: 140px;
  background: url(${calendarImg}) no-repeat;
  background-position: 98% 0%;
  background-size: 16px;
  border: none;
  border-bottom: solid 1px var(--background-input);
  border-color: ${props => props.err && '#c53030'};

  &::-webkit-calendar-picker-indicator {
    opacity: 0;
    width: 16px;
  }
`
