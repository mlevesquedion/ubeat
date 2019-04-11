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
  name: 'TrackSearchResults',
  components: { SpecificSearchResults },
  data() {
    return {
      queryType: 'track',
      query: this.$route.params.query,
      dataSource: SearchAPI.tracks(this.$route.params.query)
    };
  }
};
</script>
