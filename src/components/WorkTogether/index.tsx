import React from "react"
import styled from "styled-components"
import { Paragraph } from "../Paragraph"
import Heading from "../Heading"

const Content = styled.div`
  width: 50%;
  font-family: "Hind", sans-serif;
  padding: 30px 0px;
  flex: 1 0 50%;
  font-weight: 500;
  align-items: flex-start;
  @media screen and (max-width: 720px) {
    width: 100%;
    padding: 30px 0px;
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
    <div style={{ width: "100%", marginTop: 80, textAlign: "center" }}>
      <Heading variant="h2">{title}</Heading>
      <Paragraph style={{ marginBottom: 0 }}>
        {content1}{" "}
        <Email href={`mailto:${email}`} target="_blank">
          {email}
        </Email>
      </Paragraph>
    </div>
  )
}
export default WorkTogether
