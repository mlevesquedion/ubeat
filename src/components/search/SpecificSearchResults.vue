<template>
  <GenericAsync
    :dataSource="dataSource"
    :dataName="dataName"
    :allowEmpty="true"
  >
    <template slot-scope="{ data }">
      <SpecificSearchResultsHeader
        :query="query"
        :queryType="queryType"
        :results="data"
      />
      <slot :data="data"></slot>
    </template>
  </GenericAsync>
</template>

<script>
import SpecificSearchResultsHeader from './SpecificSearchResultsHeader';
import GenericAsync from '../utils/Async/GenericAsync';
import AlbumResults from './specific_results/AlbumResults';

export default {
  name: 'SpecificSearchResults',
  components: { GenericAsync, SpecificSearchResultsHeader, AlbumResults },
  props: ['query', 'queryType', 'dataSource'],
  data() {
    return {
      dataName: `${this.queryType} results`
    };
  }
};
</script>
