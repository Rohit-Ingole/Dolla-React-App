import { useStateValue } from "../StateProvider";
import { actionTypes } from "../reducer";

import {
  ButtonWrap,
  CloseIcon,
  Container,
  Icon,
  Links,
  Menu,
  SignIn,
  Wrapper,
} from "../styles/_Sidebar";

const Sidebar = () => {
  const [{ isOpen }, dispatch] = useStateValue();

  const closeSidebar = () => {
    dispatch({
      type: actionTypes.SET_ISOPEN,
      isOpen: false,
    });
  };

  const ScrollConfig = {
    smooth: true,
    duration: 500,
    spy: true,
    exact: true,
  };

  return (
    <Container isOpen={isOpen}>
      <Icon>
        <CloseIcon onClick={closeSidebar} />
      </Icon>
      <Wrapper>
        <Menu>
          <Links to="about" onClick={closeSidebar} {...ScrollConfig}>
            About
          </Links>
          <Links to="discover" onClick={closeSidebar} {...ScrollConfig}>
            Discover
          </Links>
          <Links to="services" onClick={closeSidebar} {...ScrollConfig}>
            Services
          </Links>
          <Links to="signup" onClick={closeSidebar} {...ScrollConfig}>
            Sign Up
          </Links>
        </Menu>
        <ButtonWrap>
          <SignIn to="/signin">Sign In</SignIn>
        </ButtonWrap>
      </Wrapper>
    </Container>
  );
};

export default Sidebar;
