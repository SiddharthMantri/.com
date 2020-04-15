import React from "react"
import { Helmet } from "react-helmet"
import Container from "../components/Container"
import { Elevator } from "../components/Elevator"
import styled from "styled-components"
import { Link } from "gatsby"

const Message = styled.h1`
  font-family: "Merriweather", serif;
  font-weight: 900;
  font-size: 3rem;
`
const MissingContainer = styled.div`
  width: 100%;
  padding: 80px;
  text-align: center;
`

const GLink = styled(Link)`
  font-size: 1rem;
  color: #aaa;
  font-family: "Hind", sans-serif;
  font-weight: 400;
  text-align: center;
  text-decoration: none;
`

const NotFoundPage = () => (
  <>
    <Helmet>
      <title>Page not found - Siddharth Mantri</title>
      <link rel="canonical" href="https://sidmantri.com/" />
      <meta property={"site_name"} content="Sid Mantri - Madrid" />
      <meta property={"og:site_name"} content="Sid Mantri - Madrid" />
      <meta property={"twitter:site_name"} content="Sid Mantri - Madrid" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      ></meta>
      <meta
        name="title"
        content="Sid Mantri - Front End Developer - SidMantri"
      />

      <meta
        name="description"
        content="Hi, I'm Siddharth Mantri! Based out of Madrid, I'm always interested in taking on new and interesting projects.
        Design and Technology have always been the heart of all my interests."
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://sidmantri.com/" />
      <meta
        property="og:title"
        content="Sid Mantri - Front End Developer - SidMantri"
      />
      <meta
        property="og:description"
        content="Hi, I'm Siddharth Mantri! Based out of Madrid, I'm always interested in taking on new and interesting projects.
        Design and Technology have always been the heart of all my interests."
      />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://sidmantri.com/" />
      <meta
        property="twitter:title"
        content="Sid Mantri - Front End Developer - SidMantri"
      />
      <meta
        property="twitter:description"
        content="Hi, I'm Siddharth Mantri! Based out of Madrid, I'm always interested in taking on new and interesting projects.
        Design and Technology have always been the heart of all my interests."
      />
      <html lang="en" />
    </Helmet>
    <Container>
      <MissingContainer>
        <Message>Oops! 404, page not found</Message>
        <GLink to="/">Go to homepage</GLink>
      </MissingContainer>
    </Container>
  </>
)

export default NotFoundPage
