import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./about.style.css";
import Profile from "../../assets/img/profile/me.jpg";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

const About = () => {
  return (
    <div id="about">
      <div className="about">
        <h1 className="pt-3 text-center font-details pb-3">ABOUT ME !</h1>
        <Container>
          <Row className="pt-3 pb-5 align-items-center">
            <Col xs={12} md={6}>
              <Row className="justify-content-center mb-2 mr-2 ">
                <Image className="profile justify-content-end" alt="profile" src={Profile} thumbnail fluid />
              </Row>
            </Col>
            <Col xs={12} md={6}>
              <Row className=" align-items-start p-2 my-details rounded">
                Hey! It's <strong>&nbsp;Indrasom Majumdar.</strong>
                <br />A programming enthusiast and an innovative problem solver, born and brought up in Kolkata, West Bengal, India. 
                <br />Currently, I am working as a Project Engineer of Turbo batch in Wipro Limited.
                <br />
                In 2020, I successfully completed my B-Tech in 'Electronics and Communication Engineering' from VIT Vellore.
                <br />
                Working with the clients, my goal is always driven towards providing amazing experience with excellence in quality and service to them.
                <br />
                Also, I love to brainstorm new ideas for innovative applications and develop projects which helps in serving today's world.
                <br /> <br />
                <Col className="d-flex justify-content-center flex-wrap">
                  <div>
                    <a href="#contact">
                      <Button className="m-2" variant="outline-primary">
                        Let's Talk
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://drive.google.com/file/d/1ZYYLG-svn5k-RAyQXPhT3SsO0-Uo7q9R/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-success">
                        My Resume
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://instagram.com/im_indrasom" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-danger">
                        Instagram
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://www.linkedin.com/in/indrasom-majumdar-2020" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-dark">
                        LinkedIn
                      </Button>
                    </a>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default About;