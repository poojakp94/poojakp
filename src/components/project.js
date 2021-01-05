import styled from "styled-components";
import github from "../assets/github.png";

const Container = styled.div`
  border-radius: var(--card-border-radius);
  box-shadow: var(--card-box-shadow);
  padding: var(--card-padding);
  margin-top: 20px;
`;

const Img = styled.img`
  width: 100%;
`;
const DescriptionContainer = styled.div`
  border: 1px dashed #0f171e;
  padding: 10px;
`;

const Project = ({img, data }) => {
  return (
    <Container>
      <Img src={img} alt="loading..."   />
      <DescriptionContainer>
        <p>{data.description}</p>
        <p>Tech used: {data.techUsed}</p>
        <p>Deployed link: <a href={data.link}>{data.link}</a></p>
        <a href={data.githubLink} target="_blank">
          <img src={github} style={{width: "30px"}}/>
        </a>
      </DescriptionContainer>
    </Container>
  );
};

export default Project;
