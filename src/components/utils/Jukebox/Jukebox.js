class Jukebox {
  constructor(onSongEnded) {
    this.track = null;
    this.sound = null;
    this.isPlaying = false;
    this.onSongEnded = onSongEnded;
  }

  play(track) {
    if (this.track && track.id === this.track.id) {
      this.sound.play();
    } else {
      this.track = track;
      this.pause();
      this.sound = new Audio(track.sample);
      this.sound.play();
      this.sound.addEventListener('ended', this.onSongEnded);
    }
    this.isPlaying = true;
  }

  pause() {
    if (this.isPlaying && this.sound !== null) {
      this.sound.pause();
    }
    this.isPlaying = false;
  }

  stop() {
    this.pause();
    this.track = null;
    this.sound = null;
  }

  playingTrackId() {
    return this.isPlaying && this.track && this.track.id;
  }
}

export default Jukebox;
