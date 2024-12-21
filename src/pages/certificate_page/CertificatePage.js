import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
import { Fade } from "react-reveal";
import Particle from "../../Particle";
import fsd from "../../images/fsd.pdf";
import react from "../../images/react.pdf";
import node from "../../images/node.pdf";
import mongo from "../../images/mongo.pdf";
import devops from "../../images/devops.pdf";
import sql from "../../images/sql.pdf";
import intellipaat from "../../images/intellipaat.png";

export default function CertificatePage() {
  return (
    <section className="home-section">
      <Container fluid id="home">
        <Particle />
        <Container className="home-content">
          <div
            className="d-flex justify-content-center"
            width="100%"
            style={{ backgroundColor: "#fbd9ad" }}
          >
            <Zoom left cascade>
              <h1 style={{ color: "rgb(134 61 176" }}>Certificates</h1>
            </Zoom>
          </div>
          <div>
            <div>
              <Container fluid className="certificate-section" id="about">
                <Container>
                  <Row>
                    <Col md={12} className="mt-5">
                      <Row className="g-5">
                        <Col md={4} className="col-sm-12 col-md4">
                          <Fade bottom duration={2000} distance="20px">
                            <div className="cert-card">
                              <div className="content">
                                <a
                                  href={fsd}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <div className="content-overlay"></div>
                                  <div
                                    className="cert-header"
                                    style={{ backgroundColor: "white" }}
                                  >
                                    {
                                      <img
                                        className="logo_img"
                                        src={intellipaat}
                                        alt={intellipaat}
                                      />
                                    }
                                  </div>
                                  <div className="content-details fadeIn-top">
                                    <h3
                                      className="content-title"
                                      style={{ color: "black" }}
                                    >
                                      Certificate
                                    </h3>
                                  </div>
                                </a>
                              </div>
                              <div className="cert-body">
                                <h2
                                  className="cert-body-title"
                                  style={{ fontWeight: 700, color: "#fbd9ad" }}
                                >
                                  Full Stack Web Developer MEAN Stack
                                </h2>
                                <h3
                                  className="cert-body-subtitle"
                                  style={{
                                    color: "#eb90ff",
                                    marginBottom: "0px",
                                  }}
                                >
                                  - Intellipaat
                                </h3>
                              </div>
                            </div>
                          </Fade>
                        </Col>
                        <Col md={4}>
                          <Fade bottom duration={2000} distance="20px">
                            <div className="cert-card">
                              <div className="content">
                                <a
                                  href={react}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <div className="content-overlay"></div>
                                  <div
                                    className="cert-header"
                                    style={{ backgroundColor: "white" }}
                                  >
                                    {
                                      <img
                                        className="logo_img"
                                        src={intellipaat}
                                        alt={intellipaat}
                                      />
                                    }
                                  </div>
                                  <div className="content-details fadeIn-top">
                                    <h3
                                      className="content-title"
                                      style={{ color: "black" }}
                                    >
                                      Certificate
                                    </h3>
                                  </div>
                                </a>
                              </div>
                              <div className="cert-body">
                                <h2
                                  className="cert-body-title"
                                  style={{ fontWeight: 700, color: "#fbd9ad" }}
                                >
                                  React JS
                                </h2>
                                <h3
                                  className="cert-body-subtitle"
                                  style={{
                                    color: "#eb90ff",
                                    marginBottom: "0px",
                                  }}
                                >
                                  - Intellipaat
                                </h3>
                              </div>
                            </div>
                          </Fade>
                        </Col>
                        <Col md={4}>
                          <Fade bottom duration={2000} distance="20px">
                            <div className="cert-card">
                              <div className="content">
                                <a
                                  href={node}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <div className="content-overlay"></div>
                                  <div
                                    className="cert-header"
                                    style={{ backgroundColor: "white" }}
                                  >
                                    {
                                      <img
                                        className="logo_img"
                                        src={intellipaat}
                                        alt={intellipaat}
                                      />
                                    }
                                  </div>
                                  <div className="content-details fadeIn-top">
                                    <h3
                                      className="content-title"
                                      style={{ color: "black" }}
                                    >
                                      Certificate
                                    </h3>
                                  </div>
                                </a>
                              </div>
                              <div className="cert-body">
                                <h2
                                  className="cert-body-title"
                                  style={{ fontWeight: 700, color: "#fbd9ad" }}
                                >
                                  Node JS
                                </h2>
                                <h3
                                  className="cert-body-subtitle"
                                  style={{
                                    color: "#eb90ff",
                                    marginBottom: "0px",
                                  }}
                                >
                                  - Intellipaat
                                </h3>
                              </div>
                            </div>
                          </Fade>
                        </Col>
                        <Col md={4}>
                          <Fade bottom duration={2000} distance="20px">
                            <div className="cert-card">
                              <div className="content">
                                <a
                                  href={mongo}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <div className="content-overlay"></div>
                                  <div
                                    className="cert-header"
                                    style={{ backgroundColor: "white" }}
                                  >
                                    {
                                      <img
                                        className="logo_img"
                                        src={intellipaat}
                                        alt={intellipaat}
                                      />
                                    }
                                  </div>
                                  <div className="content-details fadeIn-top">
                                    <h3
                                      className="content-title"
                                      style={{ color: "black" }}
                                    >
                                      Certificate
                                    </h3>
                                  </div>
                                </a>
                              </div>
                              <div className="cert-body">
                                <h2
                                  className="cert-body-title"
                                  style={{ fontWeight: 700, color: "#fbd9ad" }}
                                >
                                  MongoDB
                                </h2>
                                <h3
                                  className="cert-body-subtitle"
                                  style={{
                                    color: "#eb90ff",
                                    marginBottom: "0px",
                                  }}
                                >
                                  - Intellipaat
                                </h3>
                              </div>
                            </div>
                          </Fade>
                        </Col>
                        <Col md={4}>
                          <Fade bottom duration={2000} distance="20px">
                            <div className="cert-card">
                              <div className="content">
                                <a
                                  href={devops}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <div className="content-overlay"></div>
                                  <div
                                    className="cert-header"
                                    style={{ backgroundColor: "white" }}
                                  >
                                    {
                                      <img
                                        className="logo_img"
                                        src={intellipaat}
                                        alt={intellipaat}
                                      />
                                    }
                                  </div>
                                  <div className="content-details fadeIn-top">
                                    <h3
                                      className="content-title"
                                      style={{ color: "black" }}
                                    >
                                      Certificate
                                    </h3>
                                  </div>
                                </a>
                              </div>
                              <div className="cert-body">
                                <h2
                                  className="cert-body-title"
                                  style={{ fontWeight: 700, color: "#fbd9ad" }}
                                >
                                  Devops
                                </h2>
                                <h3
                                  className="cert-body-subtitle"
                                  style={{
                                    color: "#eb90ff",
                                    marginBottom: "0px",
                                  }}
                                >
                                  - Intellipaat
                                </h3>
                              </div>
                            </div>
                          </Fade>
                        </Col>
                        <Col md={4}>
                          <Fade bottom duration={2000} distance="20px">
                            <div className="cert-card">
                              <div className="content">
                                <a
                                  href={sql}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <div className="content-overlay"></div>
                                  <div
                                    className="cert-header"
                                    style={{ backgroundColor: "white" }}
                                  >
                                    {
                                      <img
                                        className="logo_img"
                                        src={intellipaat}
                                        alt={intellipaat}
                                      />
                                    }
                                  </div>
                                  <div className="content-details fadeIn-top">
                                    <h3
                                      className="content-title"
                                      style={{ color: "black" }}
                                    >
                                      Certificate
                                    </h3>
                                  </div>
                                </a>
                              </div>
                              <div className="cert-body">
                                <h2
                                  className="cert-body-title"
                                  style={{ fontWeight: 700, color: "#fbd9ad" }}
                                >
                                  SQL Course
                                </h2>
                                <h3
                                  className="cert-body-subtitle"
                                  style={{
                                    color: "#eb90ff",
                                    marginBottom: "0px",
                                  }}
                                >
                                  - Intellipaat
                                </h3>
                              </div>
                            </div>
                          </Fade>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Container>
              </Container>
            </div>
          </div>
          <div className="blog--viewAll"></div>
        </Container>
      </Container>
    </section>
  );
}
