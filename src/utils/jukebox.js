class Jukebox {
  constructor(onPlaybackError) {
    this.track = null;
    this.sound = null;
    this.isPlaying = false;
    this.onPlaybackError = onPlaybackError;
  }

  play(track) {
    this.stop();
    this.track = track;
    this.sound = new Audio(track.sample);
    this.sound.play().catch(_ => {
      this.onPlaybackError(this.track);
      this.stop();
    });
    this.sound.addEventListener('ended', this.stop);
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
