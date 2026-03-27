import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I am <span className="purple">Mihhir Dhar</span>{" "}
            from <span className="purple">Noida, India</span>.
            <br />
            I am currently building and innovating as{" "}
            <span className="purple">Co-Founder|CEO</span> at{" "}
            <span className="purple">ReqMatch</span>.
            <br />I hold an Btech-CSE Specialising in{" "}
            <span className="purple">CLoud Computing</span> from{" "}
            <span className="purple">Bennett University</span>.
            <br />
            <br />
            Outside of core development, I love engaging in activities that keep me creative and inspired
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Building and scaling my entrepreneurial ideas 🚀
            </li>
            <li className="about-activity">
              <ImPointRight /> Pursuing my passion for music (proud degree holder!) 
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing competitive cricket and staying fit 🏏🏋️‍♂️
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Humble with a hint of kanye"{" "}
          </p>
          <footer className="blockquote-footer">Mihhir Dhar</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
