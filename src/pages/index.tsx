import React from "react"
import { Helmet } from "react-helmet"
import Landing from "../components/Landing"
import Social from "../components/Social"
import LandingIntro from "../components/LandingIntro"
import { Elevator, ElevatorContent } from "../components/Elevator"
import StuartLink from "../components/StuartLink"
import NameTag from "../components/NameTag"
import Skills from "../components/Skills"
import InstagramBanner from "../components/InstagramBanner"
import Container from "../components/Container"
import Footer from "../components/Footer"
import Fade from "../components/Fade"

const SkillItems = [
  "HTML",
  "CSS",
  "Javascript",
  "React",
  "Angular",
  "Django",
  "Java",
  "SQL",
]

const IndexPage = () => (
  <>
    <Helmet>
      <title>Sid Mantri - Front End Developer </title>
      <link rel="canonical" href="https://sidmantri.com/" />
    </Helmet>
    <Fade fade={0.3}>
      <Social />
      <Landing>
        <LandingIntro>
          Hi, I'm Sid. Frontend developer and web enthusiast. I'm currently
          working at{" "}
          <StuartLink href="https://stuart.com/" target="_blank">
            Stuart
          </StuartLink>{" "}
          building great things!
          <br />
          <br />
          <NameTag>Siddharth Mantri</NameTag>
        </LandingIntro>
      </Landing>
      <Container>
        <ElevatorContent>
          <p>
            I am a 28 year old, Madrid-based Software Engineer. In the past, I
            have worked on various projects as a freelancer in India in
            collaboration with a number of startups who required clean websites,
            dynamic web applications, and simple portfolio websites.
          </p>
          <p>
            An interest in FinTech took me to the USA, where I pursued Financial
            Engineering and had the opportunity to work as a Senior Developer at
            a globally reputed investment bank in New York City.
          </p>
        </ElevatorContent>
        <ElevatorContent>
          <p>
            Eventually, the irresistible appeal of beaches, temperate climate,
            and traveling through Europe, brought me to Spain, where I currently
            work as a Senior Frontend Engineer.
          </p>
          <p>
            Over the years, I have been fortunate to have worked with extremely
            talented engineers and designers, enabling me to gather valuable
            experience that has helped me consistently sharpen my skills and
            become a better professional.
          </p>
        </ElevatorContent>
      </Container>
      <Skills title={"Skills"} skills={SkillItems} />
      <Container>
        <ElevatorContent>
          <p>
            When I’m not working on tech stuff, you can find me playing video
            games and guitar, or wandering off to explore intriguing new places.
          </p>
          <p>
            I have been lucky to have had jobs that let me explore my love for
            photography. Check out my portfolio on Instagram!
          </p>
        </ElevatorContent>
      </Container>
      <Footer />
    </Fade>
  </>
)

export default IndexPage
