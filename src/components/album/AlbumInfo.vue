<template>
  <Async :dataSource="dataSource" :dataName="dataName">
    <template slot-scope="{data}">
      <AlbumInfoView :album="data"/>
    </template>
  </Async>
</template>

<script>
  import '@/assets/sass/styles.scss';
  import AlbumAPI from '@/api/album';
  import Async from '../utils/Async/Async';
  import AlbumInfoView from './AlbumInfoView';

  export default {
    name: 'AlbumInfo',
    props: ['albumId'],
    data() {
      return {
        dataSource: AlbumAPI.getAlbum(this.albumId),
        dataName: 'album data'
      };
    },
    components: {
      Async,
      AlbumInfoView
    }
  };
</script>

<style scoped lang="scss">
</style>
