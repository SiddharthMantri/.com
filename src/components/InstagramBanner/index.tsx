import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  width: 80%;
  padding: 16px;
  margin: auto;
  display: flex;
`
const Content = styled.div`
  align-items: flex-start;
  width: 50%;
  font-family: "Hind", sans-serif;
  padding: 80px 0px;
`

const InstagramBanner = ({ bannerText }: { bannerText: string }) => {
  return (
    <Wrapper>
      <Content>{bannerText}</Content>
      <Content>{bannerText}</Content>
    </Wrapper>
  )
}

export default InstagramBanner
