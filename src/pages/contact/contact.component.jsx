import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./contact.styles.css";

const ContactForm = () => {
  return (
    <div id="contact">
      <h1 className="pt-3 text-center font-details-b pb-3">LET'S SHARE IDEAS !</h1>
      <Jumbotron className="contact-jumbotron">
        <Row>
          <Col className="d-flex justify-content-center flex-wrap">
            <div className="m-2">
              <a href="mailto:ribhu9998@gmail.com" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-danger" title="ribhu9998@gmail.com">
                  <i className="fas fa-envelope-square"></i> Mail me
                </Button>
              </a>
            </div>
            <div className="m-2">
              <a href="https://www.linkedin.com/in/indrasom-majumdar-2020" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-primary" title="Visit my LinkedIn">
                  <i className="fab fa-linkedin"></i> LinkedIn
                </Button>
              </a>
            </div>
            <div className="m-2">
              <a href="https://www.facebook.com/indrasom.majumdar" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-primary" title="Say hello on FB">
                  <i className="fab fa-facebook-square"></i> Facebook
                </Button>
              </a>
            </div>
            <div className="m-2">
              <a href="https://github.com/indrasom2016" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-dark" title="My other projects">
                  <i className="fab fa-github-square"></i> GitHub
                </Button>
              </a>
            </div>
            <div className="m-2">
              <a href="https://instagram.com/im_indrasom" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-danger" title="Follow on Insta">
                  <i className="fab fa-instagram"></i> Instagram
                </Button>
              </a>
            </div>
          </Col>
        </Row>
      </Jumbotron>
    </div>
  );
};

export default ContactForm;