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
      <link rel="canonical" href="http://sidamantri.com/" />
    </Helmet>
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
        I am a 28 year old Software Engineer based in Madrid, Spain. Over the
        years I have worked as a Senior Developer in New York City and Senior
        Frontend Engineer in Spain.
        <br />
        <br />
        I have also worked extensively as a freelancer in India with various
        startups who required cleanly designed websites, dynamic web
        applications or even simple portfolio websites.
        <br />
        <br />
      </ElevatorContent>
      <ElevatorContent>
        I have also worked extensively as a freelancer in India with various
        startups who required cleanly designed websites, dynamic web
        applications or even simple portfolio websites.
        <br />
        <br />I have been forunate to work with extremely talented engineers and
        designers and I have earned valuable experience that has helped me
        become a better professional.
      </ElevatorContent>
    </Container>
    <Skills title={"Skills"} skills={SkillItems} />
    <InstagramBanner bannerText="I have been very fortunate to have jobs that have let me explore my love of photography. Check out my portfolio on Instagram!" />
  </>
)

export default IndexPage
