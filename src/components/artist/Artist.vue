<template>
  <div>
    <ArtistInfo/>
    <AlbumGallery/>
  </div>
</template>

<script>
import ArtistInfo from './ArtistInfo';
import AlbumGallery from './AlbumGallery';

export default {
  name: 'artist',
  components: {
    ArtistInfo,
    AlbumGallery
  }
};
</script>

<style scoped lang="scss">
</style>
