import styled from "styled-components";
import NavBar from "./components/navbar";
import IntroCard from "./components/introSection";
import Project from "./components/project";
import Footer from "./components/footer";
import deepdive from "./assets/deepdive.jpg";
import dashboard from "./assets/dashboard.png";
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

const Title = styled.p`
  letter-spacing: 0.1rem;
  font-weight: 600;
  font-size: 20px;
  text-align: center;
  border-radius: var(--card-border-radius);
  box-shadow: var(--card-box-shadow);
  padding: var(--card-padding);
`;
function App() {
  const data = {
    Project1: {
      description: "Get your dose of entertainment",
      techUsed: "React, Styled-components",
      link: "https://deepdiveanime.com",
      githubLink: "https://github.com/poojakp94/ani",
    },
    Project2: {
      description: "Random quote generator",
      techUsed: "React",
      githubLink: "https://github.com/poojakp94/quotes",
      link: "https://poojakp94.github.io/quotes/",
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
      description: "It replaces browser's new tab page with the personal dashboard.",
      techUsed: "React",
      githubLink: "https://github.com/poojakp94/user-dashboard-extension",
    },
  };
  return (
    <AppContainer>
      <NavBar />
      <IntroCard />
      <Title>Projects</Title>
      <Project
        img={deepdive}
        data={data.Project1}
      />
      <Project
        img={quote}
        data={data.Project2}
      />
      <Project
        img={clock}
        data={data.Project3}
      />
      <Project
        img={drum}
        data={data.Project4}
      />
      <Project
        img={markdown}
        data={data.Project5}
      />
      <Project
        img={dashboard}
        data={data.Project6}
      />
      <Footer />
    </AppContainer>
  );
}

export default App;
