import styled from "styled-components";
import {device} from "../../assets/styles/theme";

export const GlobalContainer = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  
  @media ${device.tablet} {
    width: 50vw;
    padding-top: 20px;
  }
`;
