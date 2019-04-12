<template>
  <GenericAsync
    :dataName="`${queryType} results`"
    :dataSource="dataSource"
    allowEmpty="true"
  >
    <template slot-scope="{ data }">
      <SpecificSearchResultsView
        :query="query"
        :query-type="queryType"
        :results="data"
      />
    </template>
  </GenericAsync>
</template>

<script>
import GenericAsync from '../utils/Async/GenericAsync';
import SpecificSearchResultsView from './SpecificSearchResultsView';

export default {
  name: 'SpecificSearchResults',
  components: { SpecificSearchResultsView, GenericAsync },
  props: ['queryType', 'query', 'dataSource']
};
</script>
