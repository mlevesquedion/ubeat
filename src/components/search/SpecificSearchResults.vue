<template>
  <GenericAsync
    :dataName="`${queryType} results`"
    :dataSource="dataSource"
    allowEmpty="true"
  >
    <template slot-scope="{ data }">
      <SpecificSearchResultsView
        :results="data"
        :query="query"
        :query-type="queryType"
      />
    </template>
  </GenericAsync>
</template>

<script>
import GenericAsync from '../utils/Async/GenericAsync';
import SpecificSearchResultsView from './SpecificSearchResultsView';

export default {
  name: 'ArtistResults',
  components: { SpecificSearchResultsView, GenericAsync },
  props: ['queryType', 'query', 'dataSource']
};
</script>

<style scoped></style>
