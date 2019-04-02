<template>
  <ResultsGroup
    resultType="Albums"
    :results="albums"
    icon="fa-list"
  ></ResultsGroup>
</template>
<script>
import ResultsGroup from './ResultsGroup';

export default {
  name: 'AlbumResults',
  components: { ResultsGroup },
  props: ['albums']
};
</script>
