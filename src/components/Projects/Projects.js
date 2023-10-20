import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chats from "../../Assets/Projects/chat.png";
import translates from "../../Assets/Projects/translate.jpg";
import cpus from "../../Assets/Projects/cpu.jpg";
import ship from "../../Assets/Projects/ships.jpg";
import ocr from "../../Assets/Projects/OCR.png"
import houses from "../../Assets/Projects/house.jpg"
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
              imgPath={ship}
              isBlog={false}
              title="Ships Recognition"
              description="I've developed a ship recognition system using machine learning. By curating datasets, implementing preprocessing, and applying advanced algorithms, I achieve accurate vessel classification. This project holds potential in maritime security, autonomous navigation, and traffic management. I emphasize ethical data use and privacy throughout this endeavor"
              ghLink="https://github.com/shahpalash10/Ships-detection-full-scale-model-"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={houses}
              isBlog={false}
              title="Houses Price Prediction Model"
              description="This project is trained on you entering several generic components in a house from number of rooms to number of bathrooms and predicts the prices accordingly"
              ghLink="https://github.com/shahpalash10/Houses_pricepredicition"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ocr}
              isBlog={false}
              title="OCR"
              description="OCR project, a powerful tool for extracting text from images. Through robust training and cutting-edge algorithms, I've created a reliable system that finds applications in digitization, data entry, and information retrieval. I prioritize usability and accessibility, making it an invaluable resource for diverse industries."
              ghLink="https://github.com/shahpalash10/OCR"
              demoLink=""              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={translates}
              isBlog={false}
              title="Language Translation Model"
              description="Experience seamless cross-language communication with my Hindi to English speech-to-speech translation model. By leveraging advanced speech recognition and translation technologies, I've crafted a user-friendly solution for breaking language barriers. Whether for travel, business, or personal interactions, this model enables real-time, accurate, and accessible conversations between Hindi and English speakers."
              ghLink="https://github.com/shahpalash10/English-to-Hindi-translator"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cpus}
              isBlog={false}
              title="CPU Load Monitor"
              description="Experience real-time insights into your system's performance with my CPU load monitor project. This essential tool enables users to track and analyze CPU utilization, ensuring optimal resource management. With user-friendly graphical representations and detailed statistics, this project simplifies the monitoring process, making it an invaluable asset for system administrators, developers, and tech enthusiasts alike."
              ghLink="https://github.com/shahpalash10/CPU_LOAD"
             
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
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
