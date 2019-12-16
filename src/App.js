import React, { Component } from "react";
import AudioPlayer from "./Components/AudioPlayer";
import playerData from "./audioPlayer/playlist/playerData";
import "./css/App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      playerOneKey: 0,
      playerTwoKey: 0,
      playerThreeKey: 0,
      playerThatIsPlaying: null,
      refToPlayerThatIsPlaying: null,
      modalIsOn: false,
      modalImageSrc: null
    };
  }
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
  handlePauseClick = (playerName, audioPlayer) => {
    this.setState({
      playerThatIsPlaying: null,
      refToPlayerThatIsPlaying: null
    });
    audioPlayer.pause();
  };
  handlePreviousSongClick = (
    playerName,
    playerKey,
    currentSong,
    playerIsPlaying,
    audioPlayer
  ) => {
    if (currentSong > 1) {
      let key = playerName + "Key";
      this.setState({
        ...this.state,
        [key]: playerKey - 1
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
    playerName,
    playerKey,
    currentSong,
    playerIsPlaying,
    totalNumberOfSongs,
    audioPlayer
  ) => {
    if (currentSong < totalNumberOfSongs) {
      let key = playerName + "Key";
      this.setState({
        ...this.state,
        [key]: playerKey + 1
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
    const playerOneCurrentSong = this.state.playerOneKey + 1;
    const playerOneTotalNumberOfSongs = playerData["playerOne"].length;
    const playerTwoCurrentSong = this.state.playerTwoKey + 1;
    const playerTwoTotalNumberOfSongs = playerData["playerTwo"].length;
    const playerThreeCurrentSong = this.state.playerThreeKey + 1;
    const playerThreeTotalNumberOfSongs = playerData["playerThree"].length;
    return (
      <div>
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

        <div className="background-one">
          <div className="main-caption">
            <span className="main-title">ANNA PINSKAYA</span>
          </div>
        </div>

        <div className="section-one">
          <span className="description">
            <ul>
              <li>
                Moscow born indie composer / musician / sound producer - based
                in Prague.
              </li>
              <li>Focused on experimental film scoring and sound effects.</li>
              <li>
                <a href="#contact">contact</a>
              </li>
              <li>See projects below:</li>
            </ul>
          </span>
        </div>

        <div className="background-two">
          <div className="caption">
            <span className="sub-title">llllllIIIIl</span>
          </div>
        </div>

        <div className="section-two">
          <span className="description">
            <ul>
              <li>Sci-fi documentary by Petr Salaba</li>
              <li>FAMU Prague, 2017</li>
              <li>
                <a href="http://www.petrsalaba.com">www.petrsalaba.com</a>
              </li>
            </ul>
          </span>
          <AudioPlayer
            playerData={playerData}
            playerName={"playerOne"}
            playerId={1}
            playerKey={this.state.playerOneKey}
            currentSong={playerOneCurrentSong}
            totalNumberOfSongs={playerOneTotalNumberOfSongs}
            playerThatIsPlaying={this.state.playerThatIsPlaying}
            handlePlayClick={(playerName, audioPlayer) => {
              this.handlePlayClick(playerName, audioPlayer);
            }}
            handlePauseClick={(playerName, audioPlayer) => {
              this.handlePauseClick(playerName, audioPlayer);
            }}
            handlePreviousSongClick={(
              playerName,
              playerKey,
              currentSong,
              playerIsPlaying,
              audioPlayer
            ) => {
              this.handlePreviousSongClick(
                playerName,
                playerKey,
                currentSong,
                playerIsPlaying,
                audioPlayer
              );
            }}
            handleNextSongClick={(
              playerName,
              playerKey,
              currentSong,
              playerIsPlaying,
              totalNumberOfSongs,
              audioPlayer
            ) => {
              this.handleNextSongClick(
                playerName,
                playerKey,
                currentSong,
                playerIsPlaying,
                totalNumberOfSongs,
                audioPlayer
              );
            }}
            handleImageClick={imageUrl => {
              this.handleImageClick(imageUrl);
            }}
          />
        </div>

        <div className="background-three">
          <div className="caption">
            <span className="sub-title">LIFE ONCE</span>
          </div>
        </div>

        <div className="section-three">
          <span className="description">
            <ul>
              <li>Detective surreal drama / comedy</li>
              <li>Directed by Vladimir Raksha - 2017</li>
              <li>Work in progress</li>
            </ul>
          </span>
          <AudioPlayer
            playerData={playerData}
            playerName={"playerTwo"}
            playerId={2}
            playerKey={this.state.playerTwoKey}
            currentSong={playerTwoCurrentSong}
            totalNumberOfSongs={playerTwoTotalNumberOfSongs}
            playerThatIsPlaying={this.state.playerThatIsPlaying}
            handlePlayClick={(playerName, audioPlayer) => {
              this.handlePlayClick(playerName, audioPlayer);
            }}
            handlePauseClick={(playerName, audioPlayer) => {
              this.handlePauseClick(playerName, audioPlayer);
            }}
            handlePreviousSongClick={(
              playerName,
              playerKey,
              currentSong,
              playerIsPlaying,
              audioPlayer
            ) => {
              this.handlePreviousSongClick(
                playerName,
                playerKey,
                currentSong,
                playerIsPlaying,
                audioPlayer
              );
            }}
            handleNextSongClick={(
              playerName,
              playerKey,
              currentSong,
              playerIsPlaying,
              totalNumberOfSongs,
              audioPlayer
            ) => {
              this.handleNextSongClick(
                playerName,
                playerKey,
                currentSong,
                playerIsPlaying,
                totalNumberOfSongs,
                audioPlayer
              );
            }}
            handleImageClick={imageUrl => {
              this.handleImageClick(imageUrl);
            }}
          />
        </div>

        <div className="background-four">
          <div className="caption">
            <span className="sub-title">VANTA WHITE PAGES</span>
          </div>
        </div>

        <div className="section-four">
          <span className="description">
            <ul>
              <li>Short sci-fi future movie The Black Square</li>
              <li>Vanta White Pages Almanach</li>
              <li>Directed by Vladimir Raksha</li>
              <li>
                <a href="http://raksha.world/film/">www.raksha.world/film</a>
              </li>
            </ul>
          </span>
          <AudioPlayer
            playerData={playerData}
            playerName={"playerThree"}
            playerId={3}
            playerKey={this.state.playerThreeKey}
            currentSong={playerThreeCurrentSong}
            totalNumberOfSongs={playerThreeTotalNumberOfSongs}
            playerThatIsPlaying={this.state.playerThatIsPlaying}
            handlePlayClick={(playerName, audioPlayer) => {
              this.handlePlayClick(playerName, audioPlayer);
            }}
            handlePauseClick={(playerName, audioPlayer) => {
              this.handlePauseClick(playerName, audioPlayer);
            }}
            handlePreviousSongClick={(
              playerName,
              playerKey,
              currentSong,
              playerIsPlaying,
              audioPlayer
            ) => {
              this.handlePreviousSongClick(
                playerName,
                playerKey,
                currentSong,
                playerIsPlaying,
                audioPlayer
              );
            }}
            handleNextSongClick={(
              playerName,
              playerKey,
              currentSong,
              playerIsPlaying,
              totalNumberOfSongs,
              audioPlayer
            ) => {
              this.handleNextSongClick(
                playerName,
                playerKey,
                currentSong,
                playerIsPlaying,
                totalNumberOfSongs,
                audioPlayer
              );
            }}
            handleImageClick={imageUrl => {
              this.handleImageClick(imageUrl);
            }}
          />
        </div>

        <div className="background-five">
          <div className="caption">
            <span className="sub-title">MOONGLADE</span>
          </div>
        </div>

        <div className="section-five">
          <span className="description"></span>
          <div className="video">
            <iframe
              src="https://player.vimeo.com/video/197999941?color=070808"
              width="350"
              height="148"
              frameborder="0"
              webkitallowfullscreen
              mozallowfullscreen
              allowfullscreen
            ></iframe>
            <p>
              <a href="https://vimeo.com/197999941">
                Moonglade Tel Aviv MODERN CRAFTS
              </a>{" "}
              from <a href="https://vimeo.com/moongladeworld">Moonglade</a> on{" "}
              <a href="https://vimeo.com">Vimeo</a>.
            </p>
          </div>
          <div className="video">
            <iframe
              src="https://player.vimeo.com/video/226233309?color=000608&title=0&byline=0&portrait=0"
              width="350"
              height="148"
              frameborder="0"
              webkitallowfullscreen
              mozallowfullscreen
              allowfullscreen
            ></iframe>
            <p>
              <a href="https://vimeo.com/226233309">
                Haifa Vertical Underground for Moonglade
              </a>{" "}
              from{" "}
              <a href="https://vimeo.com/rakshaworld">Vladimir Raksh&aacute;</a>{" "}
              on <a href="https://vimeo.com">Vimeo</a>.
            </p>
          </div>
          <div className="video">
            <iframe
              src="https://player.vimeo.com/video/196893040?color=070808&title=0&byline=0&portrait=0"
              width="350"
              height="148"
              frameborder="0"
              webkitallowfullscreen
              mozallowfullscreen
              allowfullscreen
            ></iframe>
            <p>
              <a href="https://vimeo.com/196893040">
                Moonglade Tel Aviv trailer
              </a>{" "}
              from <a href="https://vimeo.com/moongladeworld">Moonglade</a> on{" "}
              <a href="https://vimeo.com">Vimeo</a>.
            </p>
          </div>
          <div className="video">
            <iframe
              src="https://player.vimeo.com/video/201049286?color=070808"
              width="350"
              height="148"
              frameborder="0"
              webkitallowfullscreen
              mozallowfullscreen
              allowfullscreen
            ></iframe>
            <p>
              <a href="https://vimeo.com/201049286">Moonglade Lisbon URBAN</a>{" "}
              from <a href="https://vimeo.com/moongladeworld">Moonglade</a> on{" "}
              <a href="https://vimeo.com">Vimeo</a>.
            </p>
          </div>
          <div className="video">
            <iframe
              src="https://player.vimeo.com/video/193806254?color=ffffff&title=0&byline=0&portrait=0"
              width="350"
              height="148"
              frameborder="0"
              webkitallowfullscreen
              mozallowfullscreen
              allowfullscreen
            ></iframe>
            <p>
              <a href="https://vimeo.com/193806254">Moonglade Lisbon trailer</a>{" "}
              from <a href="https://vimeo.com/moongladeworld">Moonglade</a> on{" "}
              <a href="https://vimeo.com">Vimeo</a>.
            </p>
          </div>
          <div className="video">
            <iframe
              src="https://player.vimeo.com/video/204310497?title=0&byline=0&portrait=0"
              width="350"
              height="148"
              frameborder="0"
              webkitallowfullscreen
              mozallowfullscreen
              allowfullscreen
            ></iframe>
            <p>
              <a href="https://vimeo.com/204310497">
                Moonglade Paris Art Recovery
              </a>{" "}
              from <a href="https://vimeo.com/moongladeworld">Moonglade</a> on{" "}
              <a href="https://vimeo.com">Vimeo</a>.
            </p>
          </div>
        </div>

        <div className="background-six">
          <div className="caption">
            <span className="sub-title">COMMERCIALS</span>
          </div>
        </div>

        <div className="section-six">
          <span className="description"></span>
          <div className="video">
            <iframe
              src="https://player.vimeo.com/video/184972437?color=c29b01&title=0&byline=0&portrait=0"
              width="350"
              height="148"
              frameBorder="0"
              allowFullScreen
            ></iframe>
            <p>
              <a href="https://vimeo.com/184972437">Cosmotheca Dreamhouse</a>{" "}
              from{" "}
              <a href="https://vimeo.com/rakshaworld">Vladimir Raksh&aacute;</a>{" "}
              on <a href="https://vimeo.com">Vimeo</a>.
            </p>
          </div>
          <div className="video">
            <iframe
              src="https://player.vimeo.com/video/230840816?color=030303&title=0&byline=0&portrait=0"
              width="350"
              height="197"
              frameBorder="0"
              allowFullScreen
            ></iframe>
            <p>
              <a href="https://vimeo.com/230840816">
                Goods Market Place Commercial Director&#039;s Cut
              </a>{" "}
              from{" "}
              <a href="https://vimeo.com/rakshaworld">Vladimir Raksh&aacute;</a>{" "}
              on <a href="https://vimeo.com">Vimeo</a>.
            </p>
          </div>
        </div>

        <div className="section-six" id="contact">
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
        </div>
      </div>
    );
  }
}

export default App;
