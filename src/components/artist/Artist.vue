<template>
  <div>
    <ArtistInfo :artistId="id" />
    <DetailArtist :artistName="artistName" />
    <AlbumGallery :artistId="id" />
  </div>
</template>

<script>
import ArtistInfo from './ArtistInfo';
import AlbumGallery from './AlbumGallery';
import DetailArtist from './DetailArtist';

export default {
  name: 'artist',
  data() {
    return {
      id: this.$route.params.id,
      ArtistInfo,
      artistName: 'Cher'
    };
  },
  components: {
    DetailArtist,
    ArtistInfo,
    AlbumGallery
  }
};
</script>

<style scoped lang="scss"></style>
