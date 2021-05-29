import * as React from "react"
import Layout from "../components/Layout"
import { ThemeProvider } from "@emotion/react"

import theme from "../styles/theme"
import { SimpleNav } from "../components/Navbar"

// markup
const IndexPage = () => (
  <ThemeProvider theme={theme.DARK}>
    <Layout>
      <SimpleNav />
      <div>Hello world</div>
    </Layout>
  </ThemeProvider>
)

export default IndexPage
