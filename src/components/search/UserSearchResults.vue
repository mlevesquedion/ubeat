<template>
  <GenericAsync
    :dataSource="dataSource"
    dataName="album results"
    allowEmpty="true"
  >
    <template slot-scope="{ data }">
      <SpecificSearchResultsHeader
        :query="query"
        :queryType="queryType"
        :results="data"
      />
      <UserResults :users="data"></UserResults>
    </template>
  </GenericAsync>
</template>

<script>
import SearchAPI from '../../api/search';
import UserResults from './results/UserResults';
import SpecificSearchResultsHeader from './SpecificSearchResultsHeader';
import GenericAsync from '../utils/Async/GenericAsync';

export default {
  name: 'UserSearchResults',
  components: { GenericAsync, SpecificSearchResultsHeader, UserResults },
  data() {
    return {
      queryType: 'user',
      query: this.$route.params.query,
      dataSource: SearchAPI.users(this.$route.params.query)
    };
  }
};
</script>
