import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";

import colorSharp2 from "../assets/img/color-sharp2.png";
import github_icon from "../assets/img/github-icon.svg";
import coming_soon from "../assets/img/coming-soon.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';


export const Projects = () => {

  const projects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: coming_soon,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: coming_soon,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: coming_soon,
    },
    
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Here are the most significant projects I have worked on, showcasing my experience and skills. This section highlights a curated selection of key projects completed throughout my professional career</p>
                <a href="https://github.com/Serfelzxcv"><p>GitHub Documentation Here!</p></a>
                <a href="https://github.com/Serfelzxcv" target="_blank" >
                  <button id="github" >
                    <img src={github_icon} alt="GitHub Icon"/>
                  </button>
                </a> 

                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>I will continue updating the content as I complete more projects, ensuring that my portfolio reflects the latest and most relevant work from my ongoing professional journey</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>I will continue updating the content as I complete more projects, ensuring that my portfolio reflects the latest and most relevant work from my ongoing professional journey</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
