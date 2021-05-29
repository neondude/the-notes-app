module.exports = {
  siteMetadata: {
    title: "notes-app",
  },
  plugins: [
    "gatsby-plugin-emotion",
    {
      resolve: `gatsby-plugin-create-client-paths`,
      options: { prefixes: [`/app/*`] },
    },
  ],
}
