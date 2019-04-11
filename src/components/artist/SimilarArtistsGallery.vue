<template>
  <GenericAsync :dataName="dataName" :dataSource="dataSource">
    <template slot-scope="{ data }">
      <Gallery :elements="data" linkTo="Artist" title="Similar Artists" />
    </template>
  </GenericAsync>
</template>

<script>
import GenericAsync from '@/components/utils/Async/GenericAsync';
import LastFmAPI from '../../api/lastFM';
import Gallery from '../utils/Gallery';

export default {
  name: 'SimilarArtistsGallery',
  components: { GenericAsync, Gallery },
  props: ['artistName'],
  data() {
    return {
      dataSource: LastFmAPI.getSimilarArtists(this.artistName),
      dataName: 'similar artists'
    };
  }
};
</script>

<style lang="scss" scoped></style>
