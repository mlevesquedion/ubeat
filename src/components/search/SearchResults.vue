<template>
  <GenericAsync
    :dataName="dataName"
    :dataSource="dataSource"
    :allowEmpty="true"
  >
    <template slot-scope="{ data }">
      <SearchResultsView :searchresults="data" :query="query" />
    </template>
  </GenericAsync>
</template>

<script>
import GenericAsync from '@/components/utils/Async/GenericAsync';
import SearchResultsView from './SearchResultsView';
import SearchAPI from '../../api/search';

export default {
  name: 'SearchResults',
  data() {
    return {
      dataSource: SearchAPI.global(this.$route.params.query),
      dataName: 'search results'
    };
  },
  computed: {
    query() {
      return this.$route.params.query;
    }
  },
  components: { SearchResultsView, GenericAsync }
};
</script>

<style scoped lang="scss">
@import '@/assets/sass/styles.scss';

.accordions {
  padding-left: 2em;
  padding-top: 2em;
}

.div {
  padding-bottom: 5px;
}
</style>
