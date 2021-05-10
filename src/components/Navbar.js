import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  return (
    <Container>
      <NavContainer>
        <NavLogo to="/">dolla</NavLogo>
        <MobileIcon>
          <FaBars />
        </MobileIcon>
        <NavMenu>
          <NavItem>
            <NavLink to="about">About</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="discover">Discover</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="services">Services</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="signup">Sign Up</NavLink>
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

const Container = styled.nav`
  background-color: black;
  height: 80px;
  /* margin-top: -80px; */
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transform: 0.8s all ease;
  }
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  padding: 0 24px;
  max-width: 1100px;
  width: 100%;
`;

const NavLogo = styled(RouterLink)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
`;

const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: white;
  }
`;

const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavItem = styled.li`
  height: 80px;
`;

const NavLink = styled(ScrollLink)`
  color: white;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  border: 4px solid black;

  &:hover {
    border-bottom: 4px solid #01bf71;
    cursor: pointer;
  }
`;

const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavBtnLink = styled(RouterLink)`
  border-radius: 50px;
  background-color: #01bf71;
  white-space: nowrap;
  padding: 10px 22px;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: 0.2s all ease-in-out;
  text-decoration: none;

  &:hover {
    transition: 0.2s all ease-in-out;
    background-color: white;
    color: #01bf71;
  }
`;
