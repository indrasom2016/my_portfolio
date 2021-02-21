import React from "react";
import Typewriter from "typewriter-effect";
import styled from "styled-components";

const MyTitleMessage = styled.h1`
  position: absolute;
  width: 100%;
  top: 22rem;
  z-index: 1;
  margin-top: -125px;
  text-align: center;
  strong {
    font-size: 1.25em;
  }
  div {
    color: #E6BE8A;
    text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.4);
    font-weight: 100;
    letter-spacing: 7px;
    .main {
      font-size: 50px;
    }
    .heading{
        font-family:"Lobster";
    }
    .sub {
      font-size: 27px;
      margin-top: 35px;
      font-family: "Bangers";
      letter-spacing: 2px;
    }
  }
`;

const TitleMessage = () => (
  <MyTitleMessage>
    <div className="titleMessage">
      <div className="heading">
        <div className="main text-center mb-3">
          <span>
            <strong>Indrasom Majumdar</strong>
          </span>
        </div>
        <div className="sub">
          <Typewriter
            options={{
              strings: ["Engineer", "Technology Enthusiast", "Learner", "Developer", "Graphic Design", "Coder"],
              autoStart: true,
              loop: true,
              delay: 70
            }}
          />
        </div>
      </div>
    </div>
  </MyTitleMessage>
);

export default TitleMessage;