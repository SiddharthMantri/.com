import React from "react"
import { Helmet } from "react-helmet"
import Landing from "../components/Landing"
import Social from "../components/Social"
import LandingIntro from "../components/LandingIntro"
import {
  Elevator,
  ElevatorContent,
  ElevatorContentPara,
} from "../components/Elevator"
import StuartLink from "../components/StuartLink"
import NameTag from "../components/NameTag"
import Skills from "../components/Skills"
import InstagramBanner from "../components/InstagramBanner"
import Container from "../components/Container"
import Footer from "../components/Footer"
import Fade from "../components/Fade"
import WorkTogether from "../components/WorkTogether"
import Divider from "../components/Divider"
import { CopyrightIcon } from "../components/SvgIcons"

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
      <title>Sid Mantri - Front End Developer</title>
      <link rel="canonical" href="https://sidmantri.com/" />
      <meta
        name="title"
        content="Sid Mantri - Front End Developer - SidMantri"
      />
      <meta
        name="description"
        content="Design and Technology have always been the heart of all my interests."
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://sidmantri.com/" />
      <meta
        property="og:title"
        content="Sid Mantri - Front End Developer - SidMantri"
      />
      <meta
        property="og:description"
        content="Design and Technology have always been the heart of all my interests."
      />
      {/* <meta property="og:image" content={LandingImage} /> */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://sidmantri.com/" />
      <meta
        property="twitter:title"
        content="Sid Mantri - Front End Developer - SidMantri"
      />
      <meta
        property="twitter:description"
        content="Design and Technology have always been the heart of all my interests."
      />
      {/* <meta property="twitter:image" content={LandingImage} /> */}
      <html lang="en" />
    </Helmet>
    <Fade fade={0.3}>
      <Container>
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
        <Elevator style={{ marginTop: "32px" }}>
          <ElevatorContent>
            <ElevatorContentPara>
              I am a 28 year old, Madrid-based Software Engineer. In the past, I
              have worked on various projects as a freelancer in India in
              collaboration with a number of startups who required clean
              websites, dynamic web applications, and simple portfolio websites.
            </ElevatorContentPara>
            <ElevatorContentPara>
              An interest in FinTech took me to the USA, where I pursued
              Financial Engineering and had the opportunity to work as a Senior
              Developer at a globally reputed investment bank in New York City.
            </ElevatorContentPara>
          </ElevatorContent>
          <ElevatorContent>
            <ElevatorContentPara>
              Eventually, the irresistible appeal of beaches, temperate climate,
              and traveling through Europe, brought me to Spain, where I
              currently work as a Senior Frontend Engineer.
            </ElevatorContentPara>
            <ElevatorContentPara>
              Over the years, I have been fortunate to have worked with
              extremely talented engineers and designers, enabling me to gather
              valuable experience that has helped me consistently sharpen my
              skills and become a better professional.
            </ElevatorContentPara>
          </ElevatorContent>
        </Elevator>
        <Skills title={"Skills"} skills={SkillItems} />
        <WorkTogether
          title={`Let's Work Together`}
          content1={
            "If you'd like to work together and build an awesome product, please contact me at"
          }
          email={"siddharthmantri1@gmail.com"}
        />
        <Divider />
        <Elevator style={{ paddingTop: "30px" }}>
          <ElevatorContent>
            <ElevatorContentPara>
              When I’m not working on technology or design, you can find me
              playing video games and guitar, or wandering off to explore
              intriguing new places.
            </ElevatorContentPara>
            <ElevatorContentPara>
              I have been lucky to have had jobs that let me explore my love for
              photography. Check out my portfolio on Instagram!
            </ElevatorContentPara>
          </ElevatorContent>
          <ElevatorContent>
            <InstagramBanner />
          </ElevatorContent>
        </Elevator>
        <Footer>
          <CopyrightIcon />
          <h5 style={{ margin: "0px 8px" }}>Siddharth Mantri</h5>
        </Footer>
      </Container>
    </Fade>
  </>
)

export default IndexPage
