import { useState } from "react";
import {
  ArrowForward,
  ArrowRight,
  BtnWrapper,
  Container,
  HeroBg,
  HeroContent,
  HeroH1,
  HeroP,
  VideoBg,
} from "../styles/_Hero";
import { Button } from "../styles/_Button";
import Video from "../videos/video.mp4";

const Hero = () => {
  const [hover, setHover] = useState(false);

  return (
    <Container id="home">
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4"></VideoBg>
      </HeroBg>
      <HeroContent>
        <HeroH1>Virtual Banking Made Easy</HeroH1>
        <HeroP>
          Sign up for new account today and recive $250 in credit towards your
          next payment.
        </HeroP>

        <BtnWrapper>
          <Button
            to="/signup"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            primary="true"
            dark="true"
          >
            Get started {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </BtnWrapper>
      </HeroContent>
    </Container>
  );
};

export default Hero;
