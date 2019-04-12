<template>
  <JukeboxWrapper>
    <template slot-scope="{ playingTrackId }">
      <SpecificResults :data="tracks">
        <template slot-scope="{ data }">
          <TrackResult
            :track="data"
            :playlists="playlists"
            :playingTrackId="playingTrackId"
          >
          </TrackResult>
        </template>
      </SpecificResults>
    </template>
  </JukeboxWrapper>
</template>

<script>
import TrackResult from './TrackResult';
import JukeboxWrapper from '../../utils/Jukebox/JukeboxWrapper';
import SpecificResults from './SpecificResults';

export default {
  name: 'TrackResults',
  props: ['tracks', 'playlists'],
  components: { SpecificResults, TrackResult, JukeboxWrapper }
};
</script>
