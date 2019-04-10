<template>
  <Track :track="track" :playlists="playlists" :playingTrackId="playingTrackId">
    <div class="is-clipped">
      {{ track.name }},
      <router-link
        class="is-primary link"
        :to="{ name: 'Artist', params: { id: track.artistId } }"
        >{{ track.artist }} </router-link
      >-
      <router-link
        class="is-primary link"
        :to="{ name: 'Album', params: { id: track.albumId } }"
      >
        {{ track.album }}
      </router-link>
    </div>
  </Track>
</template>

<script>
import Track from '../../album/Track';

export default {
  name: 'TrackResult',
  props: ['track', 'playlists', 'playingTrackId'],
  components: {
    Track
  }
};
</script>

<style scoped lang="scss">
@import '@/assets/sass/styles.scss';
.is-clipped {
  min-width: 100px;
  max-width: 700px;
  width: 50vw;
}
</style>
