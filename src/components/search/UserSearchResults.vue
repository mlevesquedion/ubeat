<template>
  <SpecificSearchResults
    :queryType="queryType"
    :query="query"
    :dataSource="dataSource"
  />
</template>

<script>
import SearchAPI from '../../api/search';
import SpecificSearchResults from './SpecificSearchResults';

export default {
  name: 'UserSearchResults',
  components: { SpecificSearchResults },
  data() {
    return {
      queryType: 'user',
      query: this.$route.params.query,
      dataSource: SearchAPI.users(this.$route.params.query)
    };
  }
};
</script>
