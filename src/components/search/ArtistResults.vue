<template>
  <ResultsGroup
    resultType="Artists"
    :results="artists"
    icon="fa-star"
  ></ResultsGroup>
</template>
<script>
import ResultsGroup from './ResultsGroup';

export default {
  name: 'ArtistResults',
  components: { ResultsGroup },
  props: ['artists']
};
</script>
