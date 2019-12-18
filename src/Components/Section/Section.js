import React, { Component } from "react";
import styled from "styled-components";
import SectionOneContent from "./SectionContent/SectionOneContent";
import SectionTwoContent from "./SectionContent/SectionTwoContent";
import SectionThreeContent from "./SectionContent/SectionThreeContent";
import SectionFourContent from "./SectionContent/SectionFourContent";
import SectionFiveContent from "./SectionContent/SectionFiveContent";
import SectionSixContent from "./SectionContent/SectionSixContent";
import playerData from "../../audioPlayer/playlist/playerData";
import AudioPlayer from "../AudioPlayer";

const Container = styled.div`
  font: 400 15px/1.8 "Lato", sans-serif;
  padding: 5% 10%;
  color: ${props => (props.isMain ? "#aaa" : "#282e34")};
  backgroundcolor: ${props => (props.isMain ? "#ffffff" : null)};
`;

const Description = styled.div`
  color: #000;
`;

class Section extends Component {
  render() {
    const { sectionId, playerId, isMain, handleImageClick } = this.props;
    return (
      <Container isMain={isMain}>
        <Description>
          {sectionId === 1 && <SectionOneContent />}
          {sectionId === 2 && <SectionTwoContent />}
          {sectionId === 3 && <SectionThreeContent />}
          {sectionId === 4 && <SectionFourContent />}
          {sectionId === 5 && <SectionFiveContent />}
          {sectionId === 6 && <SectionSixContent />}
        </Description>
        {playerId && (
          <AudioPlayer
            playerData={playerData[playerId - 1]}
            playerId={playerId}
            handleImageClick={handleImageClick}
          />
        )}
      </Container>
    );
  }
}

export default Section;
