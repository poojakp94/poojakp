import styled from "styled-components";

const Container = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  border-radius: var(--card-border-radius);
  box-shadow: var(--card-box-shadow);
  padding: var(--card-padding);
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
