import React from 'react';
import './App.css';
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import {Parallax} from 'react-parallax';
import Container from "react-bootstrap/Container";

//components
import MyNavbar from "./components/my-navbar/mynavbar.component";
import MyCarousal from "./components/my-carousal/my-carousal.component";
import TitleMessage from "./components/my-title/title-message.component";
import FooterPanel from "./components/footer/footer.component";

//pages
import About from "./pages/about/about.component";
import Skills from "./pages/skills/skills.component";
import Experience from "./pages/experience/experience.component";
import Projects from "./pages/projects/project.component";
import ContactForm from "./pages/contact/contact.component";

const App = () => {
  return (
    <div className="App" style={{ position: "relative" }}>
      <MyNavbar />
      <MyCarousal />
      <TitleMessage />
     
      <div>
        <Parallax
          blur={{ min: -30, max: 30 }}
          bgImage={require("./assets/img/parallex/back1.jpg")}
          bgImageAlt=""
          strength={-200}
        >
          <div>
            <Container className="container-box rounded">
              <Fade duration={800}>
                <About />
              </Fade>
            </Container>
          </div>
        </Parallax>
      </div>
      <Container className="container-box rounded">
        <Slide bottom duration={500}>
          <hr />
          <Skills />
        </Slide>
      </Container>
      <div>
        <Parallax
          blur={{ min: -30, max: 30 }}
          bgImage={require("./assets/img/parallex/back8.jpg")}
          bgImageAlt=""
          strength={-200}
        >
          <hr />
          <div>
            <Container className="container-box rounded">
              <Fade duration={800}>
                <Experience />
              </Fade>
            </Container>
          </div>
        </Parallax>
      </div>
      <Container className="container-box rounded">
        <Slide bottom duration={500}>
          <hr />
          <Projects />
        </Slide>
      </Container>

      <Container className="container-box rounded">
        <Slide bottom duration={500}>
          <hr />
          <ContactForm />
        </Slide>
      </Container>

      <hr />
      <FooterPanel />
    </div>
  );
}

export default App;
