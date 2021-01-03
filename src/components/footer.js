import styled from "styled-components";

const Container = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  box-shadow: 3px 4px 12px 1px #ccc;
  border-radius: 4px;
  margin-top: 20px;
`;

const Text = styled.p`
  font-size: 12px;
`;
const Footer = () => {
  return (
    <Container>
      <Text>All rights are reserved </Text>
      <Text>Portfolio in progress</Text>
    </Container>
  );
};

export default Footer;
