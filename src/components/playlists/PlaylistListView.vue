<template>
  <section class="section">
    <h1 class="title has-text-light">Playlists</h1>
    <div class="accordions">
      <PlaylistListViewItem
        v-for="p in playlists"
        :key="p.id"
        :playlist="p"
        :on-delete="onPlaylistDeletion"
      >
      </PlaylistListViewItem>
    </div>
  </section>
</template>

<script>
  import PlaylistListViewItem from './PlaylistListViewItem';

  export default {
    name: 'PlaylistListView',
    props: ['playlists'],
    methods: {
      onPlaylistDeletion(playlistId) {
        this.playlists = this.playlists.filter(p => p.id !== playlistId);
      }
    },
    components: { PlaylistListViewItem }
  };
</script>

<style scoped lang="scss">
  .section {
    padding-top: 0;
  }
</style>
