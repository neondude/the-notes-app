import React from "react"
import { Router } from "@reach/router"
import { useTheme } from "@emotion/react"
import styled from "@emotion/styled"

import { SIZES } from "../styles/constants"

import Books from "../routes/Books"
import Notes from "../routes/Notes"

const RouteLayout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  margin: 0 auto;
  padding: 0 10px;
  max-width: ${SIZES.maxWidth};
  min-height: calc(100vh - 60px);
`

export default () => {
  return (
    <RouteLayout>
      <Router basepath="/app">
        <Books path="/books" />
        <Notes path="/notes" />
      </Router>
    </RouteLayout>
  )
}
