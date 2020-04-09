import React from "react"
import styled from "styled-components"
import Container from "../Container"
import { graphql } from "gatsby"
import lh from "../../images/lh.jpg"
import inv from "../../images/inv.jpg"
import cny from "../../images/cny.jpg"
import polaris from "../../images/polaris.jpg"

const Img = styled.img`
  width: 126px;
  margin: 4px;
  @media screen and (max-width: 720px) {
    width: 142px;
  }
`

const InstagramBanner = () => {
  return (
    <div>
      <Img src={lh} alt="Lighthouse in Montauk, NYC" />
      <Img src={cny} alt="Gran Canarias National Park, Spain" />
      <Img src={inv} alt="Roque de los Muchachos, Spain" />
      <Img src={polaris} alt="North Star" />
    </div>
  )
}

export default InstagramBanner
