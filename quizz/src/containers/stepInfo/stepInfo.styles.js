import styled from 'styled-components'
import { Colors } from '../../assets/styles/theme'

export const StyledStepInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 200px;
  height: 40px;
  border: 1px black solid;
  border-radius: 10px;
  margin: 10px 0 0 0;
  padding: 0 5px;
`

export const StyledStep = styled.div`
  align-self: center;
  width: 20px;
  height: 20px;
  border: 1px black solid;
  border-radius: 50px;
  background: ${props => (props.num ? Colors.primary : 'transparent')};
`
