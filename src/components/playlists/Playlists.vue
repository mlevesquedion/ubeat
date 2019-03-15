<template>
  <div class="container">
    <PlaylistMaker/>
    <AsyncContent
      :requestState="requestState"
      :data="playlists"
      dataName="user playlists"
    >
      <PlaylistList :playlists="playlists"/>
    </AsyncContent>
  </div>
</template>

<script>
  import PlaylistMaker from './PlaylistMaker';
  import PlaylistList from './PlaylistList';
  import AsyncContent from '../utils/Async/AsyncContent';
  import PlaylistAPI from '../../api/playlist';
  import RequestState from '../utils/Async/requestState';
  import Spinner from '../utils/Spinner/CustomSpinner';
  import SpinnerSize from '../utils/Spinner/spinnerSize';
  import ErrorMessage from '../utils/ErrorMessage';

  export default {
    name: 'Playlists',
    data() {
      return {
        RequestState,
        SpinnerSize,
        requestState: RequestState.LOADING,
        playlists: [],
        error: 'Unable to fetch user playlists at this time.'
      };
    },
    created() {
      this.$root.$on('delete-playlist', this.deletePlaylist);
      this.$root.$on('delete-track', this.deleteTrack);
      this.$root.$on('create-playlist', this.createPlaylist);
      this.$root.$on('update-playlist-name', this.updatePlaylist);
    },
    mounted() {
      PlaylistAPI.getUserPlaylists()
        .then(this.populatePlaylists)
        .catch(this.setError);
    },
    methods: {
      populatePlaylists(playlists) {
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
      updatePlaylist(playlistId, newPlaylistName) {
        console.log('here');
        this.playlists[this.playlists.findIndex(p => p.id === playlistId)].name = newPlaylistName;
      }
    },
    components: {
      AsyncContent,
      PlaylistList,
      PlaylistMaker,
      Spinner,
      ErrorMessage
    }
  };
</script>

<style scoped lang="scss">
  @import '@/assets/sass/styles.scss';

  #create-message {
    font-family: $stylish-text;
  }

  #existing-message {
    font-family: $stylish-text;
  }

  #playlist-name {
    font-family: $stylish-text;
  }
</style>
