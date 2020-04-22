import React from "react"
import styled from "styled-components"
import Container from "../Container"
import { CopyrightIcon } from "../SvgIcons"
import GatsbyLink from "../GatsbyLink"

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
    <GatsbyLink to="/gallery" style={{ float: "right" }}>
      <p
        style={{
          margin: "0px 8px",
          paddingTop: "2px",
          fontWeight: 500,
          fontFamily: "Hind, 'sans-serif'",
          color: "#333",
        }}
      >
        Gallery
      </p>
    </GatsbyLink>
  </FooterWrapper>
)
export default Footer
