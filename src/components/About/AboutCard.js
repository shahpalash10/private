import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Palash Shah </span>
            from <span className="purple"> Hyderabad, India.</span>
            <br /> I am a second year student pursuing a Btech Degree
            in Computer Science and Engineering at SRM University,Chennai.
            <br />
            I'm currently open for Internships
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Music
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            {"THERE'S NOTHING YOU CAN'T DO "}
          </p>
          <footer className="blockquote-footer">Palash</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
