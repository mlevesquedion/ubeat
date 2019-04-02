<template>
  <ResultsGroup resultType="Albums" :results="albums" icon="fa-list">
    <template slot-scope="{ data }">
      <AlbumResult :album="data" />
    </template>
  </ResultsGroup>
</template>
<script>
import ResultsGroup from './ResultsGroup';
import AlbumResult from './AlbumResult';

export default {
  name: 'AlbumResults',
  components: { ResultsGroup, AlbumResult },
  props: ['albums']
};
</script>
