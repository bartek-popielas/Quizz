import styled from 'styled-components'
import { Colors } from '../../assets/styles/theme'

export const StyledStepInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 150px;
  min-height: 30px;
  border: 1px black solid;
  border-radius: 10px;
  margin: 10px 0 0 0;
  padding: 0 5px;
`

export const StyledStep = styled.div`
  align-self: center;
  width: 15px;
  height: 15px;
  border: 1px black solid;
  border-radius: 50px;
  background: ${props => (props.num ? Colors.primary : 'transparent')};
`
