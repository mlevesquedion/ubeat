<template>
  <div class="container">
    <PlaylistMaker @create-playlist="createPlaylist" />
    <section class="section" v-if="requestState === RequestState.LOADING">
      <Spinner :size="SpinnerSize.LARGE" />
    </section>
    <div v-if="requestState === RequestState.LOADED">
      <PlaylistListView
        :playlists="playlists"
        @delete-playlist="deletePlaylist"
        @delete-track="deleteTrack"
      />
    </div>
    <section class="section" v-if="requestState === RequestState.ERROR">
      <ErrorMessage :message="error" />
    </section>
  </div>
</template>

<script>
import PlaylistMaker from './PlaylistMaker';
import PlaylistListView from './PlaylistList';
import Async from '../utils/Async/Async';
import PlaylistAPI from '../../api/playlists';
import RequestState from '../utils/Async/requestState';
import Spinner from '../utils/Spinner/Spinner';
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
  mounted() {
    PlaylistAPI.getUserPlaylists()
      .then(this.populatePlaylists)
      .catch(this.populateError);
  },
  methods: {
    populatePlaylists(playlists) {
      this.playlists = playlists;
      this.requestState = RequestState.LOADED;
    },
    populateError(_err) {
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
    }
  },
  components: {
    Async,
    PlaylistListView,
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
