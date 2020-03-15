import React from "react"
import styled from "styled-components"

const Fade = styled.div<{ fade: number }>`
  -moz-animation: fadein ${props => props.fade}s;
  -webkit-animation: fadein ${props => props.fade}s;
  -o-animation: fadein ${props => props.fade}s;
  animation: fadein 2s;
  @keyframes fadein {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
    }
  }
  @-moz-keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @-webkit-keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @-o-keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`
export default Fade
