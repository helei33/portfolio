module.exports = {
  siteMetadata: {
    title: "Troye Guo | Portfolio",
    description: "Web Developer - React, Node, and more",
    author: "Troye Guo",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-google-fonts",
      options: {
        fonts: ["Noto Sans SC", "Noto Serif SC"],
      },
    },
    "gatsby-transformer-json",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/data`,
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Troye Guo Portfolio",
        short_name: "Troye Guo",
        start_url: "/",
        background_color: "#000000",
        theme_color: "#5216CE",
        display: "minimal-ui",
        icon: "static/favicon.png",
        cache_busting_mode: "none",
      },
    },
    {
      resolve: "gatsby-plugin-offline",
      options: {
        workboxConfig: {
          globPatterns: ["**/*"],
        },
        precachePages: [`/develop/`, `/design/`],
      },
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-149740367-2",
      },
    },
  ],
};
