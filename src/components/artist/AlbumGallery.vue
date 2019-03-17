<template>
  <GenericAsync :dataName="dataName" :dataSource="dataSource">
    <template slot-scope="{ data }">
      <AlbumGalleryView :albums="data" />
    </template>
  </GenericAsync>
</template>

<script>
import GenericAsync from '@/components/utils/Async/GenericAsync';
import AlbumGalleryView from './AlbumGalleryView';
import ArtistAPI from '../../api/artist';

export default {
  name: 'albumGallery',
  props: ['artistId'],
  data() {
    return {
      dataSource: ArtistAPI.getAlbums(this.artistId),
      dataName: 'artist albums'
    };
  },
  components: {
    GenericAsync,
    AlbumGalleryView
  }
};
</script>

<style scoped lang="scss"></style>
