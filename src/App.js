import React, { Component } from "react";
import Background from "./Components/Background";
import Section from "./Components/Section/Section";
import backgroundOneImage from "./images/anna.jpg";
import backgroundTwoImage from "./images/llllllIIIIl.png";
import backgroundThreeImage from "./images/life-once.jpg";
import backgroundFourImage from "./images/vanta-white.jpg";
import backgroundFiveImage from "./images/moonglade.png";
import backgroundSixImage from "./images/commercials.png";
import styled, { keyframes } from "styled-components";
import "./css/App.css";

const Footer = styled.div`
  background-color: #ffffff;
  font-size: 36px;
  color: #282e34;
  font: 400 15px/1.8 "Lato", sans-serif;
  padding: 5% 10%;
`;

const zoom = keyframes`
  from { 
    transform: scale(0); 
  } 
  to { 
    transform: scale(1); 
  }
`;

const ModalContent = styled.div`
  margin: auto;
  display: block;
  width: 80%;
  max-width: 700px;
  animation: ${zoom} 0.3s linear;

  @media only screen and (max-width: 700px) {
    width: 100%;
  }
`;

const ModalImage = styled.img`
  max-width: 100%;
`;

const ModalClose = styled.span`
  position: absolute;
  top: 15px;
  right: 35px;
  color: #f1f1f1;
  font-size: 40px;
  font-weight: bold;
  -webkit-transition: 0.3s;
  -o-transition: 0.3s;
  transition: 0.3s;

  &:hover,
  &:focus {
    color: #bbb;
    text-decoration: none;
    cursor: pointer;
  }
`;

const ModalBackground = styled.div`
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.9); /* Black w/ opacity */
  display: ${props => (props.isOn ? "inline" : "none")};
`;

class App extends Component {
  constructor() {
    super();
    this.state = {
      modalIsOn: false,
      modalImageSrc: null
    };
  }

  handleImageClick = imageUrl => {
    this.setState({
      modalIsOn: !this.state.modalIsOn,
      modalImageSrc: imageUrl
    });
  };

  handleModalCloseClick = () => {
    this.setState({
      modalIsOn: false,
      modalImageSrc: null
    });
  };

  render() {
    const { modalIsOn } = this.state;
    return (
      <>
        <ModalBackground isOn={modalIsOn}>
          <ModalClose
            onClick={() => {
              this.handleModalCloseClick();
            }}
          >
            &times;
          </ModalClose>
          <ModalContent>
            <ModalImage
              alt="modal content"
              className="modal-image"
              src={this.state.modalImageSrc}
            />
          </ModalContent>
        </ModalBackground>

        <Background
          backgroundImage={backgroundOneImage}
          title="ANNA PINSKAYA"
          isMainCaption
          isMainTitle
        />

        <Section isMain sectionId={1} />

        <Background
          backgroundImage={backgroundTwoImage}
          title="llllllIIIIl"
          isMainCaption={false}
          isMainTitle={false}
        />

        <Section
          isMain={false}
          sectionId={2}
          playerId={1}
          handleImageClick={this.handleImageClick}
        />

        <Background
          backgroundImage={backgroundThreeImage}
          title="LIFE ONCE"
          isMainCaption={false}
          isMainTitle={false}
        />

        <Section
          isMain={false}
          sectionId={3}
          playerId={2}
          handleImageClick={this.handleImageClick}
        />

        <Background
          backgroundImage={backgroundFourImage}
          title="VANTA WHITE PAGES"
          isMainCaption={false}
          isMainTitle={false}
        />

        <Section
          isMain={false}
          sectionId={4}
          playerId={3}
          handleImageClick={this.handleImageClick}
        />

        <Background
          backgroundImage={backgroundFiveImage}
          title="MOONGLADE"
          isMainCaption={false}
          isMainTitle={false}
        />

        <Section isMain={false} sectionId={5} />

        <Background
          backgroundImage={backgroundSixImage}
          title="COMMERCIALS"
          isMainCaption={false}
          isMainTitle={false}
        />

        <Section isMain={false} sectionId={6} />

        <Footer>
          <ul>
            <li>Lunateka Studio S.R.O.</li>
            <li>Havanska 150/16 170 00, Prague, Czech Republic</li>
            <li>+420 727 874749</li>
            <li>
              <a href="https://www.facebook.com/Quite-Ordinary-Case-267284760050621/">
                facebook profile
              </a>
            </li>
          </ul>
        </Footer>
      </>
    );
  }
}

export default App;
