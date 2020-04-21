import React from "react"
import { Helmet } from "react-helmet"
import Container from "../components/Container"
import Social from "../components/Social"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const Portfolio = () => {
  return (
    <>
      <Helmet>
        <title>
          Freelance Frontend Developer & UI/UX Designer, Madrid - Sid Mantri
        </title>
        <link rel="canonical" href="https://sidmantri.com/" />
        <meta
          property={"site_name"}
          content="Sid Mantri - Madrid | Siddharth Mantri"
        />
        <meta
          property={"og:site_name"}
          content="Sid Mantri - Madrid | Siddharth Mantri"
        />
        <meta
          property={"twitter:site_name"}
          content="Sid Mantri - Madrid | Siddharth Mantri"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <meta
          name="title"
          content="Sid Mantri - Front End Developer - Madrid"
        />

        <meta
          name="description"
          content="Hi, I'm Siddharth Mantri! Over the years I have worked on many exciting projects. Here are some of them."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sidmantri.com/" />
        <meta
          property="og:title"
          content="Sid Mantri - Front End Developer - Madrid"
        />
        <meta
          property="og:description"
          content="Hi, I'm Siddharth Mantri! Over the years I have worked on many exciting projects. Here are some of them."
        />
        {/* <meta property="og:image" content={LandingImage} /> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://sidmantri.com/" />
        <meta
          property="twitter:title"
          content="Sid Mantri - Front End Developer - Madrid"
        />
        <meta
          property="twitter:description"
          content="Hi, I'm Siddharth Mantri! Over the years I have worked on many exciting projects. Here are some of them."
        />
        {/* <meta property="twitter:image" content={LandingImage} /> */}
        <html lang="en" />
      </Helmet>
      <Container>
        <Social />
      </Container>
    </>
  )
}

export default Portfolio
