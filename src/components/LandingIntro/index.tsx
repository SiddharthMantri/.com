import React from "react"
import styled from "styled-components"
import Container from "../Container"

const LandingIntroWrapper = styled(Container)`
  font-family: "Merriweather", serif;
  font-weight: 900;
  font-size: 3rem;
  text-align: left;
  xmargin: 80px auto;
  line-height: 1;
`

const LandingText = styled.div`
  width: 50%;
  @media screen and (max-width: 720px) {
    width: 100%;
    font-size: 1.5rem;
  }
  @media screen and (min-width: 721px) and (max-width: 1024px) {
    width: 100%;
    padding: 16px 24px 0px 16px;
    text-align: center;
  }
`

const LandingIntro = ({ children }: { children: React.ReactNode }) => (
  <LandingIntroWrapper>
    <LandingText>{children}</LandingText>
  </LandingIntroWrapper>
)
export default LandingIntro
