<template>
  <section class="section">
    <Jukebox>
      <template slot-scope="{ playingTrackId }">
        <Track
          v-for="t in tracks"
          :track="t"
          :key="t.id"
          :playingTrackId="playingTrackId"
          :playlists="playlists"
          :highlightOnHover="true"
          :showSeparators="true"
          class="track"
        />
      </template>
    </Jukebox>
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
import Track from './track/Track';
import Jukebox from '../utils/Jukebox/JukeboxWrapper';

export default {
  name: 'TrackListView',
  props: ['tracks', 'playlists'],
  computed: {
    albumUrl() {
      return this.tracks[0].url;
    }
  },
  components: {
    Jukebox,
    Track
  }
};
</script>

<style lang="scss" scoped>
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
