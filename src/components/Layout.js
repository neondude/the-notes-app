import React from "react"
import { Global, css, useTheme } from "@emotion/react"

const Layout = ({ children }) => {
  const theme = useTheme()
  return (
    <>
      <Global
        styles={css`
          * {
            transition: 0.2s border-color ease-in-out, 0.2s fill ease-in-out,
              0.2s box-shadow ease-in-out, 0.2s background-color ease-in-out,
              0.2s color ease-in-out;
            overflow: -moz-scrollbars-none;
          }
          *::-webkit-scrollbar {
            width: 0 !important;
          }
          html {
            background-color: ${theme.colors.bodyBackground};
          }
          h1 {
            font-family: "Montserrat", -apple-system, BlinkMacSystemFont,
              "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans",
              "Droid Sans", "Helvetica Neue", sans-serif;
          }
          body {
            margin: 0;
            padding: 0;
            min-height: 100vh;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
              "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
              "Helvetica Neue", sans-serif;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }
        `}
      />
      {children}
    </>
  )
}

export default Layout
