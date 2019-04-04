<template>
  <GenericAsync :dataName="dataName" :dataSource="dataSource">
    <template slot-scope="{ data }">
      <Gallery title="Albums" linkTo="Album" :elements="data" />
    </template>
  </GenericAsync>
</template>

<script>
import GenericAsync from '@/components/utils/Async/GenericAsync';
import ArtistAPI from '../../api/artist';
import Gallery from './Gallery';

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
    Gallery
  }
};
</script>

<style scoped lang="scss"></style>
