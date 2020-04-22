import React from "react"
import styled from "styled-components"
import Heading from "../Heading"

const SkillsList = styled.div`
  margin-top: 40px;
  padding-left: 0;
  display: flex;
  width: 100%;
  flex-wrap: wrap;
`

const SkillItem = styled.div`
  flex: 1 0 25%;
  font-family: "Hind", sans-serif;
  padding: 16px 0px;
  @media screen and (max-width: 720px) {
    flex: 1 0 50%;
    text-align: center;
  }
`

const Skills = ({ title, skills }: { title: string; skills: string[] }) => (
  <div style={{ width: "100%", textAlign: "center" }}>
    <Heading variant="h2">{title}</Heading>
    <SkillsList>
      {skills.map(skill => (
        <SkillItem key={skill}>{skill}</SkillItem>
      ))}
    </SkillsList>
  </div>
)

export default Skills
