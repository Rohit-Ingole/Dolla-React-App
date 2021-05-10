import { useStateValue } from "../StateProvider";
import { actionTypes } from "../reducer";
import { animateScroll as scroll } from "react-scroll";

import {
  Container,
  MobileIcon,
  NavBtn,
  NavBtnLink,
  NavContainer,
  NavItem,
  NavLink,
  NavLogo,
  NavMenu,
} from "../styles/_Navbar";
import { FaBars } from "react-icons/fa";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [{ isOpen }, dispatch] = useStateValue();

  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleSidebar = () => {
    dispatch({
      type: actionTypes.SET_ISOPEN,
      isOpen: true,
    });
  };

  const ScrollConfig = {
    smooth: true,
    duration: 500,
    spy: true,
    exact: true,
  };

  return (
    <Container scrollNav={scrollNav}>
      <NavContainer>
        <NavLogo to="/" onClick={() => scroll.scrollToTop()}>
          dolla
        </NavLogo>
        <MobileIcon onClick={toggleSidebar}>
          <FaBars />
        </MobileIcon>
        <NavMenu>
          <NavItem>
            <NavLink to="about" {...ScrollConfig}>
              About
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="discover" {...ScrollConfig}>
              Discover
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="services" {...ScrollConfig}>
              Services
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="signup" {...ScrollConfig}>
              Sign Up
            </NavLink>
          </NavItem>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/signin">Sign In</NavBtnLink>
        </NavBtn>
      </NavContainer>
    </Container>
  );
};

export default Navbar;
