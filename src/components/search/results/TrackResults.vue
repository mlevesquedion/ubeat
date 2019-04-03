<template>
  <ResultsGroup resultType="Track" :results="tracks" icon="fa-music">
    <template slot-scope="{ data }">
      <TrackResult :track="data" />
    </template>
  </ResultsGroup>
</template>
<script>
import ResultsGroup from './ResultsGroup';
import TrackResult from './TrackResult';

export default {
  name: 'TrackResults',
  components: { ResultsGroup, TrackResult },
  props: ['tracks']
};
</script>
