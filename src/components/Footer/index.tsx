import React from "react"
import styled from "styled-components"
import Container from "../Container"
import { CopyrightIcon } from "../SvgIcons"

const FooterWrapper = styled.div`
  padding: 50px 0px;
  display: flex;
  align-items: center;
`

const Footer = () => (
  <FooterWrapper>
    <CopyrightIcon />
    <p
      style={{
        margin: "0px 8px",
        paddingTop: "2px",
        fontWeight: 900,
        fontFamily: "Hind, 'sans-serif'",
      }}
    >
      Siddharth Mantri
    </p>
  </FooterWrapper>
)
export default Footer
