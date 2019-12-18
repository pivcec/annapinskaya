import React, { Component } from "react";
import styled from "styled-components";

const Controls = styled.div`
  text-align: center;
`;

const TrackNumber = styled.div`
  text-align: center;
`;

const LeftButton = styled.div`
  display: -ms-inline-flexbox;
  display: inline-flex;
  vertical-align: middle;
`;

const PlayPauseButton = styled.div`
  display: -ms-inline-flexbox;
  display: inline-flex;
  vertical-align: middle;
`;

const RightButton = styled.div`
  display: -ms-inline-flexbox;
  display: inline-flex;
  vertical-align: middle;
`;

const PlayerImage = styled.img`
  max-width: 100px;
  cursor: pointer;
  -webkit-transition: 0.3s;
  -o-transition: 0.3s;
  transition: 0.3s;
`;

class AudioPlayer extends Component {
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

  getPlayerIsPlaying = (playerId, playerThatIsPlaying) => {
    if (playerId === playerThatIsPlaying) {
      return true;
    }
    return false;
  };

  render() {
    const { playerId, playerData, handleImageClick } = this.props;
    const { playerKey, playerThatIsPlaying } = this.state;
    const currentSong = playerKey + 1;
    const totalNumberOfSongs = playerData.length;
    const playerIsPlaying = this.getPlayerIsPlaying(
      playerId,
      playerThatIsPlaying
    );

    return (
      <>
        <audio
          ref={el => (this[playerId] = el)}
          src={playerData[playerKey]["audioUrl"]}
          autoPlay={false}
        />
        <Controls>
          <TrackNumber>{`${currentSong} / ${totalNumberOfSongs}`}</TrackNumber>
          <LeftButton
            onClick={() => {
              this.handlePreviousSongClick(
                playerKey,
                currentSong,
                playerIsPlaying,
                this[playerId]
              );
            }}
          >
            <i className="material-icons">keyboard_arrow_left</i>
          </LeftButton>
          {playerIsPlaying && (
            <PlayPauseButton
              onClick={() => {
                this.handlePauseClick(this[playerId]);
              }}
            >
              <i className="material-icons">pause_circle_outline</i>
            </PlayPauseButton>
          )}
          {!playerIsPlaying && (
            <PlayPauseButton
              onClick={() => {
                this.handlePlayClick(playerId, this[playerId]);
              }}
            >
              <i className="material-icons">play_circle_outline</i>
            </PlayPauseButton>
          )}
          <RightButton
            onClick={() => {
              this.handleNextSongClick(
                playerKey,
                currentSong,
                playerIsPlaying,
                totalNumberOfSongs,
                this[playerId]
              );
            }}
          >
            <i className="material-icons">keyboard_arrow_right</i>
          </RightButton>
          <div>{playerData[playerKey]["title"]}</div>
          <PlayerImage
            alt={playerData[playerKey]["title"]}
            src={playerData[playerKey]["imageUrl"]}
            onClick={() => {
              handleImageClick(playerData[playerKey]["imageUrl"]);
            }}
          />
        </Controls>
      </>
    );
  }
}

export default AudioPlayer;
