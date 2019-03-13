<template>
  <GenericAsync :dataSource="dataSource" :dataName="dataName">
    <template slot-scope="{ data }">
      <AlbumInfoView :album="data" :playlists="playlists" />
    </template>
  </GenericAsync>
</template>

<script>
import '@/assets/sass/styles.scss';
import AlbumAPI from '@/api/album';
import GenericAsync from '../utils/Async/GenericAsync';
import AlbumInfoView from './AlbumInfoView';

export default {
  name: 'AlbumInfo',
  props: ['albumId', 'playlists'],
  data() {
    return {
      dataSource: AlbumAPI.getAlbum(this.albumId),
      dataName: 'album data'
    };
  },
  components: {
    GenericAsync,
    AlbumInfoView
  }
};
</script>

<style scoped lang="scss"></style>
