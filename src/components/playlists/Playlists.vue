<template>
  <div class="container">
    <PlaylistMaker addPlaylist="addCreatedPlaylist">
    </PlaylistMaker>
    <PlaylistList>

    </PlaylistList>
  </div>
</template>

<script>
  import Async from '../utils/Async/Async';
  import PlaylistList from './PlaylistList';
  import PlaylistMaker from './PlaylistMaker';

  export default {
    name: 'Playlists',
    data() {
      return {
        playlists: []
      };
    },
    methods: {
      addCreatedPlaylist(playlist) {
        this.playlists.push(playlist);
      }
    },
    components: {
      Async,
      PlaylistList,
      PlaylistMaker
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
