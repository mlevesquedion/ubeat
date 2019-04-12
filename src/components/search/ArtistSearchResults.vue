<template>
  <GenericAsync
    :dataSource="dataSource"
    dataName="artist results"
    :allowEmpty="true"
  >
    <template slot-scope="{ data }">
      <SpecificSearchResultsHeader
        :query="query"
        :queryType="queryType"
        :results="data"
      />
      <ArtistResults :artists="data"></ArtistResults>
    </template>
  </GenericAsync>
</template>

<script>
import SearchAPI from '../../api/search';
import GenericAsync from '../utils/Async/GenericAsync';
import SpecificSearchResultsHeader from './SpecificSearchResultsHeader';
import ArtistResults from './results/ArtistResults';

export default {
  name: 'ArtistSearchResults',
  components: { GenericAsync, SpecificSearchResultsHeader, ArtistResults },
  data() {
    return {
      queryType: 'artist',
      query: this.$route.params.query,
      dataSource: SearchAPI.artists(this.$route.params.query)
    };
  }
};
</script>
