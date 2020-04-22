import { graphql } from "gatsby"
import React from "react"
import Container from "../components/Container"
import Heading from "../components/Heading"
import HelmetHead from "../components/HelmetHead"
import InstagramImage, {
  InstagramPageWrapper,
} from "../components/InstagramImage"
import { Paragraph } from "../components/Paragraph"
import SocialSubPage from "../components/Social/SocialSubPage"
import StuartLink from "../components/StuartLink"
import Fade from "../components/Fade"
import Footer from "../components/Footer"
import { Node, GatsbyIgSource } from "../types/global"

const Gallery = ({ data }: { data: GatsbyIgSource }) => (
  <>
    <HelmetHead
      title={"Photography Portfolio - Sid Mantri"}
      description={`Over the last few years, I have had the pleasure of living in and
        traveling to some very stunning places. Here are some of my favorite
        photos from when I was off exploring. `}
    />
    <Fade fade={0.3}>
      <Container>
        <SocialSubPage />
        <Heading variant="h2">Photography Portfolio</Heading>
        <Paragraph>
          Over the last few years, I have had the pleasure of living in and
          traveling to some very stunning places. Here are some of my favorite
          photos from when I was off exploring. Follow me on{" "}
          <StuartLink
            href="https://www.instagram.com/siddharthmantri"
            target="_blank"
            title="Follow Sid on Instagram at instagram.com/siddharthmantri"
            rel="noreferrer"
          >
            Instagram
          </StuartLink>{" "}
          to see more of my travel photography. You can also download some of
          them as HD wallpapers on{" "}
          <StuartLink
            href="https://www.unsplash.com/@sidmantri"
            target="_blank"
            title="Download gallery as wallpapers on Unsplash.com/@sidmantri"
            rel="noreferrer"
          >
            Unsplash
          </StuartLink>
          .
        </Paragraph>

        <InstagramPageWrapper>
          {data.allInstaNode.edges.map((edge, i) => (
            <InstagramImage edge={edge} key={i} />
          ))}
        </InstagramPageWrapper>
        <Footer />
      </Container>
    </Fade>
  </>
)
export const query = graphql`
  query ScrapingQuery {
    allInstaNode(filter: { username: { eq: "siddharthmantri" } }) {
      edges {
        node {
          id
          username
          likes
          caption
          comments
          localFile {
            childImageSharp {
              fluid(quality: 70, maxWidth: 600, maxHeight: 600) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          thumbnails {
            src
            config_width
            config_height
          }
          dimensions {
            height
            width
          }
        }
      }
    }
  }
`

export default Gallery
