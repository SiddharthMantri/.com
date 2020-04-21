import React from "react"
import { GithubIcon, InstagramIcon, LinkedInIcon } from "../SvgIcons"
import styled from "styled-components"
import Container from "../Container"

const Wrapper = styled.div`
  display: flex;
  padding-top: 80px;
  padding-bottom: 32px;
  justify-content: center;
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
  @media screen and (max-width: 720px) {
    width: 140px;
    height: 4px;
    margin-top: 18px;
  }
`

const Social = props => {
  return (
    <Wrapper>
      <IconWrapper>
        <IconLink
          href="https://www.github.com/SiddharthMantri"
          target="_blank"
          title="Github Link for Sid Mantri's Repo"
        >
          <GithubIcon />
        </IconLink>
      </IconWrapper>
      <IconWrapper>
        <IconLink
          href="https://www.linkedin.com/in/SiddharthMantri"
          target="_blank"
          title="Connect with Sid on LinkedIn"
        >
          <LinkedInIcon />
        </IconLink>
      </IconWrapper>
      <IconWrapper>
        <IconLink
          href="https://www.instagram.com/siddharthmantri"
          target="_blank"
          title="Follow Sid on Instagram at instagram.com/siddharthmantri"
        >
          <InstagramIcon />
        </IconLink>
      </IconWrapper>
      {/* <Spacer /> */}
    </Wrapper>
  )
}
export default Social
