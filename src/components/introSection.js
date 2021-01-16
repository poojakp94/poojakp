import styled from "styled-components";
import profileImg from "../assets/profileImg.jpg";

const Container = styled.div`
  /* width: 100%; */
  height: 800px;
  padding: 50px;
  display: flex;
  flex-direction: column;
 /* justify-content: space-around; */
 gap: 50px;
 align-items:center;
 background-color: #ff9d00;
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg stroke='%23000' stroke-width='66.7' stroke-opacity='0.05' %3E%3Ccircle fill='%23ff9d00' cx='0' cy='0' r='1800'/%3E%3Ccircle fill='%23fb8d17' cx='0' cy='0' r='1700'/%3E%3Ccircle fill='%23f47d24' cx='0' cy='0' r='1600'/%3E%3Ccircle fill='%23ed6e2d' cx='0' cy='0' r='1500'/%3E%3Ccircle fill='%23e35f34' cx='0' cy='0' r='1400'/%3E%3Ccircle fill='%23d85239' cx='0' cy='0' r='1300'/%3E%3Ccircle fill='%23cc453e' cx='0' cy='0' r='1200'/%3E%3Ccircle fill='%23be3941' cx='0' cy='0' r='1100'/%3E%3Ccircle fill='%23b02f43' cx='0' cy='0' r='1000'/%3E%3Ccircle fill='%23a02644' cx='0' cy='0' r='900'/%3E%3Ccircle fill='%23901e44' cx='0' cy='0' r='800'/%3E%3Ccircle fill='%23801843' cx='0' cy='0' r='700'/%3E%3Ccircle fill='%236f1341' cx='0' cy='0' r='600'/%3E%3Ccircle fill='%235e0f3d' cx='0' cy='0' r='500'/%3E%3Ccircle fill='%234e0c38' cx='0' cy='0' r='400'/%3E%3Ccircle fill='%233e0933' cx='0' cy='0' r='300'/%3E%3Ccircle fill='%232e062c' cx='0' cy='0' r='200'/%3E%3Ccircle fill='%23210024' cx='0' cy='0' r='100'/%3E%3C/g%3E%3C/svg%3E");
background-size: cover;
 color: #fff;
 @media (max-width: 768px){
   flex-direction: column;
   padding: 10px;
   height:800px;
 }
`;

const Intro = styled.div`
/* border: 1px solid yellowgreen; */
display: flex;
align-items: center;
/* border-right: 1px solid palegreen; */
@media (max-width: 768px){
  flex-direction: column;
  /* border-bottom: 1px solid palegreen; */
  /* border-right: none; */
}
`
const ImgContainer = styled.div`
width: 50%;
text-align: center;
/* border: 1px solid red; */
`
const Img = styled.img`
  width: 100%;
  @media (min-width: 768px) {
    width: 40%;
  }
`;
const Text = styled.h1`
  font-weight: normal;
  /* letter-spacing: 0.1rem; */
  text-align: center;
  /* border: 1px dashed pink; */
`;

const CertificateContainer = styled.section`
  border: 1px dashed red;
  display: flex;
  align-items:center;
  width: 100%;
  height: 300px;
  /* float: right; */
  /* align-self: flex-start; */
  
  @media (max-width: 768px){
    flex-direction:column;
  }
`
const Title = styled.h3`
  transform: rotate(-90deg);
  border: 1px solid #fff;
  padding: 10px;
  @media (max-width: 768px){
    transform: none;
  }
`
const Content = styled.div`
  /* border: 1px solid paleturquoise; */
  margin-left: -100px;
  align-self: flex-start;
  @media (max-width: 768px){
    margin-left: 0px;
  }
`
const AnchorTag = styled.a`
text-decoration: none;
color: #ddd;
font-size: .8rem;
letter-spacing: 1px;
padding-top: 15px;
`


const IntroCard = () => {
  return (
    <Container>
      <Intro>
      <ImgContainer><Img src={profileImg} /></ImgContainer>
      <Text>Hello, my name is Pooja. I am a Front End Developer living in Delhi, India. </Text>
      </Intro>
      <CertificateContainer>
      <Title>FreeCodeCamp Certifications</Title>
      <Content>
      <div>
        <p>Front End Libraries Certificate</p>
        <AnchorTag href="http://www.freecodecamp.org/certification/poojakp/front-end-libraries" target="_blank" rel="noreferrer" title="http://www.freecodecamp.org/certification/poojakp/front-end-libraries">Check here 👈</AnchorTag>
      </div>
      <br/>
      <div>
        <p>JavaScript Algorithms and Data Structures Certificate</p>
        <AnchorTag href="https://www.freecodecamp.org/certification/poojakp/javascript-algorithms-and-data-structures" target="_blank" rel="noreferrer" title="https://www.freecodecamp.org/certification/poojakp/javascript-algorithms-and-data-structures">Check here 👈</AnchorTag>
      </div>
      <br/>
      <div>
        <p>Responsive Web Design Certificate</p>
        <AnchorTag href="https://www.freecodecamp.org/certification/poojakp/responsive-web-design" target="_blank" rel="noreferrer" title="https://www.freecodecamp.org/certification/poojakp/responsive-web-design">Check here 👈</AnchorTag>
      </div>
      </Content>
      </CertificateContainer>
    </Container>
  );
};

export default IntroCard;
