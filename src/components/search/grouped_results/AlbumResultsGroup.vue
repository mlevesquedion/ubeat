<template>
  <ResultsGroup
    :results="albums"
    class="album-results"
    icon="fa-compact-disc"
    resultType="Album"
  >
    <template slot-scope="{ data }">
      <AlbumResult :album="data" :playlists="playlists" />
    </template>
  </ResultsGroup>
</template>
<script>
import ResultsGroup from './ResultsGroup';
import AlbumResult from '../individual_results/AlbumResult';

export default {
  name: 'AlbumResults',
  components: { ResultsGroup, AlbumResult },
  props: ['albums', 'playlists']
};
</script>
