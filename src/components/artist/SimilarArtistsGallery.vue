<template>
  <GenericAsync :dataName="dataName" :dataSource="dataSource">
    <template slot-scope="{ data }">
      <Gallery
        title="Similar Artists"
        linkTo="Artist Results"
        :linkParamsMaker="linkParamsMaker"
        :elements="data"
      />
    </template>
  </GenericAsync>
</template>

<script>
import GenericAsync from '@/components/utils/Async/GenericAsync';
import ArtistDetailsAPI from '../../api/artistDetails';
import Gallery from '../utils/Gallery';

export default {
  name: 'SimilarArtists',
  components: { GenericAsync, Gallery },
  props: ['artistName'],
  data() {
    return {
      dataSource: ArtistDetailsAPI.similarArtists(this.artistName),
      dataName: 'similar artists',
      linkParamsMaker: artist => ({
        query: artist.name
      })
    };
  }
};
</script>

<style scoped lang="scss"></style>
