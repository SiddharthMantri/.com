import React from "react"
import styled from "styled-components"

const LandingIntroWrapper = styled.div`
  font-family: sans-serif;
  font-size: 3rem;
  text-align: left;
  animation: fadein 2s;
  -moz-animation: fadein 2s;
  -webkit-animation: fadein 2s;
  -o-animation: fadein 2s;
  margin: 80px auto;
  width: 80%;
  line-height: 1;
  @keyframes fadein {
    from {
      opacity: 0;
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
const LandingText = styled.div`
  width: 50%;
`

const LandingIntro = ({ children }: { children: React.ReactNode }) => (
  <LandingIntroWrapper>
    <LandingText>{children}</LandingText>
  </LandingIntroWrapper>
)
export default LandingIntro
