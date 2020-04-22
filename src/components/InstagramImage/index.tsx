import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { Node } from "../../types/global"
const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0);
  z-index: 2;
  opacity: 0;
  width: 355px;
  transition: 
  &:hover{
    background: rgba(0, 0, 0, 0.4);
    -webkit-transition: background 0.3s linear;
    -ms-transition: background 0.3s linear;
    transition: background 0.3s linear;
  }
}
`

const Wrapper = styled.a`
  position: relative;
  overflow: hidden;
`

export const InstagramPageWrapper = styled.div`
  display: grid;
  grid-template-columns: 390px 390px 390px;
  row-gap: 35px;
  column-gap: 0px;
  @media screen and (max-width: 720px) {
    grid-template-columns: 33% 33% 33%;
    row-gap: 5px;
    column-gap: 5px;
  }
`

const InstagramImage = ({ edge: { node } }: { edge: { node: Node } }) => (
  <Wrapper href={`https://www.instagram.com/p/${node.id}`} target="_blank">
    <Overlay />
    <Img
      fluid={node.localFile.childImageSharp.fluid}
      style={{
        maxWidth: "355px",
      }}
    />
  </Wrapper>
)
export default InstagramImage
