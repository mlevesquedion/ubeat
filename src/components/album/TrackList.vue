<template>
  <Async :dataSource="dataSource" :dataName="dataName">
    <template slot-scope="{data}">
      <TrackListView :tracks="data"/>
    </template>
  </Async>
</template>

<script>
  import albumAPI from '@/api/album';
  import TrackListView from './TrackListView';
  import Async from '../utils/Async/Async';

  export default {
    name: 'TrackList',
    props: ['albumId'],
    data() {
      return {
        dataSource:
          albumAPI.getAlbumTracks(this.albumId),
        dataName: 'album tracks'
      };
    },
    components: {
      Async,
      TrackListView
    }
  };
</script>

<style scoped lang="scss">
</style>
