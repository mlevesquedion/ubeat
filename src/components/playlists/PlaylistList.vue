<template>
  <section class="section">
    <h1 class="title has-text-light">Playlists</h1>
    <div v-if="hasPlaylists" class="accordions">
      <Playlist
        :playlist="p"
        :index="pi"
        v-for="(p, pi) in sortedPlaylist"
        :key="p.id"
      />
    </div>
    <div v-else>{{ noPlaylistsMessage }}</div>
  </section>
</template>

<script>
  import isEmpty from '@/utils/isEmpty';
  import Playlist from './Playlist';

  export default {
    name: 'PlaylistList',
    props: ['playlists'],
    data() {
      return {
        noPlaylistsMessage: 'You have no playlists!'
      };
    },
    computed: {
      hasPlaylists() {
        return !isEmpty(this.playlists);
      },
      sortedPlaylist() {
        function compare(a, b) {
          if (a.name < b.name) {
            return -1;
          }
          if (a.name > b.name) {
            return 1;
          }
          return 0;
        }
        return this.playlists.sort(compare);
      },
    },
    components: { Playlist }
  };
</script>

<style scoped lang="scss">
  .section {
    padding-top: 0;
  }
</style>
