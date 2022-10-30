import styled from "styled-components";
import { device } from "../../assets/styles/theme";

export const StyledContent = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContentImg = styled.img`
  margin: 60px 0 30px 0;
`;

export const ContentP = styled.p`
  text-align: center;
  font-weight: bold;
  padding: 0 40px;

  @media ${device.tablet} {
    max-width: 350px;
  }
`;