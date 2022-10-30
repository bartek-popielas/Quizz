import styled from "styled-components";
import {Colors} from "../../assets/styles/theme";



export const StyledLabel1= styled.label`
  margin: 30px 0 10px 0;
  font-weight: bold;
  font-size: 1.6rem;
`;


export const StyledInput1 = styled.input`
  width: 250px;
  height: 60px;
  border-radius: 40px;
  border: 2px solid ${Colors.black};
  padding: 0 20px;
  margin: 10px 0;
  
  &:focus, :active, :hover{
   border: 1px solid ${Colors.primary};
  }
`;