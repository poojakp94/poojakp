import styled from "styled-components";
import twitter from "../assets/twitter.png";
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-top: 1px dashed #444;
  padding-top: 20px; 
  background-color:#fff; 
`;

const Text = styled.p`
  font-size: 12px;
`;
const IconContainer = styled.div`
  display: flex;
  gap: 10px;
`;
const Img = styled.img`
  width: 30px;
`;
const Footer = () => {
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
      <Text>&copy; 2021, poojakp </Text>
    </Container>
  );
};

export default Footer;
