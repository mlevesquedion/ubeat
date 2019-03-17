<template>
  <section class="section">
    <h1 class="title has-text-light">New playlist</h1>
    <div class="field">
      <input
        @keydown.enter="createPlaylist"
        class="input"
        placeholder="Name"
        type="text"
        v-model="newPlaylistName"
      />
    </div>
    <div class="field">
      <button
        :class="{ 'is-loading': isLoading }"
        @click="createPlaylist"
        class="button is-primary"
      >
        Create
      </button>
    </div>
  </section>
</template>

<script>
import PlaylistAPI from '../../api/playlist';

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
      if (!this.newPlaylistName.trim()) {
        this.$toasted.show('Cannot create playlist with empty name!', {
          type: 'ubeat-error'
        });
        return;
      }
      this.isLoading = true;
      const playlistName = this.newPlaylistName;
      PlaylistAPI.createPlaylist(playlistName)
        .then(playlist => this.$root.$emit('create-playlist', playlist))
        .then(this.reset)
        .then(_ =>
          this.$toasted.show(`Succesfully created playlist ${playlistName}`, {
            type: 'ubeat-success'
          })
        )
        .catch(_err => {
          this.isLoading = false;
          this.$toasted.show('Could not create playlist!', {
            type: 'ubeat-error'
          });
        });
    }
  }
};
</script>

<style scoped></style>
