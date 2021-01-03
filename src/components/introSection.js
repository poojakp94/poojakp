import styled from "styled-components";
import img1 from "../assets/img1.jpg";
const Container = styled.div`
  padding: 10px;
  border-radius: 4px;
  box-shadow: 3px 4px 12px 1px #ccc;
  margin-top: 30px;
`;

const Img = styled.img`
  width: 100%;
  border: 1px dotted #ddd;
  border-radius: 50%;
`;

const IntroCard = () => {
  return (
    <Container>
      <Img src={img1} />
      <p>Hi, I'm a Dietician || frontend developer </p>
    </Container>
  );
};

export default IntroCard;
