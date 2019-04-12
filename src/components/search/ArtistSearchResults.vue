<template>
  <SpecificSearchResults
    :dataSource="dataSource"
    :query="query"
    :queryType="queryType"
  />
</template>

<script>
import SearchAPI from '../../api/search';
import SpecificSearchResults from './SpecificSearchResults';

export default {
  name: 'ArtistSearchResults',
  components: { SpecificSearchResults },
  data() {
    return {
      queryType: 'artist',
      query: this.$route.params.query,
      dataSource: SearchAPI.artists(this.$route.params.query)
    };
  }
};
</script>
