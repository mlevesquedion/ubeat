class Jukebox {
  constructor(onSongEnded, onPlaybackError) {
    this.track = null;
    this.sound = null;
    this.onSongEnded = onSongEnded;
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
    this.sound.addEventListener('ended', _e => this.stop());
  }

  stop() {
    if (this.sound) {
      this.sound.pause();
      this.sound.currentTime = 0;
      this.sound.removeAttribute('src');
      this.sound.load();
    }
    this.sound = null;
    this.onSongEnded();
  }

  playingTrackId() {
    return this.track && this.track.id;
  }
}

export default Jukebox;
