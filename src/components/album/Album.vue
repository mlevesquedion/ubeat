<template>
  <section class="section">
    <AlbumInfo :albumId="id" :playlists="playlists"/>
    <TrackList :albumId="id" :playlists="playlists"/>
  </section>
</template>

<script>
  import AlbumInfo from './AlbumInfo';
  import TrackList from './TrackList';
  import PlaylistAPI from '../../api/playlists';

  export default {
    name: 'Album',
    data() {
      return {
        id: this.$route.params.id,
        playlists: PlaylistAPI.getUserPlaylists()
      };
    },
    mounted() {
    },
    components: {
      AlbumInfo,
      TrackList
    }
  };
</script>

