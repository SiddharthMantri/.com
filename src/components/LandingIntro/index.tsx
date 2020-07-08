import React from "react"
import styled from "styled-components"
import Container from "../Container"

const LandingIntroWrapper = styled.div`
  font-family: "Merriweather", serif;
  font-weight: 900;
  font-size: 3rem;
  text-align: left;
  line-height: 1;
`

const LandingText = styled.div`
  width: 100%;
  font-family: "Merriweather", serif;
  font-weight: 900;
  font-size: 3rem;
  text-align: center;
  @media screen and (max-width: 720px) {
    width: 100%;
    font-size: 1.5rem;
  }
  @media screen and (min-width: 721px) and (max-width: 1024px) {
    width: 100%;
  }
`

const LandingIntro = ({ children }: { children: React.ReactNode }) => (
  <LandingIntroWrapper>
    <LandingText>{children}</LandingText>
  </LandingIntroWrapper>
)
export default LandingIntro
