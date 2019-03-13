<template>
  <GenericAsync :dataSource="dataSource" :dataName="dataName">
    <template slot-scope="{ data }">
      <TrackListView :tracks="data" :playlists="playlists" />
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

<style scoped lang="scss"></style>
