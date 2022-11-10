import styled from 'styled-components'
import { device } from '../../assets/styles/theme'

export const ResultWrapper = styled.div`
  @media ${device.tablet} {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 800px;
  }
`
export const ProductBox = styled.div`
  margin-bottom: 3rem;

  @media ${device.tablet} {
    width: 50%;
  }
`
export const ProductImg = styled.img``
export const ProductName = styled.h2`
  text-align: center;
  font-size: 1.7rem;
  margin: 0.5rem 0;
`
export const ProductPrice = styled.p`
  font-weight: 700;
  margin: 0.4rem 0;
`
export const ProductLink = styled.a`
  -webkit-appearance: button;
  -moz-appearance: button;

  text-decoration: none;

  color: #fff;
  background-color: #fcb316;
  font-size: 16px;
  padding: 10px 20px;
  border: none;
  font-weight: 500;
`
