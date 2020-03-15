import React from "react"
import styled from "styled-components"

//background: #fea47f;
//height: 90vh;
//height: 80vh;
/**
 * -webkit-transform: skewy(1deg);
  transform: skewy(1deg);
 */
const LandingWrapper = styled.div`
  width: 100%;
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
