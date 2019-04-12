<template>
  <JukeboxWrapper>
    <template slot-scope="{ playingTrackId }">
      <section class="section">
        <div class="results-container">
          <fragment v-if="hasTracks">
            <TrackResult
              v-for="t in tracks"
              :key="t.id"
              :track="t"
              :playingTrackId="playingTrackId"
              :playlists="playlists"
            ></TrackResult>
          </fragment>
          <div v-else>
            <NoResults></NoResults>
          </div>
        </div>
      </section>
    </template>
  </JukeboxWrapper>
</template>

<script>
import TrackResult from './TrackResult';
import JukeboxWrapper from '../../utils/Jukebox/JukeboxWrapper';
import isEmpty from '../../../utils/isEmpty';
import NoResults from './NoResults';

export default {
  name: 'TrackResults',
  props: ['tracks', 'playlists'],
  components: { TrackResult, JukeboxWrapper, NoResults },
  computed: {
    hasTracks() {
      return !isEmpty(this.tracks);
    }
  }
};
</script>
