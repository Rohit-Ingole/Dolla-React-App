import styled from "styled-components";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Home = () => {
  return (
    <Container>
      <Sidebar />
      <Navbar />
    </Container>
  );
};

export default Home;

const Container = styled.div``;
