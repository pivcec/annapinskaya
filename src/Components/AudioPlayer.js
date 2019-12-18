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
  getPlayerIsPlaying = (playerId, playerThatIsPlaying) => {
    if (playerId === playerThatIsPlaying) {
      return true;
    }
    return false;
  };

  render() {
    const {
      playerId,
      playerData,
      playerKey,
      playerThatIsPlaying,
      handlePauseClick,
      handlePlayClick,
      handlePreviousSongClick,
      handleNextSongClick,
      handleImageClick
    } = this.props;

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
              handlePreviousSongClick(
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
                handlePauseClick(this[playerId]);
              }}
            >
              <i className="material-icons">pause_circle_outline</i>
            </PlayPauseButton>
          )}
          {!playerIsPlaying && (
            <PlayPauseButton
              onClick={() => {
                handlePlayClick(playerId, this[playerId]);
              }}
            >
              <i className="material-icons">play_circle_outline</i>
            </PlayPauseButton>
          )}
          <RightButton
            onClick={() => {
              handleNextSongClick(
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
          <div>
            <PlayerImage
              alt={playerData[playerKey]["title"]}
              src={playerData[playerKey]["imageUrl"]}
              onClick={() => {
                handleImageClick(playerData[playerKey]["imageUrl"]);
              }}
            />
          </div>
        </Controls>
      </>
    );
  }
}

export default AudioPlayer;
