<template>
  <section class="section">
    <h1 class="title has-text-light">New playlist</h1>
    <div class="field">
      <input class="input"
             @keydown.enter="createPlaylist"
             placeholder="Name" type="text" v-model="newPlaylistName">
    </div>
    <div class="field">
      <button @click="createPlaylist"
              class="button is-primary"
              :class="{'is-loading': isLoading}">
        Create
      </button>
    </div>
  </section>
</template>

<script>
  import PlaylistAPI from '../../api/playlists';

  export default {
    name: 'PlaylistMaker',
    data() {
      return {
        newPlaylistName: '',
        isLoading: false
      };
    },
    methods: {
      reset() {
        this.isLoading = false;
        this.newPlaylistName = '';
      },
      createPlaylist() {
        if (!this.newPlaylistName) {
          alert('Cannot create playlist with empty name!');
          return;
        }
        this.isLoading = true;
        PlaylistAPI.createPlaylist(this.newPlaylistName)
          .then(playlist => this.$emit('create-playlist', playlist))
          .then(this.reset)
          .catch(err => alert(err));
      }
    }
  };
</script>

<style scoped>

</style>
