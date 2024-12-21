import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
import { FiPhone, FiAtSign } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";

export default function Contactus() {
  return (
    <div>
      <Container fluid className="certificate-section" id="about">
        <Container>
          <Row>
            <Col
              md={12}
              className="certificate-description d-flex justify-content-start"
            >
              <Zoom left cascade>
                <h1 className="aboutme-heading">Contact me</h1>
              </Zoom>
            </Col>
            <Col md={12} id="contact" className="mt-3">
              <Row>
                <Col md={7}>
                  <div className="contacts-details">
                    <a
                      href={`mailto:amankumarsharma01234@gmail.com`}
                      className="personal-details"
                    >
                      <div className="detailsIcon">
                        <FiAtSign />
                      </div>
                      <p style={{ color: "#fbd9ad" }}>
                        amankumarsharma01234@gmail.com
                      </p>
                    </a>
                    <a
                      href={`mob: +91 8918887575`}
                      className="personal-details"
                    >
                      <div className="detailsIcon">
                        <FiPhone />
                      </div>
                      <p style={{ color: "#fbd9ad" }}>+91 8918887575</p>
                    </a>
                    <a
                      href="https://www.google.com/maps/place/Kolkata,+West+Bengal/@22.5355649,88.2649509,26058m/data=!3m2!1e3!4b1!4m6!3m5!1s0x39f882db4908f667:0x43e330e68f6c2cbc!8m2!3d22.5743545!4d88.3628734!16zL20vMGN2dzk?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
                      className="personal-details"
                    >
                      <div className="personal-details">
                        <div className="detailsIcon">
                          <HiOutlineLocationMarker />
                        </div>
                        <p style={{ color: "#fbd9ad" }}>
                          Kolkata, West Bengal
                        </p>
                      </div>
                    </a>
                  </div>                 
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}

