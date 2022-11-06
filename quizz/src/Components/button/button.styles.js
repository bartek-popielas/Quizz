import styled from 'styled-components'
import { Colors } from '../../assets/styles/theme'

export const StyledButton = styled.button`
  margin: 20px 0;
  background: ${Colors.primary};
  padding: 10px 20px;
  color: white;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 0.1rem;
  border: none;
`
export const ErrSpan = styled.span`
  display: block;
  background: ${Colors.warningBackground};
  color: ${Colors.warningTxtColor};
  padding: 20px 30px;
`
