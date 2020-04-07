import React from "react"
import styled from "styled-components"

const Title = styled.h2`
  font-family: "Merriweather", serif;
  font-weight: 700;
  @media screen and (max-width: 720px) {
    font-size: 1.4rem;
  }
`

const Content = styled.div`
  width: 50%;
  font-family: "Hind", sans-serif;
  padding: 30px 0px;
  flex: 1 0 50%;
  font-weight: 500;
  align-items: flex-start;
  @media screen and (max-width: 720px) {
    width: 100%;
    padding: 16px 0px 0px 0px;
  }
`
const Email = styled.a`
  font-family: "Hind", sans-serif;
  text-decoration: underline;
  color: black;
  font-weight: 500;
`

const WorkTogether = ({
  title,
  content1,
  email,
}: {
  title: string
  content1: string
  email: string
}) => {
  return (
    <div style={{ width: "100%", marginTop: 80 }}>
      <Title>{title}</Title>
      <Content>
        {content1} <Email href={`mailto:${email}`} target="_blank">{email}</Email>
      </Content>
    </div>
  )
}
export default WorkTogether
