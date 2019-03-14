class Jukebox {
  constructor() {
    this.url = null;
    this.sound = null;
  }

  play(url) {
    if (this.sound !== null) {
      this.sound.pause();
    }
    this.sound = new Audio(url);
    this.sound.play();
    // this.sound = null;
  }

  pause() {
    if (this.sound !== null) {
      this.sound.pause();
    }
  }

  isPlaying() {
    if (this.sound === null) {
      return false;
    } else if (this.sound.is_paused) {
      return false;
    }
    return true;
  }
}

export default Jukebox;
