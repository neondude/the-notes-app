import React from "react"
import { navigate, Link } from "gatsby"
import { useTheme } from "@emotion/react"
import styled from "@emotion/styled"

import Icon from "./Icon"
import { SIZES } from "../styles/constants"

const Header = styled.div`
  background-color: ${(props) => props.theme.colors.headerBackground};
  height: 60px;
  display: grid;
  grid-template-areas: "... nav ...";
  grid-template-columns: 1fr minmax(240px, ${SIZES.maxWidth}) 1fr;
  grid-gap: 10px;
  align-items: center;
  border-width: 1px;
  border-color: ${(props) => props.theme.colors.quarternary};
  border-style: solid;
`

const Nav = styled.div`
  grid-area: nav;
  max-width: ${SIZES.maxWidth};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
`
const LogoSection = styled.div`
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 18px;
  &:hover {
    cursor: pointer;
  }
`
const LogoText = styled.span`
  color: ${(props) => props.color};
  margin-left: 5px;
  @media (max-width: 400px) {
    display: none;
  }
`

const NavIcons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  * + * {
    margin-left: 10px;
  }
`
const SimpleNav = () => {
  const theme = useTheme()
  return (
    <Header>
      <Nav>
        <LogoSection>
          <LogoText color={theme.colors.primary}>NOTES</LogoText>
        </LogoSection>
        <NavIcons>
          <>
            <Icon name="ArrowRight" label="Login" size={20} />
          </>
        </NavIcons>
      </Nav>
    </Header>
  )
}

export { SimpleNav }
