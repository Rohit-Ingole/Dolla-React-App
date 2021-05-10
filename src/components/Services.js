import {
  Container,
  H1,
  Wrapper,
  ServicesCard,
  ServicesIcon,
  H2,
  P,
} from "../styles/_Services";

import Icon1 from "../images/svg-1.svg";
import Icon2 from "../images/svg-2.svg";
import Icon3 from "../images/svg-4.svg";

const Services = () => {
  return (
    <Container id="services">
      <H1>Our Services</H1>
      <Wrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} alt="" />
          <H2>Reduce expences</H2>
          <P>We help reduce your fees and increase your oveall revenue.</P>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} alt="" />
          <H2>Virtual Offices</H2>
          <P>You can access our platform online anywhere in the world.</P>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} alt="" />
          <H2>Premium Benefits</H2>
          <P>Unlock our special membership card that return 5% cashback.</P>
        </ServicesCard>
      </Wrapper>
    </Container>
  );
};

export default Services;
