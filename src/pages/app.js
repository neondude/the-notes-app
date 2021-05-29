import React from "react"
import Layout from "../components/Layout"
import { ThemeProvider } from "@emotion/react"

import theme from "../styles/theme"
import { SimpleNav } from "../components/Navbar"
import App from "../components/App"

// markup
export default () => (
  <ThemeProvider theme={theme.LIGHT}>
    <Layout>
      <App />
    </Layout>
  </ThemeProvider>
)
