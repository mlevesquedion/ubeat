<template>
  <GenericAsync :dataName="dataName" :dataSource="dataSource">
    <template slot-scope="{ data }">
      <Gallery :elements="data" linkTo="Artist" title="Top artists" />
    </template>
  </GenericAsync>
</template>

<script>
import Gallery from '../utils/Gallery';
import GenericAsync from '../utils/Async/GenericAsync';
import LastFmAPI from '../../api/lastFM';

export default {
  name: 'TopArtists',
  components: { GenericAsync, Gallery },
  data() {
    return {
      dataName: 'top artists',
      dataSource: LastFmAPI.getTopArtists()
    };
  }
};
</script>

<style scoped></style>
