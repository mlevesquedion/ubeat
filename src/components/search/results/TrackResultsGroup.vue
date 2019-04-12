<template>
  <JukeboxWrapper>
    <template slot-scope="{ playingTrackId }">
      <ResultsGroup :results="tracks" icon="fa-music" resultType="Track">
        <template slot-scope="{ data }">
          <TrackResult
            :playingTrackId="playingTrackId"
            :playlists="playlists"
            :track="data"
          />
        </template>
      </ResultsGroup>
    </template>
  </JukeboxWrapper>
</template>

<script>
import ResultsGroup from './ResultsGroup';
import TrackResult from './TrackResult';
import JukeboxWrapper from '../../utils/Jukebox/JukeboxWrapper';

export default {
  name: 'TrackResults',
  props: ['tracks', 'playlists'],
  components: { ResultsGroup, TrackResult, JukeboxWrapper }
};
</script>
