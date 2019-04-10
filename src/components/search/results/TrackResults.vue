<template>
  <Jukebox>
    <template slot-scope="{ playingTrackId }">
      <ResultsGroup resultType="Track" :results="tracks" icon="fa-music">
        <template slot-scope="{ data }">
          <TrackResult
            :playlists="playlists"
            :track="data"
            :playingTrackId="playingTrackId"
          />
        </template>
      </ResultsGroup>
    </template>
  </Jukebox>
</template>

<script>
import ResultsGroup from './ResultsGroup';
import TrackResult from './TrackResult';
import Jukebox from '../../utils/Jukebox/Jukebox';

export default {
  name: 'TrackResults',
  props: ['tracks', 'playlists'],
  components: { ResultsGroup, TrackResult, Jukebox }
};
</script>
