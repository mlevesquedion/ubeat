<template>
  <Async :dataSource="dataSource" :dataName="dataName">
    <template slot-scope="{data}">
      <TrackListView :tracks="data"/>
    </template>
  </Async>
</template>

<script>
  import { getAlbumTracks } from '@/api/album';
  import TrackListView from './TrackListView';
  import Async from '../utils/Async/Async';

  export default {
    name: 'trackGallery',
    props: ['albumId'],
    data() {
      return {
        dataSource: (onSuccess, onError) =>
          getAlbumTracks(this.albumId, onSuccess, onError),
        dataName: 'album data'
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
