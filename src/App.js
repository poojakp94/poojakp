import styled from "styled-components";
import NavBar from "./components/navbar";
import IntroCard from "./components/introSection";
import Projects from "./components/Projects/projectSection"
import Footer from "./components/footer";
import Contact from './components/contact';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import "./App.css";

const AppContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;




function App() {
 
  
  return (
    <AppContainer>
      <Router>
      <NavBar />
      <Switch>
        <Route path="/" exact component={IntroCard}/>
        <Route path="/projects" exact component={Projects}/>
      </Switch>
      <Contact />
      
      <Footer />
      </Router>
    </AppContainer>
  );
}

export default App;
