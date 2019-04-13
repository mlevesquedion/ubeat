<template>
  <SpecificSearchResults
    :dataSource="dataSource"
    :queryType="queryType"
    :query="query"
  >
    <template slot-scope="{ data }">
      <ArtistResults :artists="data"></ArtistResults>
    </template>
  </SpecificSearchResults>
</template>

<script>
import SearchAPI from '../../api/search';
import SpecificSearchResults from './SpecificSearchResults';
import ArtistResults from './specific_results/ArtistResults';

export default {
  name: 'ArtistSearchResults',
  components: { SpecificSearchResults, ArtistResults },
  data() {
    return {
      queryType: 'artist',
      query: this.$route.params.query,
      dataSource: SearchAPI.artists(this.$route.params.query)
    };
  }
};
</script>
