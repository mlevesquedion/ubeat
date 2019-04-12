<template>
  <SpecificSearchResults
    :dataSource="dataSource"
    :queryType="queryType"
    :query="query"
  >
    <template slot-scope="{ data }">
      <AlbumResults :albums="data"></AlbumResults>
    </template>
  </SpecificSearchResults>
</template>

<script>
import SearchAPI from '../../api/search';
import SpecificSearchResults from './SpecificSearchResults';
import AlbumResults from './specific_results/AlbumResults';

export default {
  name: 'AlbumSearchResults',
  components: { SpecificSearchResults, AlbumResults },
  data() {
    return {
      queryType: 'album',
      query: this.$route.params.query,
      dataSource: SearchAPI.albums(this.$route.params.query)
    };
  }
};
</script>
