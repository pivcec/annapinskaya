import React, { Component } from "react";

class AudioPlayer extends Component {
  getPlayerIsPlaying = (playerName, playerThatIsPlaying) => {
    if (playerName === playerThatIsPlaying) {
      return true;
    }
    return false;
  };

  render() {
    const {
      playerData,
      audioPlayer,
      playerName,
      playerId,
      playerKey,
      currentSong,
      totalNumberOfSongs,
      playerThatIsPlaying,
      handlePauseClick,
      handlePlayClick,
      handlePreviousSongClick,
      handleNextSongClick,
      handleImageClick
    } = this.props;

    const playerIsPlaying = this.getPlayerIsPlaying(
      playerName,
      playerThatIsPlaying
    );

    return (
      <div>
        <audio
          ref={el => (this[playerName] = el)}
          src={playerData[playerName][playerKey]["audioUrl"]}
          autoPlay={false}
        />
        <div className="controls">
          <div className="track-number">
            {currentSong + " / " + totalNumberOfSongs}
          </div>
          <div
            className="left-button"
            onClick={() => {
              handlePreviousSongClick(
                playerName,
                playerKey,
                currentSong,
                playerIsPlaying,
                this[playerName]
              );
            }}
          >
            <i className="material-icons">keyboard_arrow_left</i>
          </div>
          {playerIsPlaying && (
            <div
              className="play-pause-button"
              onClick={() => {
                handlePauseClick(playerName, this[playerName]);
              }}
            >
              <i className="material-icons">pause_circle_outline</i>
            </div>
          )}
          {!playerIsPlaying && (
            <div
              className="play-pause-button"
              onClick={() => {
                handlePlayClick(playerName, this[playerName]);
              }}
            >
              <i className="material-icons">play_circle_outline</i>
            </div>
          )}
          <div
            className="right-button"
            onClick={() => {
              handleNextSongClick(
                playerName,
                playerKey,
                currentSong,
                playerIsPlaying,
                totalNumberOfSongs,
                this[playerName]
              );
            }}
          >
            <i className="material-icons">keyboard_arrow_right</i>
          </div>
          <div className="player-title">
            {playerData[playerName][playerKey]["title"]}
          </div>
          <div className="player-image-container">
            <img
              className="player-image"
              alt={playerData[playerName][playerKey]["title"]}
              src={playerData[playerName][playerKey]["imageUrl"]}
              onClick={() => {
                handleImageClick(playerData[playerName][playerKey]["imageUrl"]);
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default AudioPlayer;
