import styled from "styled-components";
import NavBar from "./components/navbar";
import IntroCard from "./components/introSection";
import Project from "./components/project";
import Footer from "./components/footer";
import { useState } from "react";
import deepdive from "./assets/deepdive.jpg";
// import captured from "./assets/captured.gif";
import dash from "./assets/dash.gif";
import clock from "./assets/clock.jpg";
import drum from "./assets/drum.jpg";
import markdown from "./assets/markdown.jpg";
import quote from "./assets/quote.jpg";

import "./App.css";

const AppContainer = styled.div`
  padding: 20px;
  @media (min-width: 768px) {
    width: 70%;
    margin: 0 auto;
  }
`;
const ToggleBtn = styled.button`
  width: 50px;
  height: 30px;
  background-color: transparent;
  border: 1px dotted #ccc;
  border-radius: 15px;
  outline: none;
`;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: var(--card-border-radius);
  box-shadow: var(--card-box-shadow);
  padding: var(--card-padding);
  margin-top: 20px;
`;
const Title = styled.p`
  letter-spacing: 0.1rem;
  font-weight: 600;
  font-size: 20px;
`;
function App() {
  const [toggleImg, setToggleImg] = useState(true);
  const data = {
    Project1: {
      description: "Get your dose of entertainment",
      techUsed: "React, Styled-components",
      link: "https://deepdiveanime.com",
      githubLink: "https://github.com/poojakp94/ani",
    },
    Project2: {
      description:
        "It replaces browser's new tab page with the personal dashboard.",
      techUsed: "React",
      githubLink: "https://github.com/poojakp94/user-dashboard-extension",
    },
    Project3: {
      description: "Sets reminder ⏰ to take break between long work sessions.",
      techUsed: "React",
      githubLink: "https://github.com/poojakp94/pomodoroclock",
      link: "http://poojakp94.github.io/pomodoroclock",
    },
    Project4: {
      description:
        "Drum pads just for playing purpose not for producing songs 🎵",
      techUsed: "React",
      githubLink: "https://github.com/poojakp94/drum-machine",
      link: "https://poojakp94.github.io/drum-machine/",
    },
    Project5: {
      description: "Markdown Previewer",
      techUsed: "React",
      githubLink: "https://github.com/poojakp94/markdown",
      link: "https://poojakp94.github.io/markdown/",
    },
    Project6: {
      description: "Random quote generator",
      techUsed: "React",
      githubLink: "https://github.com/poojakp94/quotes",
      link: "https://poojakp94.github.io/quotes/",
    },
  };
  return (
    <AppContainer>
      <NavBar />
      <IntroCard />
      <Header>
        <Title>Projects</Title>
        <ToggleBtn onClick={() => setToggleImg(!toggleImg)}>
          {toggleImg ? "img" : "gif"}
        </ToggleBtn>
      </Header>
      <Project
        toggleImg={toggleImg}
        gif={deepdive}
        img={deepdive}
        data={data.Project1}
      />
      <Project
        toggleImg={toggleImg}
        gif={dash}
        img={deepdive}
        data={data.Project2}
      />
      <Project
        toggleImg={toggleImg}
        gif={dash}
        img={clock}
        data={data.Project3}
      />
      <Project
        toggleImg={toggleImg}
        gif={dash}
        img={drum}
        data={data.Project4}
      />
      <Project
        toggleImg={toggleImg}
        gif={dash}
        img={markdown}
        data={data.Project5}
      />
      <Project
        toggleImg={toggleImg}
        gif={dash}
        img={quote}
        data={data.Project6}
      />
      <Footer />
    </AppContainer>
  );
}

export default App;
