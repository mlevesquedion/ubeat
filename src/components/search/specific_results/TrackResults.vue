<template>
  <JukeboxWrapper>
    <template slot-scope="{ playingTrackId }">
      <SpecificResults :data="tracks">
        <template slot-scope="{ data }">
          <TrackResult
            :playingTrackId="playingTrackId"
            :playlists="playlists"
            :track="data"
          >
          </TrackResult>
        </template>
      </SpecificResults>
    </template>
  </JukeboxWrapper>
</template>

<script>
import TrackResult from '../individual_results/TrackResult';
import JukeboxWrapper from '../../utils/Jukebox/JukeboxWrapper';
import SpecificResults from './SpecificResults';

export default {
  name: 'TrackResults',
  props: ['tracks', 'playlists'],
  components: { SpecificResults, TrackResult, JukeboxWrapper }
};
</script>
