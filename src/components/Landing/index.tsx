import React from "react"
import styled from "styled-components"

const LandingWrapper = styled.div`
  width: 100%;
  display: flex;
`

const LandingInner = styled.div`
  width: 100%;
  @media screen and (max-width: 720px) {
    padding: 0px;
  }
`
const Landing = ({ children }: { children?: React.ReactNode }) => (
  <LandingWrapper>
    <LandingInner>{children}</LandingInner>
  </LandingWrapper>
)

export default Landing
