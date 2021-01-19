import styled from "styled-components";
import profileImg from "../assets/nobg.jpg";
import ProgressBar from "./progressbar";
import ffc from '../assets/ffc.png'

const Container = styled.div`
  padding: 50px;
  display: flex;
  flex-direction: column;
  gap: 80px;
  align-items:center;
  background-color: #000000;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='250' height='30' viewBox='0 0 1000 120'%3E%3Cg fill='none' stroke='%23222' stroke-width='10' %3E%3Cpath d='M-500 75c0 0 125-30 250-30S0 75 0 75s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 45c0 0 125-30 250-30S0 45 0 45s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 105c0 0 125-30 250-30S0 105 0 105s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 15c0 0 125-30 250-30S0 15 0 15s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500-15c0 0 125-30 250-30S0-15 0-15s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 135c0 0 125-30 250-30S0 135 0 135s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3C/g%3E%3C/svg%3E");
  color: #fff;
  @media (max-width: 768px){
    padding: 10px;
 }
`;

const ImgContainer = styled.div`
  text-align: center;
`
const Img = styled.img`
  width: 330px;
  height:330px;
  border-radius: 50%;
`;
const Heading= styled.h1`
  font-weight: normal;
  text-align: center;
`;
const Section= styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px){
    flex-direction:column;
    gap: 80px;
  }
`
const Wrapper = styled.section`
  display: flex;
  gap: 15px;
`
const Title = styled.div`
  writing-mode: vertical-rl;
  text-orientation: upright;
  padding: 10px;
  font-size: 1.5rem;
  border: 1px solid yellowgreen;
`
const AnchorTag = styled.a`
  text-decoration: none;
  color: #ddd;
  font-size: .8rem;
  letter-spacing: 1px;
  padding-top: 15px;
`
const ProgressContainer = styled.div`
  width: 100%;
  display:flex;
  gap: 10px;
  align-items: center;
  @media (max-width: 768px){
    flex-direction: column-reverse;
    gap: 2px;
  }
`
const CertificateTitle = styled(Title)`
  display: flex;
  align-items: center;
`
const Imgffc = styled.img`
  width: 50px;
  text-align: center;
`

const Em =styled.em`
  background: radial-gradient(
    circle farthest-corner at center center,
    #F2709C,
    #fff
  ) no-repeat;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`
const IntroCard = () => {
  return (
    <Container>
      <Heading>Hello, my name is Pooja. I am a <Em>Front End Developer</Em> living in Delhi, India. </Heading>
      <ImgContainer><Img src={profileImg} /></ImgContainer>
      <Section>
      <Wrapper>
      <CertificateTitle><Imgffc src={ffc}/>Certificate</CertificateTitle>
      <div>
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
      </div>
      </Wrapper>
      <Wrapper>
      <Title>Progress Bar</Title>
      <div>
      <ProgressContainer>
      <ProgressBar done="90"/>
      <span>HTML</span>
      </ProgressContainer>
      <ProgressContainer>
        <ProgressBar done="85"/>
        <span>CSS</span>
      </ProgressContainer>
      <ProgressContainer>
        <ProgressBar done="75"/>
        <span>JavaScript</span>
      </ProgressContainer>
      <ProgressContainer>
        <ProgressBar done="70" />
          <span>React</span>
      </ProgressContainer>
      <ProgressContainer>
        <ProgressBar done="20" />
          <span>Vue</span>
      </ProgressContainer>
      </div>
      </Wrapper>
      </Section>
    </Container>
  );
};

export default IntroCard;
