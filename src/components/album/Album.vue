<template>
  <section class="section">
    <AlbumInfo :albumId="id"/>
    <TrackGallery :albumId="id"/>
  </section>
</template>

<script>
  import AlbumInfo from './AlbumInfo';
  import TrackGallery from './TrackList';

  export default {
    name: 'Album',
    data() {
      return {
        id: this.$route.params.id
      };
    },
    components: {
      AlbumInfo,
      TrackGallery
    }
  };
</script>

