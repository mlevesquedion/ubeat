<template>
  <section class="section">
    <Jukebox>
      <template slot-scope="{ playingTrackId }">
        <Track
          v-for="t in tracks"
          :key="t.id"
          :track="t"
          :highlightOnHover="true"
          :showSeparators="true"
          :playlists="playlists"
          :playingTrackId="playingTrackId"
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
import Track from './Track';
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
