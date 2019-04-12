<template>
  <GenericAsync
    :dataSource="dataSource"
    dataName="artist results"
    allowEmpty="true"
  >
    <template slot-scope="{ data }">
      <SpecificSearchResultsHeader
        :query="query"
        :queryType="queryType"
        :results="data"
      />
      <TrackResults :tracks="data" :playlists="playlists"></TrackResults>
    </template>
  </GenericAsync>
</template>

<script>
import SearchAPI from '../../api/search';
import GenericAsync from '../utils/Async/GenericAsync';
import SpecificSearchResultsHeader from './SpecificSearchResultsHeader';
import TrackResults from './results/TrackResults';
import PlaylistAPI from '../../api/playlist';

export default {
  name: 'TrackSearchResults',
  components: { GenericAsync, SpecificSearchResultsHeader, TrackResults },
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
