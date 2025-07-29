import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chats from "../../Assets/Projects/chat.png";
import applymate from "../../Assets/Projects/applymate.png";
import flex from "../../Assets/Projects/flex.png";
import link from "../../Assets/Projects/link.png";
import lingoflow from "../../Assets/Projects/lingoflow.png";
import agamotto from "../../Assets/Projects/agamotto.png";
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lingoflow}
              isBlog={false}
              title="LingoFlow"
              description="Personalized and secure Language translation Model using Python, JavaScript, HTML, Flask, Bootstrap, Git. Leveraged RNN's to create a LSTM model with encoding vectors, target sequencing and then using a decoder to produce the next character. Created a pipeline integration to a dedicated website access with Flask."
              ghLink="https://github.com/djdiptayan1/LingoFlow"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={agamotto}
              isBlog={false}
              title="Agamoto"
              description="Deepfake Detection Model built with Python. Created a custom CNN on keras and successfully classified 6 types of deepfakes using MTCNN to first extract faces from videos and images and then leveraged Resnet to classify making it compatible to video and image files."
              ghLink="https://github.com/djdiptayan1/Agamotto"
              demoLink=""              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={applymate}
              isBlog={false}
              title="ApplyMate"
              description="One Stop Solution For All Your Job Applications built with Typescript and JS. Developed an end-to-end software platform for job seekers, featuring AI-powered resume building, automated application submission, and personalized skill recommendations. Conducted a pilot with 100 students, achieving highly positive feedback."
              ghLink="https://github.com/shahpalash10/ApplyMate"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={link}
              isBlog={false}
              title="LINK – Dating Through Your Instagram Network"
              description="Reimagining Online Dating Through Trusted Social Connections using React.js, TypeScript, D3.js, Supabase, SQL. Building a dating platform that connects users through verified mutual Instagram connections, enhancing trust and meaningful engagement. Developed core services for social graph analysis, mutual connection scoring, real-time network visualizations, and secure authentication."
              ghLink="https://link-nine-mu.vercel.app/"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chats}
              isBlog={false}
              title="Chat Application"
              description="Elevate your communication with my Java-based chat application. This feature-rich platform enables seamless messaging, group chats, file sharing, and more. With an intuitive user interface and robust security features, it ensures privacy and convenience. Whether for personal or professional use, this chat application enhances your connectivity, fostering efficient and engaging conversations.."
            
              ghLink="https://github.com/shahpalash10/ChatApplication"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={flex}
              isBlog={false}
              title="FLEX - Next-Gen Transport System"
              description="Seamlessly navigate Chennai with real-time updates, smart routing, and integrated payment systems. Features include real-time tracking, smart payments, multi-modal routes, route finding, schedules, and transit pass functionality. Built to provide comprehensive transportation solutions for Chennai city."
              ghLink="https://github.com/shahpalash10/FLEX"
              demoLink=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
