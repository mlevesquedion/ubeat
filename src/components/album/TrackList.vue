<template>
  <GenericAsync :dataName="dataName" :dataSource="dataSource">
    <template slot-scope="{ data }">
      <TrackListView :playlists="playlists" :tracks="data" />
    </template>
  </GenericAsync>
</template>

<script>
import albumAPI from '@/api/album';
import TrackListView from './TrackListView';
import GenericAsync from '../utils/Async/GenericAsync';

export default {
  name: 'TrackList',
  props: ['albumId', 'playlists'],
  data() {
    return {
      dataSource: albumAPI.getAlbumTracks(this.albumId),
      dataName: 'album tracks'
    };
  },
  components: {
    GenericAsync,
    TrackListView
  }
};
</script>

<style lang="scss" scoped></style>
