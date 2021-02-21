import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import L_WIPRO from "../../assets/img/experience/wipro.svg";
import Tilt from "react-tilt";
import "./experience.style.css";

const Experience = () => {
  return (
    <div id="experience">
      <h1 className="pt-3 text-center font-details-b pb-3">WORK EXPERIENCE . .</h1>
      <Jumbotron className="jumbo-style">
        <Container>
          <Tilt options={{ max: 25 }}>
            <Card className="cd">
              <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                <Card.Img variant="top" className="img-resize" src={L_WIPRO} alt="Wipro logo" />
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Title className="text-center">Project Engineer (Turbo)</Card.Title>
                </div>
                <div>
                  <Card.Text className="text-center style">
                    <strong className="body-title-style ">Developer - Network Security</strong>
                    <br />
                    <strong>Technology:</strong> Python, C, Networking, Ethical Hacking
                    <br />
                    <strong>Duration:</strong> September 2020 - Present
                    <br />
                    <strong>Description:</strong> Currently working on development, automation and validation of different features of a Web Security Appliance. Also, learning new ideas for development of innovative projects.
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Tilt>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Experience;