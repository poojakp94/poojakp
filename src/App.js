import styled from "styled-components";
// import NavBar from "./components/navbar";
import Home from "./pages/home";
import ProjectsPage from "./pages/projectsPage"
import PageNotFound from "./pages/pageNotFound";
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
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/projects" exact component={ProjectsPage}/>
        <Route exact component={PageNotFound} />
      </Switch>
      </Router>
    </AppContainer>
  );
}

export default App;
