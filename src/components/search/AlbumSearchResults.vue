<template>
  <GenericAsync
    :dataSource="dataSource"
    dataName="album results"
    :allowEmpty="true"
  >
    <template slot-scope="{ data }">
      <SpecificSearchResultsHeader
        :query="query"
        :queryType="queryType"
        :results="data"
      />
      <AlbumResults :albums="data"></AlbumResults>
    </template>
  </GenericAsync>
</template>

<script>
import SearchAPI from '../../api/search';
import SpecificSearchResultsHeader from './SpecificSearchResultsHeader';
import GenericAsync from '../utils/Async/GenericAsync';
import AlbumResults from './results/AlbumResults';

export default {
  name: 'AlbumSearchResults',
  components: { GenericAsync, SpecificSearchResultsHeader, AlbumResults },
  data() {
    return {
      queryType: 'album',
      query: this.$route.params.query,
      dataSource: SearchAPI.albums(this.$route.params.query)
    };
  }
};
</script>
