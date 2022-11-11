import styled from 'styled-components'
import { Colors } from '../../assets/styles/theme'

export const StyledItem = styled.div``

export const StyledLabel = styled.label`
  border-radius: 100px;
  width: 250px;
  height: 60px;
  border: 2px solid ${Colors.black};
  display: flex;
  align-items: center;
  position: relative;
  margin: 5px 0;

  &:nth-child(${props => props.inputNum}) {
    background: ${Colors.selectGradient};
    color: ${Colors.white};
    font-weight: 700;
  }
`

export const StyledQuestionInput = styled.input`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 50px;
  height: 50px;
  border-radius: 100px;
  opacity: 0;
`

export const StyledMyDiv = styled.div`
  position: absolute;
  left: 30%;
  top: 38%;
  font-weight: 700;
`

export const InputImg = styled.img`
  position: absolute;
  left: 1.5%;
  top: 5%;
  width: 50px;
  height: 50px;
`
