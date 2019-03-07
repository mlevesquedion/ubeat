<template>
  <div class="container">
    <PlaylistMaker addPlaylist="addCreatedPlaylist">
    </PlaylistMaker>
    <Async :dataSource="dataSource" :dataName="dataName">
      <template slot-scope="{data}">
        <PlaylistList :playlists="data"/>
      </template>
    </Async>

  </div>
</template>

<script>
  import PlaylistAPI from '@/api/playlists';
  import Async from '../utils/Async/Async';
  import PlaylistList from './PlaylistList';
  import PlaylistMaker from './PlaylistMaker';

  export default {
    name: 'Playlists',
    data() {
      return {
        dataSource: PlaylistAPI.getUserPlaylists(),
        dataName: 'user playlists',
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
