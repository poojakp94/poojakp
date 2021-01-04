import styled from "styled-components";
import twitter from "../assets/twitter.png";
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";
import sun from "../assets/sun.png";
import moon from "../assets/moon.png";
import { useState } from "react";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: var(--card-border-radius);
  box-shadow: var(--card-box-shadow);
  padding: var(--card-padding);
`;

const IconContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const Img = styled.img`
  width: 30px;
`;

const ToggleBtn = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 1px solid #ddd;
  background-color: transparent;
  color: #fff;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const NavBar = () => {
  const [theme, toggleTheme] = useState(true);
  return (
    <Container>
      <IconContainer>
        <a href="https://github.com/poojakp94" target="_blank">
          <Img src={github} />
        </a>
        <a href="https://twitter.com/poojakp16" target="_blank">
          <Img src={twitter} />
        </a>
        <a
          href="https://www.linkedin.com/in/pooja-prasad-ba1323129/"
          target="_blank"
        >
          <Img src={linkedin} />
        </a>
      </IconContainer>
      <ToggleBtn onClick={()  => toggleTheme(!theme)}>
        
        <img src={theme ? moon : sun}  style={{width: "20px"}}/>
      
      </ToggleBtn>
    </Container>
  );
};

export default NavBar;
