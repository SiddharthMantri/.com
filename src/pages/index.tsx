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
import { Paragraph } from "../components/Paragraph"

const SkillItems = [
  "HTML",
  "CSS",
  "Javascript",
  "React",
  "Angular",
  "Django",
  "Java and Spring",
  "SQL",
]

const IndexPage = () => (
  <>
    <Helmet>
      <title>Sid Mantri - Front End Developer</title>
      <link rel="canonical" href="https://sidmantri.com/" />
      <meta property={"site_name"} content="Sid Mantri - Madrid" />
      <meta property={"og:site_name"} content="Sid Mantri - Madrid" />
      <meta property={"twitter:site_name"} content="Sid Mantri - Madrid" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      ></meta>
      <meta
        name="title"
        content="Sid Mantri - Front End Developer - SidMantri"
      />

      <meta
        name="description"
        content="Hi, I'm Siddharth Mantri! Based out of Madrid, I'm always interested in taking on new and interesting projects.
        Design and Technology have always been the heart of all my interests."
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://sidmantri.com/" />
      <meta
        property="og:title"
        content="Sid Mantri - Front End Developer - SidMantri"
      />
      <meta
        property="og:description"
        content="Hi, I'm Siddharth Mantri! Based out of Madrid, I'm always interested in taking on new and interesting projects.
        Design and Technology have always been the heart of all my interests."
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
        content="Hi, I'm Siddharth Mantri! Based out of Madrid, I'm always interested in taking on new and interesting projects.
        Design and Technology have always been the heart of all my interests."
      />
      {/* <meta property="twitter:image" content={LandingImage} /> */}
      <html lang="en" />
    </Helmet>
    <Fade fade={0.3}>
      <Container>
        <Social />
        <Landing>
          <LandingIntro>
            Hi, I'm Sid, frontend developer and web enthusiast. I'm currently
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
            <Paragraph>
              I am a 28 year old, Madrid-based Software Engineer working on
              delivering high quality web experiences in Fintech and Logistics.
              In the past, I have worked on various projects as a freelancer in
              India in collaboration with a number of startups who required
              clean websites, dynamic web applications, and simple portfolio
              websites.
            </Paragraph>
            <Paragraph>
              An interest in FinTech took me to the USA, where I pursued
              Financial Engineering and had the opportunity to work as a Senior
              Developer at a globally reputed investment bank in New York City.
            </Paragraph>
          </ElevatorContent>
          <ElevatorContent>
            <Paragraph>
              Eventually, the irresistible appeal of beaches, temperate climate,
              and traveling through Europe, brought me to Spain, where I
              currently work as a Senior Frontend Engineer.
            </Paragraph>
            <Paragraph>
              Over the years, I have been fortunate to have worked with
              extremely talented engineers and designers, enabling me to gather
              valuable experience that has helped me consistently sharpen my
              skills and become a better professional.
            </Paragraph>
          </ElevatorContent>
        </Elevator>
        <Skills title={"Skills"} skills={SkillItems} />
        <WorkTogether
          title={`Let's Work Together`}
          content1={
            "Feel free to reach out if you have questions, looking for a developer or simply want to chat! Contact me at "
          }
          email={"siddharthmantri1@gmail.com"}
        />
        <Divider />
        <Elevator style={{ paddingTop: `calc(30px + 1.45rem)` }}>
          <ElevatorContent>
            <Paragraph>
              When I’m not working on technology or design, you can find me
              playing video games and guitar, or wandering off to explore
              intriguing new places.
            </Paragraph>
          </ElevatorContent>
          <ElevatorContent>
            <Paragraph>
              I have been lucky to have had jobs that let me explore my love for
              photography.{" "}
              <StuartLink
                target="_blank"
                href="https://www.instagram.com/siddharthmantri"
              >
                Come say hi on Instagram!
              </StuartLink>
            </Paragraph>
          </ElevatorContent>
        </Elevator>
        <Footer>
          <CopyrightIcon />
          <p
            style={{
              margin: "0px 8px",
              paddingTop: "2px",
              fontWeight: 900,
              fontFamily: "Hind, 'sans-serif'",
            }}
          >
            Siddharth Mantri
          </p>
        </Footer>
      </Container>
    </Fade>
  </>
)

export default IndexPage
