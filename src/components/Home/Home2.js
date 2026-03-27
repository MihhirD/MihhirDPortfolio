import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            I’m Mihhir Dhar - a builder at the intersection of technology, business, and strategy, 
              focused on turning ideas into scalable, high-impact products. Over time, I’ve worked across product development, growth, and digital strategy , 
              building and scaling initiatives
              <br />
              <br />
              I am proficient in
              <i>
                <b className="purple">
                  {" "}
                  JavaScript, React.js, Next.js, Node.js, and modern web ecosystems{" "}
                </b>
              </i>
               - but beyond tools, I focus on problem-solving, user experience, and business impact
              <br />
              <br />
              My core strengths lie in              
               <i>
                <b className="purple">
                  {" "}
                  product management, market understanding and analysis, execution, Web Applications, Digital Solutions and{" "}
                </b>
              </i>
              identifying opportunities, designing rectifiers, and driving them to real outcomes.
              <br />
              <br />
              Whenever possible, I love building projects with
              <b className="purple"> my skills </b> and modern frameworks like{" "}
              <i>
                <b className="purple">React.js</b> and{" "}
                <b className="purple">Next.js</b>.
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
