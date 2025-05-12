import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/shah_final_complete.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import PDFFallback from "./PDFFallback";


function ResumeNew() {
  const [width, setWidth] = useState(1200);
  const [pdfError, setPdfError] = useState(false);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  const handlePdfError = () => {
    setPdfError(true);
  };

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        <Row className="resume">
          {!pdfError ? (
            <div className="d-flex justify-content-center">
              <iframe 
                src={pdf} 
                width={width > 786 ? "800" : "350"}
                height="1000"
                title="Resume"
                style={{border: "none"}}
                onError={handlePdfError}
              >
                <PDFFallback pdfPath={pdf} />
              </iframe>
            </div>
          ) : (
            <PDFFallback pdfPath={pdf} />
          )}
        </Row>

        <Row style={{ justifyContent: "center", position: "relative", marginTop: "20px" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
