import React from "react"
import styled from "styled-components"
import Container from "../Container"

const Content = styled.div`
  width: 50%;
  font-family: "Hind", sans-serif;
  padding: 80px 0px;
  flex: 1 0 50%;
  align-items: flex-start;
  @media screen and (max-width: 720px){
    width: 100%;
    padding: 16px 0px 0px 0px;
  }
`

const InstagramBanner = ({ bannerText }: { bannerText: string }) => {
  return (
    <Container>
      <Content>{bannerText}</Content>
      <Content>{bannerText}</Content>
    </Container>
  )
}

export default InstagramBanner
