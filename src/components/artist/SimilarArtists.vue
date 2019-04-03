<template>
  <GenericAsync :dataName="dataName" :dataSource="dataSource">
    <template slot-scope="{ data }">
      <SimilarArtistsView :artist="data" />
    </template>
  </GenericAsync>
</template>

<script>
import ArtistAPI from '@/api/artist';
import GenericAsync from '@/components/utils/Async/GenericAsync';
import SimilarArtistsView from './SimilarArtistsView';

export default {
  name: 'SimilarArtists',
  components: { GenericAsync, SimilarArtistsView },
  props: ['artistId'],
  data() {
    return {
      dataSource: ArtistAPI.get(this.artistId),
      dataName: 'similar artists data'
    };
  }
};
</script>

<style scoped lang="scss"></style>
