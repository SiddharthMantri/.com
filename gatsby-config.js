module.exports = {
  siteMetadata: {
    title: `Freelance Frontend Developer & UI/UX Designer, Madrid - Sid Mantri`,
    description: `Hi, I'm Siddharth Mantri! Based out of Madrid, I'm always interested in taking on new and interesting projects.
    Design and Technology have always been the heart of all my interests.`,
    author: `Siddharth Mantri`,
    siteUrl: `https://www.sidmantri.com`,
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Montserrat`,
            variants: [`400`, `500`, `700`, `900`],
          },
          {
            family: `Hind`,
            variants: [`400`, `500`, `600`, `700`],
          },
          {
            family: `Merriweather`,
            variants: [`400`, `700`, `900`],
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "UA-163716709-1",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        anonymize: true,
        respectDNT: true,
        exclude: ["http://localhost*"],
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
        cookieDomain: "sidmantri.com",
      },
    },
    `gatsby-plugin-transition-link`,
    {
      resolve: `gatsby-source-instagram`,
      options: {
        type: `account`,
        username: `siddharthmantri`,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Freelance Frontend Developer & UI/UX Designer, Madrid - Sid Mantri`,
        short_name: `Sid Mantri - Madrid`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `standalone`,
        icon: `src/images/favicon-32x32.png`
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/`, `/gallery`],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
