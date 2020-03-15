import React from "react"
import { GithubIcon, InstagramIcon, LinkedInIcon } from "../SvgIcons"
import styled from "styled-components"
import Container from "../Container"

const IconWrapper = styled.div`
  align-items: flex-start;
`
const IconLink = styled.a``

const Spacer = styled.span`
  width: 100px;
  height: 8px;
  background: black;
  margin-top: 16px;
`

const Social = props => {
  return (
    <Container style={{paddingTop: "80px"}}>
      <IconWrapper>
        <IconLink href="https://www.github.com/SiddharthMantri" target="_blank">
          <GithubIcon />
        </IconLink>
      </IconWrapper>
      <IconWrapper>
        <IconLink
          href="https://www.linkedin.com/in/SiddharthMantri"
          target="_blank"
        >
          <LinkedInIcon />
        </IconLink>
      </IconWrapper>
      <IconWrapper>
        <IconLink
          href="https://www.instagram.com/siddharthmantri"
          target="_blank"
        >
          <InstagramIcon />
        </IconLink>
      </IconWrapper>

      <Spacer />
    </Container>
  )
}
export default Social
