import styled from "styled-components";
import twitter from "../assets/twitter.png";
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";
import {NavLink} from 'react-router-dom';

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-radius: var(--card-border-radius);
  box-shadow: var(--card-box-shadow);
  padding: var(--card-padding);
  background-color:#fff;
`;

const IconContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const Img = styled.img`
  width: 30px;
`;

const TabContainer = styled.div`
height: 20px;
display: flex;
gap: 25px;
padding: 20px;
`
const Tab = styled(NavLink)`
text-decoration: none;
color: black;
&:hover {
  color: red;
  border-bottom: 1px solid coral;
}
`
const NavBar = () => {
  return (
    <Container>
      <IconContainer>
        <a href="https://github.com/poojakp94" target="_blank" rel="noreferrer">
          <Img src={github} />
        </a>
        <a href="https://twitter.com/poojakp16" target="_blank" rel="noreferrer">
          <Img src={twitter} />
        </a>
        <a
          href="https://www.linkedin.com/in/pooja-prasad-ba1323129/"
          target="_blank" rel="noreferrer"
        >
          <Img src={linkedin} />
        </a>
      </IconContainer>
      <TabContainer>
        <Tab to="/"  
        activeStyle={{
          fontWeight: "bold",
          color: "red"}}
        exact={true}>About
        </Tab>
        <Tab to="/projects" 
        exact={true}
        activeStyle={{
          fontWeight: "bold",
          color: "red"
        }}>Projects</Tab>
      </TabContainer>
    </Container>
  );
};

export default NavBar;
