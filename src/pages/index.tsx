import React from "react"
import Container from "../components/Container"
import { Elevator } from "../components/Elevator"
import Fade from "../components/Fade"
import Footer from "../components/Footer"
import GatsbyLink from "../components/GatsbyLink"
import Heading from "../components/Heading"
import HelmetHead from "../components/HelmetHead"
import Landing from "../components/Landing"
import LandingIntro from "../components/LandingIntro"
import NameTag from "../components/NameTag"
import { Paragraph } from "../components/Paragraph"
import TitleWithList from "../components/Skills"
import Social from "../components/Social"
import Spacer from "../components/Spacer"
import StuartLink from "../components/StuartLink"
import WorkTogether from "../components/WorkTogether"
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

const TechUsed = ["Gatsby", "Netlify", "DatoCMS", "Wordpress"]

const IndexPage = () => (
  <>
    <HelmetHead />
    <Fade fade={0.3}>
      <Container>
        <Social />
        <Landing>
          <LandingIntro>
            Hi, I'm Sid, adventure photographer and frontend engineer. I'm
            currently working at{" "}
            <StuartLink
              href="https://stuart.com/"
              target="_blank"
              rel="noreferrer"
            >
              Stuart
            </StuartLink>{" "}
            building great things!
            <br />
            <br />
            <NameTag>Siddharth Mantri</NameTag>
          </LandingIntro>
        </Landing>
        <Elevator style={{ marginTop: "32px" }}>
          {/* <ElevatorContent> */}
          <Paragraph>
            I am a 28 year old, Madrid/Almeria-based Software Engineer working
            on delivering high quality web experiences in Fintech and Logistics.
            In the past, I have worked on various projects as a freelancer in
            India in collaboration with a number of startups who required clean
            websites, dynamic web applications, and simple portfolio websites.
          </Paragraph>
          <Paragraph>
            An interest in FinTech took me to the USA, where I pursued Financial
            Engineering and had the opportunity to work as a Senior Developer at
            a globally reputed investment bank in New York City.
          </Paragraph>
          {/* </ElevatorContent> */}
          {/* <ElevatorContent> */}
          <Paragraph>
            Eventually, the irresistible appeal of beaches, temperate climate,
            and traveling through Europe, brought me to Spain, where I currently
            work as a Senior Frontend Engineer and freelance travel photgrapher.
          </Paragraph>
          <Paragraph>
            Over the years, I have been fortunate to have worked with extremely
            talented engineers and designers, enabling me to gather valuable
            experience that has helped me consistently sharpen my skills and
            become a better professional.
          </Paragraph>
          {/* </ElevatorContent> */}
        </Elevator>
        <Elevator
          style={{ textAlign: "center", padding: "40px 40px 0px 40px" }}
        >
          <Heading variant="h2">
            I design and build custom websites and apps that will help your
            business grow
          </Heading>
        </Elevator>
        <Spacer />
        <TitleWithList title={"Technologies I Use"} list={TechUsed} />
        <Spacer />
        <TitleWithList title={"Skills"} list={SkillItems} />
        <Spacer />
        <WorkTogether
          title={`Let's Work Together`}
          content1={
            "Feel free to reach out if you have questions, looking for a photographer for your brand or simply want to chat! Contact me at "
          }
          email={"hello@sidmantri.com"}
        />
        <Spacer />
        <Elevator>
          {/* <ElevatorContent> */}
          <Paragraph>
            When I’m not working on technology or design, you can find me
            playing video games and guitar, or wandering off to explore
            intriguing new places.
          </Paragraph>
          {/* </ElevatorContent> */}
          {/* <ElevatorContent> */}
          <Paragraph>
            I have been lucky to have had jobs that let me explore my love for
            photography.{" "}
            <StuartLink
              target="_blank"
              href="https://www.instagram.com/sidmantri_"
              rel="noreferrer"
            >
              Come say hi on Instagram!
            </StuartLink>{" "}
          </Paragraph>
          {/* </ElevatorContent> */}
        </Elevator>
        <Footer />
      </Container>
    </Fade>
  </>
)

export default IndexPage
