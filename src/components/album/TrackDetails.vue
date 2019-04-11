<template>
  <div class="is-clipped">
    <router-link
      :to="{ name: 'Album', params: { id: track.albumId } }"
      class="is-primary link"
    >
      {{ track.name }}
    </router-link>
    -
    <router-link
      :to="{ name: 'Artist', params: { id: track.artistId } }"
      class="is-primary link"
      >{{ track.artist }}
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'TrackDetails',
  props: ['track']
};
</script>

<style lang="scss" scoped>
.is-clipped {
  min-width: 100px;
  max-width: 700px;
  width: 50vw;
}
</style>
