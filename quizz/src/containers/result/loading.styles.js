import styled from 'styled-components'
import { LoadingColors } from '../../assets/styles/theme'

export const LoadingDiv = styled.div`

    position: relative;
    width: 0;
    height: 0;
    margin: 7em auto;
    animation: anim-rotate 1.2s infinite ease;
    
    

    &:before,
    &:after {
      content: '';
      position: absolute;
      width: 60px;
      height: 60px;
      top: 50%;
      left: 50%;
      margin-top: -30px;
      margin-left: -30px;
      border-radius: 30px;
      opacity: 0.9;
    }

    &::before {
      background: ${LoadingColors.colorBlue};
      transform: translate(-.95em, -.95em) scale(1);
      box-shadow: 1.9em 1.9em 0 ${LoadingColors.colorGreen};
      animation: anim-1-2 1.8s infinite ease;
    }

    &:after {
      background: ${LoadingColors.colorPink};
      transform: translate(.95em, -.95em) scale(1);
      box-shadow: -1.9em 1.9em 0 ${LoadingColors.colorYellow};
      animation: anim-3-4 1.8s infinite ease;
    }
  }

  @keyframes anim-1-2 {
    50% {
      transform: scale(1.3) translate(0, 0);
      box-shadow: 0 0 0 #72c45a;
      opacity: 0.8;
    }
  }

  @keyframes anim-3-4 {
    50% {
      transform: scale(1.3) translate(0, 0);
      box-shadow: 0 0 0 #ffd15b;
      opacity: 0.8;
    }
  }

  @keyframes anim-rotate {
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(360deg);
    }
    100% {
      transform: rotate(720deg);
    }
  
`
