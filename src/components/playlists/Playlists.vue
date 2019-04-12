<template>
  <div class="container">
    <div v-if="!user">
      <PlaylistMaker />
    </div>
    <AsyncContent :requestState="requestState" dataName="user playlists">
      <PlaylistList :playlists="playlists" :userPlaylists="playlists" />
    </AsyncContent>
  </div>
</template>

<script>
import PlaylistMaker from './PlaylistMaker';
import PlaylistList from './PlaylistList';
import AsyncContent from '../utils/Async/AsyncContent';
import PlaylistAPI from '../../api/playlist';
import RequestState from '../utils/Async/requestState';
import ErrorMessage from '../utils/ErrorMessage';

export default {
  name: 'Playlists',
  props: ['user'],
  data() {
    return {
      requestState: RequestState.LOADING,
      playlists: []
    };
  },
  created() {
    this.$root.$on('delete-playlist', this.deletePlaylist);
    this.$root.$on('delete-track', this.deleteTrack);
    this.$root.$on('create-playlist', this.createPlaylist);
    this.$root.$on('update-playlist-name', this.updatePlaylistName);
    this.$root.$on('track-added', this.overwritePlaylist);
    PlaylistAPI.getUserPlaylists()
      .then(this.setPlaylists)
      .catch(this.setError);
  },
  methods: {
    setPlaylists(playlists) {
      /*
            Have to use concat, in case the user creates a playlist before
            the backend data arrives.
           */
      this.playlists = this.playlists.concat(playlists);
      this.requestState = RequestState.LOADED;
    },
    setError(_err) {
      this.requestState = RequestState.ERROR;
    },
    createPlaylist(playlist) {
      this.playlists.push(playlist);
    },
    deletePlaylist(index) {
      this.playlists.splice(index, 1);
    },
    deleteTrack(playlistIndex, trackIndex) {
      this.playlists[playlistIndex].tracks.splice(trackIndex, 1);
    },
    updatePlaylistName(playlistId, newPlaylistName) {
      this.playlists[
        this.playlists.findIndex(p => p.id === playlistId)
      ].name = newPlaylistName;
    },
    overwritePlaylist(newPlaylist) {
      const index = this.playlists.findIndex(p => p.id === newPlaylist.id);
      this.playlists.splice(index, 1, newPlaylist);
    }
  },
  components: {
    AsyncContent,
    PlaylistList,
    PlaylistMaker,
    ErrorMessage
  }
};
</script>
