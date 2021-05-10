import svg1 from "../images/svg-1.svg";
import svg2 from "../images/svg-2.svg";
import svg3 from "../images/svg-3.svg";

const data = [
  {
    id: "about",
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: "Premium Bank",
    headline: "Unlimited Transactions with zero fees",
    description:
      "Get access to our exclusive app that allows you ot send unlimited transactions without getting charged any fee.",
    buttonLabel: "Get Started",
    imgStart: false,
    img: svg1,
    alt: "Car",
    dark: true,
    primary: true,
    darkText: false,
  },
  {
    id: "discover",
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: "Unlimited Access",
    headline: "Login to your account at any time",
    description:
      "We have you covered no matter where you are located. All you need is an internet connection and a phone or computer.",
    buttonLabel: "Learn More",
    imgStart: true,
    img: svg2,
    alt: "piggy",
    dark: false,
    primary: false,
    darkText: true,
  },
  {
    id: "signup",
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: "Join our Team",
    headline: "Creating an accout is extremely easy",
    description:
      "Get everything set up and ready in under 10 minutes. All you need to do is add your information and you're ready to go.",
    buttonLabel: "Start Now",
    imgStart: false,
    img: svg3,
    alt: "papers",
    dark: false,
    primary: false,
    darkText: true,
  },
];

export default data;
