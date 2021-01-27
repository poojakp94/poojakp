import styled from 'styled-components';
import Project from "./projectCard";

const ProjectContainer = styled.div`
  padding: 10px;
  display: flex;
  gap: 30px;
  flex-flow: wrap;
  justify-content:center;
`

function Projects (){
    const data = {
        Project1: {
          description: "Website showcasing anime movies and tvShows 🈚",
          techUsed: "React, Styled-components",
          link: "https://deepdiveanime.com",
          githubLink: "https://github.com/poojakp94/ani",
          imgUrl: "https://firebasestorage.googleapis.com/v0/b/imgs-94bc4.appspot.com/o/deepDiveS.jpg?alt=media&token=0c705fe8-9483-408d-996c-5f7ce746dcb1"
        },
        Project2: {
          description: "Sets reminder ⏰ to take break between long work sessions.",
          techUsed: "React",
          githubLink: "https://github.com/poojakp94/pomodoroclock",
          link: "http://poojakp94.github.io/pomodoroclock",
          imgUrl: "https://firebasestorage.googleapis.com/v0/b/imgs-94bc4.appspot.com/o/pomodoroclock.jpg?alt=media&token=0692cfad-5ec7-45f6-80eb-e67364e4a7eb"
        },
        Project3: {
          description: "Drum pads just for playing purpose not for producing songs 🎵",
          techUsed: "React",
          githubLink: "https://github.com/poojakp94/drum-machine",
          link: "https://poojakp94.github.io/drum-machine/",
          imgUrl: "https://firebasestorage.googleapis.com/v0/b/imgs-94bc4.appspot.com/o/drum%20(1).jpg?alt=media&token=b0ed3a87-f03b-43b7-80f1-9b2ec04d37c9"
        },
        Project4: {
          description: "Markdown Previewer",
          techUsed: "React",
          githubLink: "https://github.com/poojakp94/markdown",
          link: "https://poojakp94.github.io/markdown/",
          imgUrl: "https://firebasestorage.googleapis.com/v0/b/imgs-94bc4.appspot.com/o/markdown.png?alt=media&token=697b23ad-cdab-4c1f-96b2-4018ed6f30bc"
        },
        Project5: {
          description: "Random quote generator",
          techUsed: "React",
          githubLink: "https://github.com/poojakp94/quotes",
          // link: "https://poojakp94.github.io/quotes/",
          imgUrl: "https://firebasestorage.googleapis.com/v0/b/imgs-94bc4.appspot.com/o/quote%20(1).jpg?alt=media&token=d134cc94-acac-4fe5-85d2-e44f5895bb9f" 
        },
        Project6: {
          description: "It replaces browser's new tab page with the personal dashboard.",
          techUsed: "React, Unsplash API",
          githubLink: "https://github.com/poojakp94/user-dashboard-extension",
          imgUrl: "https://firebasestorage.googleapis.com/v0/b/imgs-94bc4.appspot.com/o/newTab.jpg?alt=media&token=0ef064fb-07c4-4667-bd79-aab5351a2261"
        },
      };
    return(
        <>
        <ProjectContainer>
          <Project data={data.Project1} />
          <Project data={data.Project2} />
          <Project data={data.Project3} />
          <Project data={data.Project4} />
          <Project data={data.Project5} />
          <Project data={data.Project6} />
        </ProjectContainer>
        </>
    )
}

export default Projects;