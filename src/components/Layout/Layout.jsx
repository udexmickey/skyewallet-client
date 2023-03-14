import React from 'react'
import { Nav, NavItem } from 'react-bootstrap'

const Layout = (props) => {
  return (
    <>
    <Nav>
        mama
        <NavItem>One</NavItem>
    </Nav>
      {props.children}
    </>
  )
}

export default Layout
