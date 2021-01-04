import styled from "styled-components";
import profileImg from "../assets/profileImg.jpg";
const Container = styled.div`
  padding: 10px;
  border-radius: 4px;
  box-shadow: 3px 4px 12px 1px #ccc;
  margin-top: 30px;
  @media (min-width: 768px) {
    display: flex;
    gap: 50px;
    justify-content: center;
  }
`;

const Img = styled.img`
  width: 100%;
  border: 1px dotted #ddd;
  border-radius: 50%;
  @media (min-width: 768px) {
    width: 40%;
  }
`;
const Text = styled.p`
  font-weight: 600;
  letter-spacing: 0.15rem;
`;

const IntroCard = () => {
  return (
    <Container>
      <Img src={profileImg} />
      <Text>Hi, I'm a Dietician || frontend developer </Text>
    </Container>
  );
};

export default IntroCard;
