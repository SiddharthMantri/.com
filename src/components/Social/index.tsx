import React from "react"
import { GithubIcon, InstagramIcon, LinkedInIcon } from "../SvgIcons"
import styled from "styled-components"

const SocialWrapper = styled.div`
  width: 80%;
  margin: auto;
  max-height: 80px;
  display: flex;
  height: 80px;
`
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
    <SocialWrapper>
      <IconWrapper>
        <IconLink href="https://www.github.com/SiddharthMantri" target="_blank">
          <GithubIcon />
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
      <IconWrapper>
        <IconLink
          href="https://www.linkedin.com/in/SiddharthMantri"
          target="_blank"
        >
          <LinkedInIcon />
        </IconLink>
      </IconWrapper>
      <Spacer />
    </SocialWrapper>
  )
}
export default Social
