import React from "react"
import styled from "styled-components"
import Container from "../Container"

const SkillsTitle = styled.h2`
  font-family: "Merriweather", serif;
  font-weight: 700;
  @media screen and (max-width: 720px) {
    font-size: 1.4rem;
  }
`

const SkillsList = styled.div`
  margin-top: 40px;
  padding-left: 0;
  display: flex;
  width: 100%;
  flex-wrap: wrap;
`

const SkillItem = styled.div`
  flex: 1 0 25%;
  font-family: 'Hind', sans-serif;
  padding: 16px 0px;

`

const Skills = ({ title, skills }: { title: string; skills: string[] }) => (
  <Container style={{ padding: "40px 16px" }}>
    <div style={{ width: "100%" }}>
      <SkillsTitle>{title}</SkillsTitle>
      <SkillsList>
        {skills.map(skill => (
          <SkillItem>{skill}</SkillItem>
        ))}
      </SkillsList>
    </div>
  </Container>
)

export default Skills
