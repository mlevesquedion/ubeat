<template>
  <div>
    <ArtistInfo v-bind:artistId="id"/>
    <AlbumGallery v-bind:artistId="id"/>
  </div>
</template>

<script>
import ArtistInfo from './ArtistInfo';
import AlbumGallery from './AlbumGallery';

export default {
  name: 'artist',
  data() {
    return {
      id: this.$route.params.id
    };
  },
  components: {
    ArtistInfo,
    AlbumGallery
  }
};
</script>

<style scoped lang="scss">
</style>
