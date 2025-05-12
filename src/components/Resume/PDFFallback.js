import React from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { AiOutlineDownload } from "react-icons/ai";

function PDFFallback({ pdfPath }) {
  return (
    <Container fluid className="resume-section">
      <Row style={{ justifyContent: "center", position: "relative" }}>
        <Button
          variant="primary"
          href={pdfPath}
          target="_blank"
          style={{ maxWidth: "250px", marginBottom: "20px", marginTop: "20px" }}
        >
          <AiOutlineDownload />
          &nbsp;Download CV
        </Button>
      </Row>
      <Row style={{ justifyContent: "center", position: "relative" }}>
        <p>PDF viewer could not be loaded. Please download the CV using the button above.</p>
      </Row>
    </Container>
  );
}

export default PDFFallback;