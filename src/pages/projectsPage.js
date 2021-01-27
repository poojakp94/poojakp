import styled from 'styled-components';
import Projects from "../components/Projects/projectSection";
import NavBar from '../components/navbar';
import Contact from '../components/contact/contact';
import Footer from '../components/footer';

const Title = styled.div`
  letter-spacing: 0.1rem;
  font-weight: 600;
  font-size: 2rem;
  text-align: center;
  padding: 10px 0;
`;

const ProjectsPage = ()=> {
    return (
        <>
            <NavBar />
            <Title>Projects</Title>
            <Projects />
            <Contact />
            <Footer />
        </>
    )
}

export default ProjectsPage;