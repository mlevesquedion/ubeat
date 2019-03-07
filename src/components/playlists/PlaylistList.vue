<template>
  <Async :dataSource="dataSource" :dataName="dataName">
    <template slot-scope="{data}">
      <PlaylistListView :playlists="data"/>
    </template>
  </Async>
</template>

<script>
  import PlaylistAPI from '../../api/playlists';
  import PlaylistListView from './PlaylistListView';
  import Async from '../utils/Async/Async';

  export default {
    name: 'PlaylistList',
    data() {
      return {
        dataSource: PlaylistAPI.getUserPlaylists(),
        dataName: 'user playlists'
      };
    },
    props: ['playlists'],
    components: {
      PlaylistListView,
      Async
    }
  };
</script>

<style scoped lang="scss">

</style>
