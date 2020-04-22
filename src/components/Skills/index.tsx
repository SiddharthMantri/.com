import React from "react"
import styled from "styled-components"
import Heading from "../Heading"

const ItemList = styled.div`
  margin-top: 40px;
  padding-left: 0;
  display: flex;
  width: 100%;
  flex-wrap: wrap;
`

const ListItem = styled.div`
  flex: 1 0 25%;
  font-family: "Hind", sans-serif;
  padding: 16px 0px;
  @media screen and (max-width: 720px) {
    flex: 1 0 50%;
    text-align: center;
  }
`

const TitleWithList = ({ title, list }: { title: string; list: string[] }) => (
  <div style={{ width: "100%", textAlign: "center" }}>
    <Heading variant="h2">{title}</Heading>
    <ItemList>
      {list.map(skill => (
        <ListItem key={skill}>{skill}</ListItem>
      ))}
    </ItemList>
  </div>
)

export default TitleWithList
