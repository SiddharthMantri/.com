import React from "react"
import { Helmet } from "react-helmet"
import Landing from "../components/Landing"
import Social from "../components/Social"
import LandingIntro from "../components/LandingIntro"

const IndexPage = () => (
  <>
    <Helmet>
      <title>Sid Mantri - Front End Developer </title>
      <link rel="canonical" href="http://sidamantri.com/" />
    </Helmet>
    <Landing>
      <Social />
      <LandingIntro>
        Hi, I'm Sid. Frontend developer and web enthusiast.
      </LandingIntro>
    </Landing>
  </>
)

export default IndexPage
