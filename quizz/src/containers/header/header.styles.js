import styled from "styled-components";
import {device} from "../../assets/styles/theme";

export const StyledHeader = styled.div`
  margin: 0 auto;
`;

export const Img = styled.img`
  margin: 25px;
`;

export const H2 = styled.h2`
  text-align: left;
  font-size: 1.8rem;
  margin: 0 35px;
  display: block;
  padding-bottom: 10px;
  border-bottom: 3px black solid;

  @media ${device.tablet} {
    max-width: 550px;
  }
`;