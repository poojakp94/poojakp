import styled from "styled-components";
import github from "../../assets/github.png";

const Container = styled.div`
  border-radius: var(--card-border-radius);
  box-shadow: var(--card-box-shadow);
  padding: var(--card-padding);
  width: 400px;
  /* height: 400px; */
  display: flex;
  flex-direction: column;
  gap: 20px;
  /* justify-content: space-between; */
  background-color:#fff;
`;

const Img = styled.img`
  width: 100%;
  height: 200px;
 
`;
const DescriptionContainer = styled.div`
  border-left: 1px solid #0f171e;
  padding-left: 10px  ;
`;
const Text =styled.div`
padding: 0 8px 8px 2px;
align-self: flex-start;
`

const Project = ({img, data }) => {
  
  return (
    <Container>
      <Img src={img} alt="loading..."   />
      <DescriptionContainer>
        <Text>{data.description}</Text>
        <Text>Tech used: {data.techUsed}</Text>
        <Text>Deployed link: <a href={data.link}>{data.link}</a></Text>
        <a href={data.githubLink} target="_blank" rel="noreferrer">
          <img src={github} alt="screnshot" style={{width: "30px"}}/>
        </a>
      </DescriptionContainer>
    </Container>
  );
};

export default Project;
