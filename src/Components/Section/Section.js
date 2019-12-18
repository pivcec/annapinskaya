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
  state = {
    playerKey: 0,
    playerThatIsPlaying: null,
    refToPlayerThatIsPlaying: null
  };

  handlePlayClick = (playerName, audioPlayer) => {
    if (this.state.playerThatIsPlaying !== null) {
      this.state.refToPlayerThatIsPlaying.pause();
    }
    this.setState({
      playerThatIsPlaying: playerName,
      refToPlayerThatIsPlaying: audioPlayer
    });
    audioPlayer.play();
  };

  handlePauseClick = audioPlayer => {
    this.setState({
      playerThatIsPlaying: null,
      refToPlayerThatIsPlaying: null
    });
    audioPlayer.pause();
  };

  handlePreviousSongClick = (
    playerKey,
    currentSong,
    playerIsPlaying,
    audioPlayer
  ) => {
    if (currentSong > 1) {
      this.setState({
        ...this.state,
        playerKey: playerKey - 1
      });
      if (playerIsPlaying === true) {
        audioPlayer.pause();
        this.setState({
          playerThatIsPlaying: null,
          refToPlayerThatIsPlaying: null
        });
      }
    }
  };

  handleNextSongClick = (
    playerKey,
    currentSong,
    playerIsPlaying,
    totalNumberOfSongs,
    audioPlayer
  ) => {
    if (currentSong < totalNumberOfSongs) {
      this.setState({
        ...this.state,
        playerKey: playerKey + 1
      });
      if (playerIsPlaying === true) {
        audioPlayer.pause();
        this.setState({
          playerThatIsPlaying: null,
          refToPlayerThatIsPlaying: null
        });
      }
    }
  };

  render() {
    const { sectionId, playerId, isMain, handleImageClick } = this.props;
    const { playerKey, playerThatIsPlaying } = this.state;
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
            playerKey={playerKey}
            playerThatIsPlaying={playerThatIsPlaying}
            handlePlayClick={this.handlePlayClick}
            handlePauseClick={this.handlePauseClick}
            handlePreviousSongClick={this.handlePreviousSongClick}
            handleNextSongClick={this.handleNextSongClick}
            handleImageClick={handleImageClick}
          />
        )}
      </Container>
    );
  }
}

export default Section;
