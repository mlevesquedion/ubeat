<template>
  <div class="is-clipped">
    <router-link
      class="is-primary link"
      :to="{ name: 'Album', params: { id: track.albumId } }"
    >
      {{ track.name }}
    </router-link>
    -
    <router-link
      class="is-primary link"
      :to="{ name: 'Artist', params: { id: track.artistId } }"
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

<style scoped lang="scss">
.is-clipped {
  min-width: 100px;
  max-width: 700px;
  width: 50vw;
}
</style>
