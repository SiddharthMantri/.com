import React from "react"
import { Helmet } from "react-helmet"
import Container from "../components/Container"
import { Elevator } from "../components/Elevator"
import styled from "styled-components"
import { Link } from "gatsby"
import HelmetHead from "../components/HelmetHead"

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
    <HelmetHead
      title={
        "Page not found - Sid Mantri - Adventure Photographer & Freelance Frontend Developer, Madrid - Sid Mantri"
      }
    />
    <Container>
      <MissingContainer>
        <Message>Oops! 404, page not found</Message>
        <GLink to="/">Go to homepage</GLink>
      </MissingContainer>
    </Container>
  </>
)

export default NotFoundPage
