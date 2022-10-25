import styled from "styled-components";
import {device} from "../../assets/styles/theme";

export const StyledContent = styled.div`
  margin: 0 auto;
`;

export const ContentImg = styled.img`
  margin: 60px 0 30px 0;
`;

export const ContentP = styled.p`
  margin: 0 55px;
  font-weight: bold;

  @media ${device.tablet} {
    max-width: 350px;
  }
`;