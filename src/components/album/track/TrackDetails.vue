<template>
  <div class="is-clipped">
    <router-link
      :to="{ name: 'Album', params: { id: track.albumId } }"
      class="is-primary link"
      v-if="hasAlbumId"
    >
      {{ track.name }}
    </router-link>
    <span v-else>{{ track.name }}</span>
    by
    <router-link
      :to="{ name: 'Artist', params: { id: track.artistId } }"
      class="is-primary link"
      v-if="hasArtistId"
      >{{ track.artist }}
    </router-link>
    <span v-else>
      {{ track.artist }}
    </span>
  </div>
</template>

<script>
export default {
  name: 'TrackDetails',
  props: ['track'],
  computed: {
    hasArtistId() {
      return this.track.artistId;
    },
    hasAlbumId() {
      return this.track.albumId;
    }
  }
};
</script>

<style lang="scss" scoped>
.is-clipped {
  min-width: 60px;
  max-width: 700px;
  width: 35vw;
}
</style>
