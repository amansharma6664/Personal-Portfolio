import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
import { Fade } from "react-reveal";
import pp from "../../images/portfolio.png";
import { FaCode } from "react-icons/fa";
import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";
import reactimg from "../../images/reactimg.png";
import nodeimg from "../../images/nodeimg.png";
import sqlimg from "../../images/sqlimg.png";
import notenest from "../../images/notenest.png";
import news from "../../images/news.png";
import gamenova from "../../images/gamenova.png";
import musicapp  from "../../images/musicapp.png";
import mainapp from "../../images/mainapp.png";
import ecommerce from "../../images/ecommerce.jpg";
import quiz from "../../images/quiz.png";

export default function Projects() {
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
                <h1 className="aboutme-heading">Projects</h1>
              </Zoom>
            </Col>
            <Col md={3}>
              <Fade bottom>
                <div
                  key={1}
                  className="singleProject"
                  style={{
                    backgroundColor: "rgb(142 70 186 / 31%)",
                    border: "1px solid",
                    marginBottom: "30px"
                  }}
                >
                  <div className="projectContent" >
                    <h5 id={"first"} style={{ color: "#fbd9ad" }}>
                      NoteNest – MERN Stack Notes Management App
                    </h5>
                    <img src={notenest} alt={notenest} />
                    <div className="project--showcaseBtn" >
                      <a
                        href="https://github.com/amansharma6664/NoteNest_Frontend"
                        target="_blank"
                        rel="noreferrer"
                        className="iconBtn"
                        aria-labelledby="frontend-code"
                      >
                        <FaCode
                          id="frontend-code"
                          className="icon"
                          aria-label="Frontend Code"
                        />
                      </a>

                      <a
                        href="https://github.com/amansharma6664/NoteNest_Backend"
                        target="_blank"
                        rel="noreferrer"
                        className="iconBtn"
                        aria-labelledby="backend-code"
                      >
                        <FaCode
                          id="backend-code"
                          className="icon"
                          aria-label="Backend Code"
                        />
                      </a>
                    </div>
                  </div>
                  <h6>
                    <p
                      className="project--desc"
                      style={{
                        background: "#fbd9ad",
                        color: "#b061df",
                        fontWeight: 400,
                      }}
                    >
                      NoteNest is a simple and secure MERN stack notebook app
                      with user authentication and full CRUD functionality for
                      managing personal notes. Built with React, Node.js,
                      Express, and MongoDB.
                    </p>
                  </h6>
                  <div
                    className="project--lang"
                    style={{
                      background: "#fbd9ad",
                      color: "#b061df",
                      fontWeight: 400,
                    }}
                  >
                    HTML, CSS, JavaScript, React, Node JS, MongoDB, Express JS
                  </div>
                </div>
              </Fade>
            </Col>
            <Col md={3}>
              <Fade bottom>
                <div
                  key={1}
                  className="singleProject"
                  style={{
                    backgroundColor: "rgb(142 70 186 / 31%)",
                    border: "1px solid",
                  }}
                >
                  <div className="projectContent">
                    <h5 id={"first"} style={{ color: "#fbd9ad" }}>
                      E-commerce REST API Backend
                    </h5>
                    <img src={ecommerce} alt={ecommerce} />
                    <div className="project--showcaseBtn">
                      <a
                        href={
                          "https://github.com/amansharma6664/eCommerce-backend/tree/main/ecommerce-api"
                        }
                        target="_blank"
                        rel="noreferrer"
                        className={"iconBtn"}
                        aria-labelledby={`code`}
                      >
                        <FaCode
                          id={`code`}
                          className={"icon"}
                          aria-label="Code"
                        />
                      </a>
                    </div>
                  </div>
                  <h6>
                    <p
                      className="project--desc"
                      style={{
                        background: "#fbd9ad",
                        color: "#b061df",
                        fontWeight: 400,
                      }}
                    >
                      A secure and scalable E-commerce REST API built with
                      Node.js, Express, MongoDB, and JWT authentication,
                      featuring product management, cart system and order
                      processing.
                    </p>
                  </h6>
                  <div
                    className="project--lang"
                    style={{
                      background: "#fbd9ad",
                      color: "#b061df",
                      fontWeight: 400,
                    }}
                  >
                    JavaScript, Node JS, MongoDB, Express JS
                  </div>
                </div>
              </Fade>
            </Col>
            <Col md={3}>
              <Fade bottom>
                <div
                  key={1}
                  className="singleProject"
                  style={{
                    backgroundColor: "rgb(142 70 186 / 31%)",
                    border: "1px solid",
                  }}
                >
                  <div className="projectContent">
                    <h5 id={"first"} style={{ color: "#fbd9ad" }}>
                      Micro Frontend Music Library App
                    </h5>
                    <img src={musicapp} alt={mainapp} />
                    <div className="project--showcaseBtn">
                      <a
                        href="https://github.com/amansharma6664/main-app"
                        target="_blank"
                        rel="noreferrer"
                        className="iconBtn"
                        aria-labelledby="frontend-code"
                      >
                        <FaCode
                          id="frontend-code"
                          className="icon"
                          aria-label="Frontend Code"
                        />
                      </a>

                      <a
                        href="https://github.com/amansharma6664/music-library"
                        target="_blank"
                        rel="noreferrer"
                        className="iconBtn"
                        aria-labelledby="backend-code"
                      >
                        <FaCode
                          id="backend-code"
                          className="icon"
                          aria-label="Backend Code"
                        />
                      </a>
                    </div>
                  </div>
                  <h6>
                    <p
                      className="project--desc"
                      style={{
                        background: "#fbd9ad",
                        color: "#b061df",
                        fontWeight: 400,
                      }}
                    >
                      Main Container App with Music Library Micro Frontend – A
                      React-based container app built with Webpack that
                      dynamically loads the Music Library micro frontend using
                      Module Federation. The system supports role-based
                      authentication (admin/user), where admins can add or
                      delete songs, while all users can filter, sort, and group
                      songs using JavaScript methods like map, filter, and
                      reduce.
                    </p>
                  </h6>
                  <div
                    className="project--lang"
                    style={{
                      background: "#fbd9ad",
                      color: "#b061df",
                      fontWeight: 400,
                    }}
                  >
                    HTML, CSS, JavaScript, React, Webpack, Module Federation
                  </div>
                </div>
              </Fade>
            </Col>
            <Col md={3}>
              <Fade bottom>
                <div
                  key={1}
                  className="singleProject"
                  style={{
                    backgroundColor: "rgb(142 70 186 / 31%)",
                    border: "1px solid",
                  }}
                >
                  <div className="projectContent">
                    <h5 id={"first"} style={{ color: "#fbd9ad" }}>
                      Daily News – ReactJS News Aggregator App
                    </h5>
                    <img src={news} alt={news} />
                    <div className="project--showcaseBtn">
                      <a
                        href={"https://github.com/amansharma6664/Daily-News"}
                        target="_blank"
                        rel="noreferrer"
                        className={"iconBtn"}
                        aria-labelledby={`code`}
                      >
                        <FaCode
                          id={`code`}
                          className={"icon"}
                          aria-label="Code"
                        />
                      </a>
                    </div>
                  </div>
                  <h6>
                    <p
                      className="project--desc"
                      style={{
                        background: "#fbd9ad",
                        color: "#b061df",
                        fontWeight: 400,
                      }}
                    >
                      Daily News is a React app that displays top headlines by
                      category using NewsAPI. It features infinite scrolling, a
                      loading bar, and easy navigation for a smooth news
                      browsing experience.
                    </p>
                  </h6>
                  <div
                    className="project--lang"
                    style={{
                      background: "#fbd9ad",
                      color: "#b061df",
                      fontWeight: 400,
                    }}
                  >
                    HTML, CSS, JavaScript, React JS, NewsAPI
                  </div>
                </div>
              </Fade>
            </Col>
            <Col md={3}>
              <Fade bottom>
                <div
                  key={1}
                  className="singleProject"
                  style={{
                    backgroundColor: "rgb(142 70 186 / 31%)",
                    border: "1px solid",
                  }}
                >
                  <div className="projectContent">
                    <h5 id={"first"} style={{ color: "#fbd9ad" }}>
                      Quiz App
                    </h5>
                    <img src={quiz} alt={quiz} />
                    <div className="project--showcaseBtn">
                      <a
                        href={
                          "https://github.com/amansharma6664/working-quiz-app"
                        }
                        target="_blank"
                        rel="noreferrer"
                        className={"iconBtn"}
                        aria-labelledby={`code`}
                      >
                        <FaCode
                          id={`code`}
                          className={"icon"}
                          aria-label="Code"
                        />
                      </a>
                    </div>
                  </div>
                  <h6>
                    <p
                      className="project--desc"
                      style={{
                        background: "#fbd9ad",
                        color: "#b061df",
                        fontWeight: 400,
                      }}
                    >
                      Implemented a working quiz which calculates the score per
                      question. +5 for every correct answer, -2 for every
                      incorrect answer scored.
                    </p>
                  </h6>
                  <div
                    className="project--lang"
                    style={{
                      background: "#fbd9ad",
                      color: "#b061df",
                      fontWeight: 400,
                    }}
                  >
                    HTML, CSS, JavaScript, React JS
                  </div>
                </div>
              </Fade>
            </Col>

            <Col md={3}>
              <Fade bottom>
                <div
                  key={1}
                  className="singleProject"
                  style={{
                    backgroundColor: "rgb(142 70 186 / 31%)",
                    border: "1px solid",
                    marginBottom: "30px"
                  }}
                >
                  <div className="projectContent">
                    <h5 id={"first"} style={{ color: "#fbd9ad" }}>
                      GameNova-UI
                    </h5>
                    <img src={gamenova} alt={gamenova} />
                    <div className="project--showcaseBtn">
                      <a
                        href={"https://github.com/amansharma6664/GameNova-UI"}
                        target="_blank"
                        rel="noreferrer"
                        className={"iconBtn"}
                        aria-labelledby={`code`}
                      >
                        <FaCode
                          id={`code`}
                          className={"icon"}
                          aria-label="Code"
                        />
                      </a>
                    </div>
                  </div>
                  <h6>
                    <p
                      className="project--desc"
                      style={{
                        background: "#fbd9ad",
                        color: "#b061df",
                        fontWeight: 400,
                      }}
                    >
                      About GameNova UI — A modern, interactive React-based
                      gaming platform interface with vibrant visuals and
                      seamless navigation. Built using TailwindCSS and React
                      Router.{" "}
                    </p>
                  </h6>
                  <div
                    className="project--lang"
                    style={{
                      background: "#fbd9ad",
                      color: "#b061df",
                      fontWeight: 400,
                    }}
                  >
                    HTML, CSS, JavaScript, React JS, TailwindCSS
                  </div>
                </div>
              </Fade>
            </Col>
            <Col md={3}>
              <Fade bottom>
                <div
                  key={1}
                  className="singleProject"
                  style={{
                    backgroundColor: "rgb(142 70 186 / 31%)",
                    border: "1px solid",
                  }}
                >
                  <div className="projectContent">
                    <h5 id={"first"} style={{ color: "#fbd9ad" }}>
                      Image Search App Using Unsplash API
                    </h5>
                    <img src={reactimg} alt={reactimg} />
                    <div className="project--showcaseBtn">
                      <a
                        href={
                          "https://github.com/amansharma6664/Image-Search-App-using-Unsplash-API-"
                        }
                        target="_blank"
                        rel="noreferrer"
                        className={"iconBtn"}
                        aria-labelledby={`code`}
                      >
                        <FaCode
                          id={`code`}
                          className={"icon"}
                          aria-label="Code"
                        />
                      </a>
                    </div>
                  </div>
                  <h6>
                    <p
                      className="project--desc"
                      style={{
                        background: "#fbd9ad",
                        color: "#b061df",
                        fontWeight: 400,
                      }}
                    >
                      Built a front-end application using the Unsplash API to
                      retrieve and display 12 images based on user search
                      queries. The project included features like loading
                      indicators, error handling, and links to high-resolution
                      versions of the images. React hooks, context, and routing
                      were implemented for efficient state management and
                      navigation, ensuring a smooth user experience.
                    </p>
                  </h6>
                  <div
                    className="project--lang"
                    style={{
                      background: "#fbd9ad",
                      color: "#b061df",
                      fontWeight: 400,
                    }}
                  >
                    HTML, CSS, JavaScript
                  </div>
                </div>
              </Fade>
            </Col>
            <Col md={3}>
              <Fade bottom>
                <div
                  key={1}
                  className="singleProject"
                  style={{
                    backgroundColor: "rgb(142 70 186 / 31%)",
                    border: "1px solid",
                  }}
                >
                  <div className="projectContent">
                    <h5 id={"first"} style={{ color: "#fbd9ad" }}>
                      User Authentication API
                    </h5>
                    <img src={nodeimg} alt={nodeimg} />
                    <div className="project--showcaseBtn">
                      <a
                        href={
                          "https://github.com/amansharma6664/user-authentication-api"
                        }
                        target="_blank"
                        rel="noreferrer"
                        className={"iconBtn"}
                        aria-labelledby={`code`}
                      >
                        <FaCode
                          id={`code`}
                          className={"icon"}
                          aria-label="Code"
                        />
                      </a>
                    </div>
                  </div>
                  <h6>
                    <p
                      className="project--desc"
                      style={{
                        background: "#fbd9ad",
                        color: "#b061df",
                        fontWeight: 300,
                      }}
                    >
                      Developed a secure API using NodeJS and ExpressJS for user
                      sign-up and sign-in functionalities. The API ensured data
                      security by hashing passwords with bcrypt and generating
                      64-character JWT tokens for successful authentication.
                      MongoDB was used for efficient data storage, with robust
                      error handling implemented to manage invalid credentials
                      and duplicate user entries effectively.
                    </p>
                  </h6>
                  <div
                    className="project--lang"
                    style={{
                      background: "#fbd9ad",
                      color: "#b061df",
                      fontWeight: 400,
                    }}
                  >
                    Node JS, JavaScript, MongoDB, Express JS
                  </div>
                </div>
              </Fade>
            </Col>
            <Col md={3}>
              <Fade bottom>
                <div
                  key={1}
                  className="singleProject"
                  style={{
                    backgroundColor: "rgb(142 70 186 / 31%)",
                    border: "1px solid",
                  }}
                >
                  <div className="projectContent">
                    <h5 id={"first"} style={{ color: "#fbd9ad" }}>
                      SQL Database Query Project
                    </h5>
                    <img src={sqlimg} alt={sqlimg} />
                    <div className="project--showcaseBtn">
                      <a
                        href={
                          "https://github.com/amansharma6664/SQL-Database-Query-Project-"
                        }
                        target="_blank"
                        rel="noreferrer"
                        className={"iconBtn"}
                        aria-labelledby={`code`}
                      >
                        <FaCode
                          id={`code`}
                          className={"icon"}
                          aria-label="Code"
                        />
                      </a>
                    </div>
                  </div>
                  <h6>
                    <p
                      className="project--desc"
                      style={{
                        background: "#fbd9ad",
                        color: "#b061df",
                        fontWeight: 400,
                      }}
                    >
                      Worked on querying a large relational database using SQL
                      Server to analyze and retrieve customer and sales data.
                      Tasks included generating detailed monthly and yearly
                      sales reports, fetching customer-specific transaction
                      details, and performing advanced SQL queries. This project
                      showcased proficiency in SQL functions and database
                      restoration techniques.
                    </p>
                  </h6>
                  <div
                    className="project--lang"
                    style={{
                      background: "#fbd9ad",
                      color: "#b061df",
                      fontWeight: 600,
                    }}
                  >
                    SSMS
                  </div>
                </div>
              </Fade>
            </Col>
            <Col md={3}>
              <Fade bottom>
                <div
                  key={1}
                  className="singleProject"
                  style={{
                    backgroundColor: "rgb(142 70 186 / 31%)",
                    border: "1px solid",
                  }}
                >
                  <div className="projectContent">
                    <h5 id={"first"} style={{ color: "#fbd9ad" }}>
                      Personal Portfolio
                    </h5>
                    <img src={pp} alt={pp} />
                    <div className="project--showcaseBtn">
                      <a
                        href={
                          "https://github.com/amansharma6664/Personal-Portfolio"
                        }
                        target="_blank"
                        rel="noreferrer"
                        className={"iconBtn"}
                        aria-labelledby={`code`}
                      >
                        <FaCode
                          id={`code`}
                          className={"icon"}
                          aria-label="Code"
                        />
                      </a>
                    </div>
                  </div>
                  <h6>
                    <p
                      className="project--desc"
                      style={{
                        background: "#fbd9ad",
                        color: "#b061df",
                        fontWeight: 600,
                      }}
                    >
                      Welcome to my personal portfolio, where you can discover
                      my work, skills, and accomplishments presented in a clear
                      and visually engaging way. Take a look at my expertise and
                      creativity.
                    </p>
                  </h6>
                  <div
                    className="project--lang"
                    style={{
                      background: "#fbd9ad",
                      color: "#b061df",
                      fontWeight: 600,
                    }}
                  >
                    HTML, CSS, SCSS, React, JavaScript
                  </div>
                </div>
              </Fade>
            </Col>
          </Row>
          <div className="blog--viewAll">
            <Link to="/projectspage">
              <button className="btn btn-primary">
                View All
                <HiArrowRight className="viewArr" />
              </button>
            </Link>
          </div>
        </Container>
      </Container>
    </div>
  );
}
