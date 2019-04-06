<template>
  <GenericAsync :dataName="dataName" :dataSource="dataSource">
    <template slot-scope="{ data }">
      <Gallery title="Similar Artists" linkTo="Artist" :elements="data" />
    </template>
  </GenericAsync>
</template>

<script>
import GenericAsync from '@/components/utils/Async/GenericAsync';
import LastFmAPI from '../../api/lastFM';
import Gallery from '../utils/Gallery';

export default {
  name: 'SimilarArtists',
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

<style scoped lang="scss"></style>
