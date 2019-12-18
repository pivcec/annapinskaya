import React, { Component } from "react";
import Background from "./Components/Background";
import Section from "./Components/Section/Section";
import backgroundOneImage from "./images/anna.jpg";
import backgroundTwoImage from "./images/llllllIIIIl.png";
import backgroundThreeImage from "./images/life-once.jpg";
import backgroundFourImage from "./images/vanta-white.jpg";
import backgroundFiveImage from "./images/moonglade.png";
import backgroundSixImage from "./images/commercials.png";
import styled from "styled-components";
import "./css/App.css";

const Footer = styled.div`
  background-color: #ffffff;
  font-size: 36px;
  color: #282e34;
  font: 400 15px/1.8 "Lato", sans-serif;
  padding: 5% 10%;
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
    const getModalClassName = this.state.modalIsOn ? "modal-on" : "modal-off";
    return (
      <>
        <div className={getModalClassName}>
          <span
            className="close"
            onClick={() => {
              this.handleModalCloseClick();
            }}
          >
            &times;
          </span>
          <div className="modal-content">
            <img className="modal-image" src={this.state.modalImageSrc} />
          </div>
        </div>

        <Background
          backgroundImage={backgroundOneImage}
          title="ANNA PINSKAYA"
          isMainCaption
          isMainTitle
        />

        <Section
          isMain
          sectionId={1}
          handleImageClick={this.handleImageClick}
        />

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
