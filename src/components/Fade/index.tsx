import React from "react"
import styled from "styled-components"


const translate = 0;


const Fade = styled.div<{ fade: number }>`
  -moz-animation: fadein ${props => props.fade}s;
  -webkit-animation: fadein ${props => props.fade}s;
  -o-animation: fadein ${props => props.fade}s;
  animation: fadein ${props => props.fade}s;
  width: 100%;
  @keyframes fadein {
    from {
      opacity: 0;
      transform: translateY(${translate}px);
    }
    to {
      opacity: 1;
    }
  }
  @-moz-keyframes fadein {
    from {
      opacity: 0;
      transform: translateY(${translate}px);
    }
    to {
      opacity: 1;
    }
  }
  @-webkit-keyframes fadein {
    from {
      opacity: 0;
      transform: translateY(${translate}px);
    }
    to {
      opacity: 1;
    }
  }
  @-o-keyframes fadein {
    from {
      opacity: 0;
      transform: translateY(${translate}px);
    }
    to {
      opacity: 1;
    }
  }
`
export default Fade
