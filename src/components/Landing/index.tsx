import React from "react"
import styled from "styled-components"

const LandingWrapper = styled.div`
  height: 90vh;
  width: 100%;
  background: #fea47f;
  -webkit-transform: skewy(-1deg);
  transform: skewy(-1deg);
`
const LandingInner = styled.div`
  height: 80vh;
  width: 100%;
  padding: 160px 16px;
  background: #fea47f;
  -webkit-transform: skewy(1deg);
  transform: skewy(1deg);
`
const Landing = ({ children }: { children?: React.ReactNode }) => (
  <LandingWrapper>
    <LandingInner>{children}</LandingInner>
  </LandingWrapper>
)

export default Landing
