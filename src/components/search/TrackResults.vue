<template>
  <ResultsGroup
    resultType="Tracks"
    :results="tracks"
    icon="fa-music"
  ></ResultsGroup>
</template>
<script>
import ResultsGroup from './ResultsGroup';

export default {
  name: 'TrackResults',
  components: { ResultsGroup },
  props: ['tracks']
};
</script>
