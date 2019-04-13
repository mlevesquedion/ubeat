<template>
  <SpecificSearchResults
    :dataSource="dataSource"
    :query="query"
    :queryType="queryType"
  >
    <template slot-scope="{ data }">
      <UserResults :users="data"></UserResults>
    </template>
  </SpecificSearchResults>
</template>

<script>
import SearchAPI from '../../api/search';
import SpecificSearchResults from './SpecificSearchResults';
import UserResults from './specific_results/UserResults';

export default {
  name: 'UserSearchResults',
  components: { SpecificSearchResults, UserResults },
  data() {
    return {
      queryType: 'user',
      query: this.$route.params.query,
      dataSource: SearchAPI.users(this.$route.params.query)
    };
  }
};
</script>
