<template>
  <SpecificSearchResults
    :dataSource="dataSource"
    :query="query"
    :queryType="queryType"
  >
    <template slot-scope="{ data }">
      <TrackResults :playlists="playlists" :tracks="data"></TrackResults>
    </template>
  </SpecificSearchResults>
</template>

<script>
import SearchAPI from '../../api/search';
import SpecificSearchResults from './SpecificSearchResults';
import PlaylistAPI from '../../api/playlist';
import TrackResults from './specific_results/TrackResults';

export default {
  name: 'TrackSearchResults',
  components: { SpecificSearchResults, TrackResults },
  data() {
    return {
      queryType: 'track',
      query: this.$route.params.query,
      dataSource: SearchAPI.tracks(this.$route.params.query),
      playlists: PlaylistAPI.getUserPlaylists()
    };
  }
};
</script>
