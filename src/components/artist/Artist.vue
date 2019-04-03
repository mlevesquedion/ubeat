<template>
  <div>
    <ArtistInfo :artistId="id" />
    <AlbumGallery :artistId="id" />
    <SimilarArtists :artistId="id" />
  </div>
</template>

<script>
import ArtistInfo from './ArtistInfo';
import AlbumGallery from './AlbumGallery';
import SimilarArtists from './SimilarArtists';

export default {
  name: 'artist',
  data() {
    return {
      id: this.$route.params.id,
      ArtistInfo
    };
  },
  components: {
    SimilarArtists,
    ArtistInfo,
    AlbumGallery
  }
};
</script>

<style scoped lang="scss"></style>
