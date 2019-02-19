<template>
  <AsyncComponent :dataSource="dataSource" :errorMessage="errorMessage">
    <template slot-scope="{data}">
      <ArtistInfoView :artist="data"/>
    </template>
  </AsyncComponent>
</template>

<script>
import { getArtist } from '@/api/artist';
import AsyncComponent from '@/components/utils/AsyncComponent';
import ArtistInfoView from './ArtistInfoView';

export default {
  name: 'artistInfo',
  props: ['artistId'],
  data() {
    return {
      dataSource: (onSuccess, onError) =>
        getArtist(this.artistId, onSuccess, onError),
      errorMessage: 'Unable to fetch artist data at this time.'
    };
  },
  components: {
    AsyncComponent,
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
