<template>
  <Async :dataSource="dataSource" :dataName="dataName">
    <template slot-scope="{data}">
      <ArtistInfoView :artist="data"/>
    </template>
  </Async>
</template>

<script>
  import { getArtist } from '@/api/artist';
  import Async from '@/components/utils/Async/Async';
  import ArtistInfoView from './ArtistInfoView';

  export default {
    name: 'artistInfo',
    props: ['artistId'],
    data() {
      return {
        dataSource: getArtist(this.artistId),
        dataName: 'artist data'
      };
    },
    components: {
      Async,
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
