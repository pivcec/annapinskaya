import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { updatePlayerThatIsPlaying } from "../reduxUtils/actions/actionCreators";
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
    playerKey: 0
  };

  handlePlayClick = playerId => {
    const { refToPlayerThatIsPlaying } = this.props;
    if (refToPlayerThatIsPlaying) {
      refToPlayerThatIsPlaying.pause();
    }

    this.props.updatePlayerThatIsPlaying({
      playerId,
      refToPlayerThatIsPlaying: this.player
    });

    this.player.play();
  };

  handlePauseClick = () => {
    this.props.updatePlayerThatIsPlaying({
      playerId: null,
      refToPlayerThatIsPlaying: null
    });

    this.player.pause();
  };

  handlePreviousSongClick = (playerKey, currentSong, playerIsPlaying) => {
    const { refToPlayerThatIsPlaying } = this.props;
    if (currentSong > 1) {
      this.setState({
        ...this.state,
        playerKey: playerKey - 1
      });
      if (playerIsPlaying === true) {
        refToPlayerThatIsPlaying.pause();
        this.props.updatePlayerThatIsPlaying({
          playerId: null,
          refToPlayerThatIsPlaying: null
        });
      }
    }
  };

  handleNextSongClick = (
    playerKey,
    currentSong,
    playerIsPlaying,
    totalNumberOfSongs
  ) => {
    const { refToPlayerThatIsPlaying } = this.props;
    if (currentSong < totalNumberOfSongs) {
      this.setState({
        ...this.state,
        playerKey: playerKey + 1
      });
      if (playerIsPlaying === true) {
        refToPlayerThatIsPlaying.pause();
        this.props.updatePlayerThatIsPlaying({
          playerId: null,
          refToPlayerThatIsPlaying: null
        });
      }
    }
  };

  render() {
    const {
      playerId,
      playerData,
      handleImageClick,
      playerThatIsPlayingId
    } = this.props;
    const { playerKey } = this.state;
    const currentSong = playerKey + 1;
    const totalNumberOfSongs = playerData.length;
    const playerIsPlaying = playerId === playerThatIsPlayingId ? true : false;

    return (
      <>
        <audio
          ref={el => (this.player = el)}
          src={playerData[playerKey].audioUrl}
          autoPlay={false}
        />
        <Controls>
          <TrackNumber>{`${currentSong} / ${totalNumberOfSongs}`}</TrackNumber>
          <LeftButton
            onClick={() => {
              this.handlePreviousSongClick(
                playerKey,
                currentSong,
                playerIsPlaying
              );
            }}
          >
            <i className="material-icons">keyboard_arrow_left</i>
          </LeftButton>
          {playerIsPlaying && (
            <PlayPauseButton
              onClick={() => {
                this.handlePauseClick();
              }}
            >
              <i className="material-icons">pause_circle_outline</i>
            </PlayPauseButton>
          )}
          {!playerIsPlaying && (
            <PlayPauseButton
              onClick={() => {
                this.handlePlayClick(playerId);
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
                totalNumberOfSongs
              );
            }}
          >
            <i className="material-icons">keyboard_arrow_right</i>
          </RightButton>
          <div>{playerData[playerKey].title}</div>
          <PlayerImage
            alt={playerData[playerKey].title}
            src={playerData[playerKey].imageUrl}
            onClick={() => {
              handleImageClick(playerData[playerKey].imageUrl);
            }}
          />
        </Controls>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    playerThatIsPlayingId: state.audioPlayer.playerThatIsPlayingId,
    refToPlayerThatIsPlaying: state.audioPlayer.refToPlayerThatIsPlaying
  };
};

const mapDispatchToProps = {
  updatePlayerThatIsPlaying
};

export default connect(mapStateToProps, mapDispatchToProps)(AudioPlayer);

AudioPlayer.propTypes = {
  playerData: PropTypes.array.isRequired,
  playerId: PropTypes.number.isRequired,
  handleImageClick: PropTypes.func.isRequired
};
