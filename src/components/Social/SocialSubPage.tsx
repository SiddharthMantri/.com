import React from "react"
import {
  GithubIcon,
  InstagramIcon,
  LinkedInIcon,
  ArrowLeftIcon,
} from "../SvgIcons"
import styled from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { Link } from "gatsby"

const Wrapper = styled.div`
  display: flex;
  padding-top: 80px;
  padding-bottom: 32px;
  justify-content: left;
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

const SocialSubPage = () => {
  return (
    <Wrapper>
      <IconWrapper style={{ padding: 10 }}>
        <Link to="/">
          <ArrowLeftIcon />
        </Link>
      </IconWrapper>
      <IconWrapper>
        <IconLink
          href="https://www.github.com/SiddharthMantri"
          target="_blank"
          title="Github Link for Sid Mantri's Repo"
          rel="noreferrer"
        >
          <GithubIcon />
        </IconLink>
      </IconWrapper>
      <IconWrapper>
        <IconLink
          href="https://www.linkedin.com/in/SiddharthMantri"
          target="_blank"
          title="Connect with Sid on LinkedIn"
          rel="noreferrer"
        >
          <LinkedInIcon />
        </IconLink>
      </IconWrapper>
      <IconWrapper>
        <IconLink
          href="https://www.instagram.com/sidmantri_"
          target="_blank"
          title="Follow Sid on Instagram at instagram.com/sidmantri_"
          rel="noreferrer"
        >
          <InstagramIcon />
        </IconLink>
      </IconWrapper>
      
      <Spacer />
      <p
        style={{
          margin: "0px 10px",
          paddingTop: "10px",
          fontWeight: 900,
          fontFamily: "Hind, 'sans-serif'",
        }}
      >
        Siddharth Mantri
      </p>
    </Wrapper>
  )
}
export default SocialSubPage
