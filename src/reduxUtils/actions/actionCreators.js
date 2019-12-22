const UPDATE_PLAYER_THAT_IS_PLAYING = "UPDATE_PLAYER_THAT_IS_PLAYING";

export function updatePlayerThatIsPlaying(payload) {
  return { type: UPDATE_PLAYER_THAT_IS_PLAYING, payload };
}
