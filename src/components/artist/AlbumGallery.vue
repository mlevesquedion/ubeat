<template>
  <AsyncComponent :dataSource="dataSource" :errorMessage="errorMessage">
    <template slot-scope="{data}">
      <AlbumGalleryView :albums="data"/>
    </template>
  </AsyncComponent>
</template>

<script>
import AsyncComponent from '@/components/utils/AsyncComponent';
import { getArtistAlbums } from '@/api/artist';
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
    AlbumGalleryView,
    AsyncComponent
  }
};
</script>

<style scoped lang="scss">
</style>
