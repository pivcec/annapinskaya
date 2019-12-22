const initialState = {
  playerThatIsPlayingId: null,
  refToPlayerThatIsPlaying: null
};

export default function audioPlayer(state = initialState, action) {
  switch (action.type) {
    case "UPDATE_PLAYER_THAT_IS_PLAYING":
      return {
        ...state,
        playerThatIsPlayingId: action.payload.playerId,
        refToPlayerThatIsPlaying: action.payload.refToPlayerThatIsPlaying
      };
    default:
      return state;
  }
}
