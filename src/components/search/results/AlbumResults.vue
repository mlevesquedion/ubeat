<template>
  <ResultsGroup
    class="album-results"
    resultType="Album"
    :results="albums"
    icon="fa-compact-disc"
  >
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
<style scoped lang="scss">
.album-results {
  display: flex;
  justify-content: flex-start;
}
</style>
