<template>
  <ResultsGroup resultType="Track" :results="tracks" icon="fa-music">
    <template slot-scope="{ data }">
      <TrackResult :playlists="playlists" :track="data" />
    </template>
  </ResultsGroup>
</template>

<script>
import ResultsGroup from './ResultsGroup';
import TrackResult from './TrackResult';

// TODO: Add Jukebox in here, try to minimize duplication

export default {
  name: 'TrackResults',
  props: ['tracks', 'playlists'],
  components: { ResultsGroup, TrackResult }
};
</script>
