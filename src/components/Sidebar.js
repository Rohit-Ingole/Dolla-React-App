import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const Sidebar = () => {
  return (
    <Container>
      <Icon>
        <CloseIcon />
      </Icon>
      <Wrapper>
        <Menu>
          <Links to="about">About</Links>
          <Links to="discover">Discover</Links>
          <Links to="services">Services</Links>
          <Links to="signup">Sign Up</Links>
        </Menu>
        <ButtonWrap>
          <SignIn to="/signin">Sign In</SignIn>
        </ButtonWrap>
      </Wrapper>
    </Container>
  );
};

export default Sidebar;

const Container = styled.aside`
  position: fixed;
  z-index: 100;
  width: 100%;
  height: 100%;
  background-color: #0d0d0d;
  display: grid;
  align-items: center;
  left: 0;
  transform: 0.3s ease-in-out;

  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

const Icon = styled.div`
  position: absolute;
  top: 0.2rem;
  right: 1.5rem;
  background: transparent;
  cursor: pointer;
  outline: none;
  font-size: 2rem;
`;

const CloseIcon = styled(FaTimes)`
  color: white;
`;

const Wrapper = styled.div`
  color: white;
`;

const Menu = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
  }
`;

const Links = styled(ScrollLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: #01bf71;
    transition: 0.2s ease-in-out;
  }
`;

const ButtonWrap = styled.div`
  display: flex;
  justify-content: center;
`;

const SignIn = styled(RouterLink)`
  border-radius: 50px;
  background: #01bf71;
  white-space: nowrap;
  padding: 16px 24px;
  color: #010606;
  font-size: 1rem;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;
