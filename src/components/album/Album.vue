<template>
  <section class="section">
    <AlbumInfo :albumId="id"/>
    <TrackGallery :albumId="id"/>
  </section>
</template>

<script>
  import AlbumInfo from './AlbumInfo';
  import TrackGallery from './TrackGallery';

  export default {
    name: 'album',
    data() {
      return {
        id: this.$route.params.id,
      };
    },
    components: {
      AlbumInfo,
      TrackGallery
    }
  };
</script>

