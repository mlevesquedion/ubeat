<template>
  <Async :dataSource="dataSource" :errorMessage="errorMessage">
    <template slot-scope="{data}">
      <AlbumGalleryView :albums="data"/>
    </template>
  </Async>
</template>

<script>
import { getArtistAlbums } from '@/api/artist';
import Async from '@/components/utils/Async/Async';
import AlbumGalleryView from './AlbumGalleryView';

export default {
  name: 'albumGallery',
  props: ['artistId'],
  data() {
    return {
      dataSource: (onSuccess, onError) =>
        getArtistAlbums(this.artistId, onSuccess, onError),
      errorMessage: 'Unable to fetch artist albums at this time.'
    };
  },
  components: {
    Async,
    AlbumGalleryView
  }
};
</script>

<style scoped lang="scss">
</style>
