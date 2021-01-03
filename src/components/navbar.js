import styled from "styled-components";
import twitter from "../assets/twitter.png";
import github from "../assets/github.png";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 4px;
  box-shadow: 3px 4px 12px 1px #ccc;
  padding: 10px;
  /* border: 1px solid red; */
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
  border: none;
  background-color: #333;
  color: #fff;
`;
const NavBar = () => {
  return (
    <Container>
      <IconContainer>
        <a href="https://github.com/poojakp94" target="_blank">
          <Img src={github} />
        </a>
        <a href="https://twitter.com/poojakp16" target="_blank">
          <Img src={twitter} />
        </a>
      </IconContainer>
      <ToggleBtn>0</ToggleBtn>
    </Container>
  );
};

export default NavBar;
