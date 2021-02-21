import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Figure from 'react-bootstrap/Figure';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import P1 from '../../assets/img/project/pj1.jpg';
import P2 from '../../assets/img/project/pj2.jpg';
import P3 from '../../assets/img/project/pj3.jpg';
import P4 from '../../assets/img/project/pj4.jpg';
import P5 from '../../assets/img/project/pj5.jpg';
import P6 from '../../assets/img/project/pj6.jpg';

const popover1 = (
  <Popover id="popover-basic">
    <Popover.Title as="h3">4 Applications</Popover.Title>
    <Popover.Content>
      - <strong>Smart Traffic System</strong> 
      <br />- <strong>GPS based Car Parking Assistance</strong>
      <br />- <strong>Weather Station and Prediction</strong>
      <br />- <strong>Smart Waste Management</strong>
      <br/><br/><strong>Technologies used:</strong>
      <br/>1. Arduino / NodeMCU
      <br/>2. Digital Image Processing (OpenCV)
      <br/>3. Python
      <br/>4. Google Maps API
      <br/>5. HTML, CSS, JS
      <br/>6. Thingspeak Cloud
      <br/>7. R for ML Prediction
      <br/><a href="https://www.youtube.com/playlist?list=PLQjAOC4W8_c_Cum95W1zEAolCtEkRgd2z" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="success">
                        View Description
                      </Button>
            </a>
    </Popover.Content>
  </Popover>
);

const popover2 = (
  <Popover id="popover-basic">
    <Popover.Title as="h3">For Clinics</Popover.Title>
    <Popover.Content>
      <strong>Description :</strong> 
      <br />Automated wireless communication between patient's side and doctor's side. Automatic health monitoring by virtue of various sensors and cloud based apps for doctor to monitor real time data of patients.
      The system also includes Doctor Appointment system website for smart clinics.
      <br /><br /><strong>Technologies used:</strong>
      <br/>1. Arduino / NodeMCU
      <br/>2. Python
      <br/>3. Thingspeak cloud
      <br/>4. Wireless modules
      <br/>5. Java
    </Popover.Content>
  </Popover>
);

const popover3 = (
  <Popover id="popover-basic">
    <Popover.Title as="h3">An Automated System</Popover.Title>
    <Popover.Content>
      <strong>Description :</strong> 
      <br />This project is taken up because India is an agriculture oriented country and the rate at which water resources are depleting is a dangerous threat hence there is a need of smart and efficient way of irrigation. In this project we have implemented sensors which detect the humidity in the soil (agricultural field) and supply water to the field which has water requirement. 
      Our aim of the work is to simplify the method of irrigation. The soil moisture sensor is pressed in the soil. It takes continuous readings of the moisture percentage of the soil. The readings are sent to the 8051 micro-controller continuously. A permissible value is set in the program for functioning of the sensor. 
      If the sensor value falls below this permissible value, the buzzer starts ringing. The output of the buzzer is connected to Arduino. As the buzzer rings, Arduino sends a notification to the mobile application about the low water content in the soil. The user can switch on the water sprayer to water the crops, through the mobile. If he switches it ON, Arduino will check the available water level in the tank with the help of ultrasonic sensor. If there is sufficient water in the tank, the water sprayer will automatically turn ON, otherwise it will display a message that the water in tank is not sufficient to water the crops, through the mobile application.
      <br /><br /><strong>Technologies used:</strong>
      <br/>1. Arduino and Ethernet Shield
      <br/>2. 8051 Microcontroller
      <br/>3. Sensors
      <br/>4. Web Applications
      
    </Popover.Content>
  </Popover>
);

const popover4 = (
  <Popover id="popover-basic">
    <Popover.Title as="h3">Useful for Homes</Popover.Title>
    <Popover.Content>
      <strong>Description :</strong> 
      <br />The Home Automation System is mainly constructed to make it easy for the user nowadays in their household, in this era of automation. 
      The weather monitoring system is used to monitor different weather parameters. This project is a combination of both the ideas to automate the surroundings around the user to make it pleasant and comfortable conditions even if the weather is different. This system is used to cope up with the environmental conditions and make the home comfortable automatically or by just switching it through android app installed in a phone. 
      The system can be also operated by blind or disabled people through the voice recognition technique. A security system is also included to open the home door by entering password and the mail is sent to the admin automatically of the image of the intruder if wrong password is entered. The system is cost – effective and flexible with many types of device to be controlled.
      <br /><br /><strong>Technologies used:</strong>
      <br/>1. Arduino
      <br/>2. MATLAB
      <br/>3. Sensors
      <br/>4. Bluetooth devices
      <br/>5. Mobile applications 
      <br/><a href="https://ieeexplore.ieee.org/document/8541249" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="success">
                        View Publication
                      </Button>
            </a>
    </Popover.Content>
  </Popover>
);

const popover5 = (
  <Popover id="popover-basic">
    <Popover.Title as="h3">Analysis of ECG denoising systems</Popover.Title>
    <Popover.Content>
      <strong>Description :</strong> 
      <br />The main problem is the ECG signal can be disturbed by noise or interferences, which are of various forms such as muscle artifacts, baseline wander, power line interferences, channel noise and so on. These interferences in the signal introduce errors during disease detection. ECG signal processing has turned into an important medium for research and clinical practices. 
      The power line interferences can be successfully removed from the ECG signal by various means to obtain a denoised signal. These are based on different calculations on the filters and algorithms. This project is based on denoising electrocardiogram signal using methods such as Normalized Least Mean Square (NLMS) Algorithm, Notch Filter, Wavelet transform thresholding and Moving Average filter using the smoothing algorithm. The Power Spectral Density (PSD) and spectrogram graphs are plotted. Execution parameters like SNR, %PRD, MSE and spectral densities are computed and compared for different samples. 
      The real-time recorded information are acquired from the benchmark MIT-BIH arrhythmia database.
      <br /><br /><strong>Technologies used:</strong>
      <br/>1. MATLAB
      <br/>2. Adaptive filtering
      <br/>3. Notch filtering
      <br/>4. Discrete wavelet transforms
      <br/>5. Digital Signal Processing
      
    </Popover.Content>
  </Popover>
);

const popover6 = (
  <Popover id="popover-basic">
    <Popover.Title as="h3">Useful for Web Applications</Popover.Title>
    <Popover.Content>
      <strong>Description :</strong> 
      <br />A chatbot is a PC program intended to mimic an insightful discussion with a human client by means of sound-related or printed strategies. The vast majority of the visit bots are intended for taking part in casual banter and their identities are made by the software engineer. 
      The objective of this project is to design and implement a chat-bot based on natural language processing which can establish real-time engagement with customers. Under social media, this chat-bot can establish relation for media marketing. The project is identified with how a program can naturally separate organized information from plain content keeping in mind the end goal to "import" the existence occasions and in this way the identity of the fake substance. At that point we continue to talk about the genuine execution of the conversational specialist beginning from this information base for every distinctive individual. 
      Toward the end, a few outcomes are featured and remarked utilizing a particular recorded figure.
      <br /><br /><strong>Technologies used:</strong>
      <br/>1. Python
      <br/>2. Natural Language Processing
      <br/>3. Probability theorems
      
    </Popover.Content>
  </Popover>
);


const Projects = () => {
    return (
      <div id="projects">
        <div className="projects">
          <h1 className="pt-3 text-center font-details-b pb-3">Major Projects !</h1>
          <Container>
            <Row className="pt-3 pb-5 align-items-center">
              <Col xs={12} md={4} >
                <Figure>
                        <Figure.Image
                            alt="prj1"
                            src={P1}
                        />
                        <Figure.Caption className="text-center">
                            <OverlayTrigger trigger="click" placement="right" overlay={popover1}>
                                <Button variant="warning">View Project</Button>
                            </OverlayTrigger>
                        </Figure.Caption>
                    </Figure>
              </Col>
               <Col xs={12} md={4}>
                <Figure>
                        <Figure.Image
                            alt="171x180"
                            src={P2}
                        />
                        <Figure.Caption className="text-center">
                            <OverlayTrigger trigger="click" placement="right" overlay={popover2}>
                                    <Button variant="warning">View Project</Button>
                            </OverlayTrigger>
                        </Figure.Caption>
                    </Figure>
              </Col>
              <Col xs={12} md={4}>
                <Figure>
                        <Figure.Image
                            alt="171x180"
                            src={P3}
                        />
                        <Figure.Caption className="text-center">
                            <OverlayTrigger trigger="click" placement="right" overlay={popover3}>
                                <Button variant="warning">View Project</Button>
                            </OverlayTrigger>
                        </Figure.Caption>
                    </Figure>
              </Col>
            </Row>


            <Row className="pt-3 pb-5 align-items-center">
              <Col xs={12} md={4} >
                <Figure>
                        <Figure.Image
                            alt="prj1"
                            src={P4}
                        />
                        <Figure.Caption className="text-center">
                            <OverlayTrigger trigger="click" placement="right" overlay={popover4}>
                                <Button variant="warning">View Project</Button>
                            </OverlayTrigger>
                        </Figure.Caption>
                    </Figure>
              </Col>
               <Col xs={12} md={4}>
                <Figure>
                        <Figure.Image
                            alt="171x180"
                            src={P5}
                        />
                        <Figure.Caption className="text-center">
                            <OverlayTrigger trigger="click" placement="right" overlay={popover5}>
                                    <Button variant="warning">View Project</Button>
                            </OverlayTrigger>
                        </Figure.Caption>
                    </Figure>
              </Col>
              <Col xs={12} md={4}>
                <Figure>
                        <Figure.Image
                            alt="171x180"
                            src={P6}
                        />
                        <Figure.Caption className="text-center">
                            <OverlayTrigger trigger="click" placement="right" overlay={popover6}>
                                <Button variant="warning">View Project</Button>
                            </OverlayTrigger>
                        </Figure.Caption>
                    </Figure>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  };
  
  export default Projects;