class Jukebox {
  constructor(onSongEnded, onPlaybackError) {
    this.track = null;
    this.sound = null;
    this.isPlaying = false;
    this.onSongEnded = onSongEnded;
    this.onPlaybackError = onPlaybackError;
  }

  play(track) {
    this.stop();
    this.track = track;
    this.sound = new Audio(track.sample);
    this.sound.play().catch(_ => {
      this.onPlaybackError(this.track);
      this.onSongEnded();
    });
    this.sound.addEventListener('ended', this.onSongEnded);
    this.isPlaying = true;
  }

  stop() {
    if (this.isPlaying && this.sound !== null) {
      this.sound.pause();
    }
    this.track = null;
    this.sound = null;
  }

  playingTrackId() {
    return this.isPlaying && this.track && this.track.id;
  }
}

export default Jukebox;
