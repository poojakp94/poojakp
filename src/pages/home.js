import styled from "styled-components";
import ffc from "../assets/ffc.png";
import Projects from "../components/Projects/projectSection";
import Typewriter from "typewriter-effect";
import NavBar from "../components/navbar";
import Contact from "../components/contact/contact";
import Footer from "../components/footer";

const Container = styled.div`
  border-radius: var(--card-border-radius);
  box-shadow: var(--card-box-shadow);
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 80px;
  align-items: center;
  background-color: #000000;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='250' height='30' viewBox='0 0 1000 120'%3E%3Cg fill='none' stroke='%23222' stroke-width='10' %3E%3Cpath d='M-500 75c0 0 125-30 250-30S0 75 0 75s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 45c0 0 125-30 250-30S0 45 0 45s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 105c0 0 125-30 250-30S0 105 0 105s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 15c0 0 125-30 250-30S0 15 0 15s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500-15c0 0 125-30 250-30S0-15 0-15s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 135c0 0 125-30 250-30S0 135 0 135s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3C/g%3E%3C/svg%3E");
  color: #fff;
  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const ImgContainer = styled.div`
  text-align: center;
  border: 2px double white;
  transform: rotate(45deg);
`;
const Img = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  transform: rotate(-45deg);
`;

const Heading = styled.h1`
  height: 90px;
  font-weight: normal;
  text-align: center;
  background: radial-gradient(
      circle farthest-corner at center center,
      #f2709c,
      #fff
    )
    no-repeat;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
const Section = styled.section`
  display: flex;
  gap: 80px;
  flex-direction: column-reverse;
`;
const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
// const ResumeBox = styled.div`
//   padding: 10px;
//   border: 1px solid white;
//   align-self: center;
//   &:hover {
//     border: 1px dashed yellowgreen;
//   }
// `
const AnchorTag = styled.a`
  text-decoration: none;
  color: #ddd;
  font-size: 0.8rem;
  letter-spacing: 1px;
  &:hover {
    color: yellowgreen;
  }
`;
// const Resume = styled(AnchorTag)`
//   color: #fff;
//   font-size: 1.2rem;
//   padding-top: 0;
// `

const CertificateTitle = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  letter-spacing: 0.2em;
  padding: 10px;
  font-size: 1.5rem;
  border: 1px solid white;
`;
const Imgffc = styled.img`
  width: 50px;
  text-align: center;
`;
const Title = styled.div`
  letter-spacing: 0.1rem;
  font-weight: 600;
  font-size: 2rem;
  text-align: center;
  padding: 10px 0;
`;

const Home = () => {
  return (
    <>
      <NavBar />
      <Container>
        <Heading>
          <Typewriter
            options={{
              strings: [
                "Hello, my name is Pooja.",
                "I am a Front End Developer.",
                "I am living in Delhi, India.",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </Heading>
        <ImgContainer>
          <Img src="https://firebasestorage.googleapis.com/v0/b/imgs-94bc4.appspot.com/o/profile.jpg?alt=media&token=b078b4f8-2a56-4adc-8ba4-0a06588ec13e" />
        </ImgContainer>
        <Section>
          <Wrapper>
            <CertificateTitle>
              <Imgffc src={ffc} />
              Certificates
            </CertificateTitle>
            <ul>
              <li>
                <p>Front End Libraries Certificate</p>
                <AnchorTag
                  href="http://www.freecodecamp.org/certification/poojakp/front-end-libraries"
                  target="_blank"
                  rel="noreferrer"
                  title="http://www.freecodecamp.org/certification/poojakp/front-end-libraries"
                >
                  Check here 👈
                </AnchorTag>
              </li>
              <br />
              <li>
                <p>JavaScript Algorithms and Data Structures Certificate</p>
                <AnchorTag
                  href="https://www.freecodecamp.org/certification/poojakp/javascript-algorithms-and-data-structures"
                  target="_blank"
                  rel="noreferrer"
                  title="https://www.freecodecamp.org/certification/poojakp/javascript-algorithms-and-data-structures"
                >
                  Check here 👈
                </AnchorTag>
              </li>
              <br />
              <li>
                <p>Responsive Web Design Certificate</p>
                <AnchorTag
                  href="https://www.freecodecamp.org/certification/poojakp/responsive-web-design"
                  target="_blank"
                  rel="noreferrer"
                  title="https://www.freecodecamp.org/certification/poojakp/responsive-web-design"
                >
                  Check here 👈
                </AnchorTag>
              </li>
            </ul>
          </Wrapper>
          {/* <ResumeBox>
        <Resume href="https://firebasestorage.googleapis.com/v0/b/imgs-94bc4.appspot.com/o/Resume-Pooja.pdf?alt=media&token=1791175a-98d5-42ec-be61-af8da6c2d089" download target="_blank" >
          Download Resume
        </Resume>
      </ResumeBox> */}
        </Section>
      </Container>
      <Title>Projects</Title>
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
