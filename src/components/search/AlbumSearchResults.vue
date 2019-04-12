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
  name: 'AlbumSearchResults',
  components: { SpecificSearchResults },
  data() {
    return {
      queryType: 'album',
      query: this.$route.params.query,
      dataSource: SearchAPI.albums(this.$route.params.query)
    };
  }
};
</script>
