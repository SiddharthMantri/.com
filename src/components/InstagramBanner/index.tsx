import React from "react"
import styled from "styled-components"
import Container from "../Container"
import { graphql } from "gatsby"
import lh from "../../images/lh.jpg"
import inv from "../../images/inv.jpg"
import cny from "../../images/cny.jpg"
import polaris from "../../images/polaris.jpg"

const Img = styled.img`
  margin: 4px;
  align-items: flex-end;
  flex-grow: 1;
  max-width: 126px;
  @media screen and (max-width: 720px) {
    width: 142px;
    max-width: 150px;
  }
`
const ImgContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 100%;
`

const InstagramBanner = () => {
  return (
    <ImgContainer>
      <Img src={lh} alt="Lighthouse in Montauk, NYC" />
      <Img src={cny} alt="Gran Canarias National Park, Spain" />
      <Img src={inv} alt="Roque de los Muchachos, Spain" />
      <Img src={polaris} alt="North Star" />
    </ImgContainer>
  )
}

export default InstagramBanner
