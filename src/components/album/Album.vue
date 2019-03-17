<template>
  <section class="section">
    <AlbumInfo :albumId="id" :playlists="playlists" />
    <TrackList :albumId="id" :playlists="playlists" />
  </section>
</template>

<script>
import AlbumInfo from './AlbumInfo';
import TrackList from './TrackList';
import PlaylistAPI from '../../api/playlist';

export default {
  name: 'Album',
  data() {
    return {
      id: this.$route.params.id,
      playlists: PlaylistAPI.getUserPlaylists()
    };
  },
  components: {
    AlbumInfo,
    TrackList
  }
};
</script>
