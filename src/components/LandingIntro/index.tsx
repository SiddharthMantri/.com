import React from "react"
import styled from "styled-components"
import Container from "../Container"

const LandingIntroWrapper = styled(Container)`
  font-family: "Merriweather", serif;
  font-weight: 900;
  font-size: 3rem;
  text-align: left;
  animation: fadein 2s;
  -moz-animation: fadein 2s;
  -webkit-animation: fadein 2s;
  -o-animation: fadein 2s;
  margin: 80px auto;

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
  @media screen and (max-width: 720px){
      width: 100%;
      font-size: 1.5rem;
  }
`

const LandingIntro = ({ children }: { children: React.ReactNode }) => (
  <LandingIntroWrapper>
    <LandingText>{children}</LandingText>
  </LandingIntroWrapper>
)
export default LandingIntro
