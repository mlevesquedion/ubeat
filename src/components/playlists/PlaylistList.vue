<template>
  <Async :dataSource="dataSource" :dataName="dataName">
    <template slot-scope="{data}">
      <PlaylistTracksView :playlist="data"/>
    </template>
  </Async>
</template>

<script>
  import Async from '../utils/Async/Async';
  import PlaylistTracksView from './PlaylistTracksView';

  export default {
    name: 'PlaylistTracks',
    components: {
      Async,
      PlaylistTracksView
    }
  };
</script>

<style scoped lang="scss">

</style>
