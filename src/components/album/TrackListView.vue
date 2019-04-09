<template>
  <section class="section">
    <Track
      v-for="t in tracks"
      :key="t.id"
      :track="t"
      :playlists="playlists"
      :isPlaying="t.id === playingTrackId"
      :highlightOnHover="true"
      class="track"
    />
    <div class="footer has-text-centered">
      <a :href="albumUrl">
        <img
          alt="Get it on iTunes Store"
          class="responsive-image"
          src="static/images/get_on_itunes.png"
        />
      </a>
    </div>
  </section>
</template>

<script>
import Jukebox from '@/utils/jukebox';
import Track from './Track';

export default {
  name: 'TrackListView',
  props: ['tracks', 'playlists'],
  data() {
    return {
      jukebox: new Jukebox(this.onPlaybackError)
    };
  },
  mounted() {
    this.$on('play', this.play);
    this.$on('stop', this.stop);
  },
  computed: {
    playingTrackId() {
      return this.jukebox.playingTrackId();
    },
    albumUrl() {
      return this.tracks[0].url;
    }
  },
  beforeDestroy() {
    this.stop();
  },
  methods: {
    play(track) {
      this.jukebox.play(track);
    },
    stop() {
      this.jukebox.stop();
    },
    onPlaybackError(track) {
      this.$toasted.show(`Could not play track ${track.name}!`, {
        type: 'ubeat-error'
      });
    }
  },
  components: {
    Track
  }
};
</script>

<style scoped lang="scss">
@import '@/assets/sass/styles.scss';

.footer {
  background: $background;
}

.footer img {
  min-width: 150px;
  width: 15%;
}

.responsive-image {
  min-width: 180px;
  max-width: 150px;
  height: auto;
}

.section {
  padding-left: 0;
  padding-right: 0;
}
</style>
