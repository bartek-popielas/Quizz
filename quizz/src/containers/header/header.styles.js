import styled from 'styled-components'
import { device } from '../../assets/styles/theme'

export const StyledHeader = styled.div`
  margin: 0 auto;
`

export const Img = styled.img`
  width: 75px;
  height: auto;
  padding: 20px 0;
`

export const H2 = styled.h2`
  text-align: left;
  font-size: 1.6rem;
  margin: 0 35px;
  display: block;
  padding-bottom: 10px;
  border-bottom: 3px black solid;

  @media ${device.tablet} {
    max-width: 400px;
  }
`
