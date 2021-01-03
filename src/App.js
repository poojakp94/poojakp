import styled from "styled-components";
import NavBar from "./components/navbar";
import IntroCard from "./components/introSection";
import Project from "./components/project";
import Footer from "./components/footer";

const AppContainer = styled.div`
  padding: 20px;
`;

function App() {
  return (
    <AppContainer>
      <NavBar />
      <IntroCard />
      <Project />
      <Footer />
    </AppContainer>
  );
}

export default App;
