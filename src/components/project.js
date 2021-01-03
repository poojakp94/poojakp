import styled from "styled-components";
import deepdive from "../assets/deepdive.png";
const Container = styled.div`
  padding: 10px;
  box-shadow: 3px 4px 12px 1px #ccc;
  border-radius: 4px;
  margin-top: 20px;
`;
const Img = styled.img`
  width: 100%;
`;
const Project = () => {
  return (
    <Container>
      <h3>Projects</h3>
      <Img src={deepdive} />
      <a href="https://deepdiveanime.com" target="_blank">
        deepdiveanime
      </a>
    </Container>
  );
};

export default Project;
