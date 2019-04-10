<template>
  <Track :track="track" :playlists="playlists" :isPlaying="false" class="track">
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

// TODO : Incorporate Jukebox somewhere

export default {
  name: 'TrackResult',
  props: ['track', 'playlists'],
  components: {
    Track
  }
};
</script>

<style scoped lang="scss">
@import '@/assets/sass/styles.scss';
.is-clipped {
  min-width: 100px;
  width: 50vw;
}
</style>
