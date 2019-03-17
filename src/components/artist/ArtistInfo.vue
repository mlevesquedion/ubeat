<template>
  <GenericAsync :dataName="dataName" :dataSource="dataSource">
    <template slot-scope="{ data }">
      <ArtistInfoView :artist="data" />
    </template>
  </GenericAsync>
</template>

<script>
import ArtistAPI from '@/api/artist';
import GenericAsync from '@/components/utils/Async/GenericAsync';
import ArtistInfoView from './ArtistInfoView';

export default {
  name: 'artistInfo',
  props: ['artistId'],
  data() {
    return {
      dataSource: ArtistAPI.get(this.artistId),
      dataName: 'artist data'
    };
  },
  components: {
    GenericAsync,
    ArtistInfoView
  }
};
</script>

<style scoped lang="scss">
@import '@/assets/sass/styles.scss';

#itunes-link {
  margin-bottom: 1%;
}
</style>
