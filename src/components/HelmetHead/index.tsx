import React from "react"
import { Helmet } from "react-helmet"

const TITLE =
  "Freelance Frontend Developer & UI/UX Designer, Madrid - Sid Mantri"
const SITE_NAME = TITLE
const DESCRIPTION = `Hi, I'm Siddharth Mantri! Based out of Madrid, I'm always interested in taking on new and interesting projects.
Design and Technology have always been the heart of all my interests.`

type HelmetHeadProps = {
  title?: string
  description?: string
}

const HelmetHead = ({
  title = TITLE,
  description = DESCRIPTION,
}: HelmetHeadProps) => (
  <Helmet>
    <title>{title}</title>
    <link rel="canonical" href="https://sidmantri.com/" />
    <meta property={"site_name"} content={SITE_NAME} />
    <meta property={"og:site_name"} content={SITE_NAME} />
    <meta property={"twitter:site_name"} content={SITE_NAME} />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0"
    ></meta>
    <meta name="title" content={TITLE} />

    <meta name="description" content={description} />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://sidmantri.com/" />
    <meta property="og:title" content={TITLE} />
    <meta property="og:description" content={description} />
    {/* <meta property="og:image" content={LandingImage} /> */}
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="https://sidmantri.com/" />
    <meta property="twitter:title" content={TITLE} />
    <meta property="twitter:description" content={description} />
    {/* <meta property="twitter:image" content={LandingImage} /> */}
    <html lang="en" />
  </Helmet>
)

export default HelmetHead
