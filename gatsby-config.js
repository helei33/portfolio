module.exports = {
  siteMetadata: {
    title: "Troye Guo | Portfolio",
    description: "Web Developer - React, Node, and more",
    author: "Troye Guo",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-intl`,
      options: {
        // language JSON resource path
        path: `${__dirname}/src/intl`,
        // supported language
        languages: [`en`, `cn`],
        // language file path
        defaultLanguage: `cn`,
        // option to redirect to `/ko` when connecting `/`
        redirect: false,
      },
    },
    "gatsby-plugin-react-helmet",
    `gatsby-plugin-sass`,
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
