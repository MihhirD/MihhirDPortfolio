import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Sensai from "../../Assets/Projects/Sensai.png";
import RideX from "../../Assets/Projects/RideX.png";
import BookMyDoc from "../../Assets/Projects/BookMyDoc.png";
import FindAJob from "../../Assets/Projects/FindAJob.png";
import MedWeb from "../../Assets/Projects/MedWeb.png";
import todolist  from "../../Assets/Projects/todolist.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are some of the projects I've worked on recently :
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Sensai}
              isBlog={false}
              title="Sensai"
              description="Sensai is a MERN stack-based resume building and interview preparation platform that helps users craft optimized resumes and prepare for interviews using intelligent API-driven insights and a clean, user-focused interface."
              ghLink="https://github.com/MihhirD/Sensai.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={RideX}
              isBlog={false}
              title="RideX"
              description="RideX is a premium car rental management platform built using the MERN stack, enabling seamless booking, fleet management, and real-time availability tracking with a modern and scalable architecture."
              ghLink="https://github.com/MihhirD/RideX.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={BookMyDoc}
              isBlog={false}
              title="BookMyDoc"
              description="BookMyDoc is a modern healthcare appointment booking platform that connects patients with doctors seamlessly, enabling easy scheduling, real-time availability tracking, and efficient healthcare management."
              ghLink="https://github.com/MihhirD/BookMyDoc.git"             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={FindAJob}
              isBlog={false}
              title="FindAJob"
              description="Find a Job is a user-focused web application designed to simplify the job search process by providing an intuitive interface to explore opportunities efficiently. The platform aims to bridge the gap between job seekers and relevant opportunities through a clean UI and structured data presentation"
              ghLink="https://github.com/MihhirD/FindAJob.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={MedWeb}
              isBlog={false}
              title="MedWeb"
              description="A full-stack medical web application developed with Django (backend) and React (frontend), designed to deliver real-time health insights based on user inputs. The system combines efficient data handling, scalable architecture, and an intuitive UI to provide a smooth and interactive user experience."
              ghLink="https://github.com/MihhirD/MedWeb.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todolist}
              isBlog={false}
              title="ToDoList"
              description="A feature-rich and visually stunning To-Do List application built using Django and the MERN ecosystem, designed for seamless task management with a modern UI, real-time interactions, and a highly intuitive user experience."
              ghLink="https://github.com/MihhirD/todolist.git"/>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
