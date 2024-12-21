import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Fade from "react-reveal/Fade";
import react from "../../images/react.pdf";
import node from "../../images/node.pdf";
import mongo from "../../images/react.pdf";
import devops from "../../images/devops.pdf";
import sql from "../../images/sql.pdf";
import intellipaat from "../../images/intellipaat.png";

export default function Certificate() {
  return (
    <div className="mt-5">
      <Container>
        {/* <Bounce left cascade> */}
        <Fade left cascade duration={1000} distance="20px">
          <Row className="g-5">
            <Col md={4}>
              <img
                src={intellipaat}
                alt=""
                style={{ width: "100%", height: "100%" }}
              />
            </Col>
            <Col md={4}>
              <img
                src={react}
                alt=""
                style={{ width: "100%", height: "100%" }}
              />
            </Col>
            <Col md={4}>
              <img
                src={node}
                alt=""
                style={{ width: "100%", height: "100%" }}
              />
            </Col>
            <Col md={4}>
              <img
                src={mongo}
                alt=""
                style={{ width: "100%", height: "100%" }}
              />
            </Col>
            <Col md={4}>
              <img
                src={devops}
                alt=""
                style={{ width: "100%", height: "100%" }}
              />
            </Col>
            <Col md={4}>
              <img src={sql} alt="" style={{ width: "100%", height: "100%" }} />
            </Col>
            {/* <Col md={4}>
              <img
                src={skill}
                alt=""
                style={{ width: "100%", height: "100%" }}
              />
            </Col>
            <Col md={4}>
              <img src={iq} alt="" style={{ width: "100%", height: "100%" }} />
            </Col>
            <Col md={4}>
              <img
                src={computer}
                alt=""
                style={{ width: "100%", height: "100%" }}
              />
            </Col> */}
          </Row>
          {/* </Bounce> */}
        </Fade>
      </Container>
    </div>
  );
}
