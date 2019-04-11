<template>
  <ResultsGroup :results="artists" icon="fa-star" resultType="Artist">
    <template slot-scope="{ data }">
      <ArtistResult :artist="data" />
    </template>
  </ResultsGroup>
</template>
<script>
import ResultsGroup from './ResultsGroup';
import ArtistResult from './ArtistResult';

export default {
  name: 'ArtistResults',
  components: { ResultsGroup, ArtistResult },
  props: ['artists']
};
</script>
