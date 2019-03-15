class Jukebox {
  constructor(onSongEnded) {
    this.track = null;
    this.sound = null;
    this.isPlaying = false;
    this.onSongEnded = onSongEnded;
  }

  play(track) {
    this.stop();
    this.track = track;
    this.sound = new Audio(track.sample);
    this.sound.play();
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
