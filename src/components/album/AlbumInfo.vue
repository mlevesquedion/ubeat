<template>
  <GenericAsync :dataName="dataName" :dataSource="dataSource">
    <template slot-scope="{ data }">
      <AlbumInfoView :album="data" :playlists="playlists" />
    </template>
  </GenericAsync>
</template>

<script>
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
