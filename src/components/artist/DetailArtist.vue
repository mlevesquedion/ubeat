<template>
  <GenericAsync :dataName="dataName" :dataSource="dataSource">
    <template slot-scope="{ data }">
      <DetailArtistView :artist="data" />
    </template>
  </GenericAsync>
</template>

<script>
import ArtistAPI from '@/api/artist';
import GenericAsync from '@/components/utils/Async/GenericAsync';
import DetailArtistView from './DetailArtistView';

export default {
  name: 'detailArtist',
  props: ['artistName'],
  data() {
    return {
      dataSource: ArtistAPI.getDetails(this.artistName),
      dataName: 'artist detail data'
    };
  },
  components: {
    GenericAsync,
    DetailArtistView
  }
};
</script>

<style scoped lang="scss">
@import '@/assets/sass/styles.scss';

#itunes-link {
  margin-bottom: 1%;
}
</style>
