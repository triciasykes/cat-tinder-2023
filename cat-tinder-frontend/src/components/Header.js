import { NavLink } from "react-router-dom"
import { Nav, NavItem } from "reactstrap"

import catLogo from '../assets/cat-logo.png'

const Header = () => {
  return (
    <Nav className="header-nav" pills >
      <NavItem>
        <NavLink to="/">
          <img
            src={catLogo}
            alt="Cat Tinder logo with two cats hugging"
            className="cat-logo"
            />
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink to="/catIndex">Meet the Cats!</NavLink>
      </NavItem>
      <NavItem>
        <NavLink to="/catnew">
          Add a Cat
        </NavLink>
      </NavItem>
    </Nav>
  )
}

export default Header
