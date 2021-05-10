import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitch,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import {
  Container,
  Wrap,
  LinksContainer,
  LinksWrapper,
  LinkItems,
  LinkTitle,
  FooterLink,
  SocialMedia,
  SociaMediaWrap,
  SocialLogo,
  WebsiteRight,
  SocialIcons,
  IconLink,
} from "../styles/_Footer";

const Footer = () => {
  return (
    <Container>
      <Wrap>
        <LinksContainer>
          <LinksWrapper>
            <LinkItems>
              <LinkTitle>About us</LinkTitle>
              <FooterLink to="/">How it works</FooterLink>
              <FooterLink to="/">Testimonials</FooterLink>
              <FooterLink to="/">Careers</FooterLink>
              <FooterLink to="/">Investors</FooterLink>
              <FooterLink to="/">Terms of Service</FooterLink>
            </LinkItems>
            <LinkItems>
              <LinkTitle>Videos</LinkTitle>
              <FooterLink to="/">Submit Video</FooterLink>
              <FooterLink to="/">Ambassadors</FooterLink>
              <FooterLink to="/">Agency</FooterLink>
              <FooterLink to="/">Influencer</FooterLink>
            </LinkItems>
          </LinksWrapper>
          <LinksWrapper>
            <LinkItems>
              <LinkTitle>Contact us</LinkTitle>
              <FooterLink to="/">Contact</FooterLink>
              <FooterLink to="/">Support</FooterLink>
              <FooterLink to="/">Destinations</FooterLink>
              <FooterLink to="/">Sponsorships</FooterLink>
            </LinkItems>
            <LinkItems>
              <LinkTitle>Social Media</LinkTitle>
              <FooterLink to="/">Instagram</FooterLink>
              <FooterLink to="/">Facebook</FooterLink>
              <FooterLink to="/">Youtube</FooterLink>
              <FooterLink to="/">Twitter</FooterLink>
            </LinkItems>
          </LinksWrapper>
        </LinksContainer>
        <SocialMedia>
          <SociaMediaWrap>
            <SocialLogo to="/">dolla</SocialLogo>
            <WebsiteRight>
              dolla © {new Date().getFullYear()} All rights reserved.
            </WebsiteRight>
            <SocialIcons>
              <IconLink
                href="https://www.facebook.com/rohit.ingole.9083/"
                target="_blank"
                aria-label="Facebook"
              >
                <FaFacebook />
              </IconLink>
              <IconLink
                href="https://www.instagram.com/rohitingole574/"
                target="_blank"
                aria-label="Instagram"
              >
                <FaInstagram />
              </IconLink>
              <IconLink
                href="https://www.linkedin.com/in/rohit-ingole-a14391208/"
                target="_blank"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </IconLink>
              <IconLink
                href="https://twitter.com/RohitIn71454797"
                target="_blank"
                aria-label="Twitter"
              >
                <FaTwitter />
              </IconLink>
            </SocialIcons>
          </SociaMediaWrap>
        </SocialMedia>
      </Wrap>
    </Container>
  );
};

export default Footer;
