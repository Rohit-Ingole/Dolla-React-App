import styled from "styled-components";
import data from "../components/Data";
import Hero from "../components/Hero";
import InfoSection from "../components/InfoSection";
import Services from "../components/Services";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <Container>
      <Navbar />
      <Sidebar />
      <Hero />
      {data.map((dataObject, index) => {
        if (index === 2) {
          return (
            <>
              <Services />
              <InfoSection {...dataObject} />
            </>
          );
        } else {
          return <InfoSection {...dataObject} />;
        }
      })}
      <Footer />
    </Container>
  );
};

export default Home;

const Container = styled.div``;
