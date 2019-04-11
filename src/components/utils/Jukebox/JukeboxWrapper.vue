<template>
  <fragment>
    <slot :playingTrackId="playingTrackId"></slot>
  </fragment>
</template>

<script>
import Jukebox from './jukebox';

export default {
  name: 'JukeboxWrapper',
  data() {
    return {
      jukebox: new Jukebox(this.onSongEnded, this.onPlaybackError),
      playingTrackId: null,
      listeningForEvents: true
    };
  },
  created() {
    this.$root.$on('play-track', this.play);
    this.$root.$on('stop-track', this.stop);
  },
  beforeDestroy() {
    /*
        Event listeners should automatically be disabled by Vue,
        but without the next two lines audio playback behaves unreliably
        (stop does nothing, sound comes out weird, etc.)
       */
    this.$root.$off('play-track', this.play);
    this.$root.$off('stop-track', this.stop);
    this.stop();
  },
  methods: {
    play(track) {
      this.jukebox.play(track);
      this.playingTrackId = this.jukebox.playingTrackId();
    },
    stop() {
      this.jukebox.stop();
    },
    onSongEnded() {
      this.playingTrackId = null;
    },
    onPlaybackError(track) {
      this.$toasted.show(`Could not play track ${track.name}!`, {
        type: 'ubeat-error'
      });
    }
  }
};
</script>
