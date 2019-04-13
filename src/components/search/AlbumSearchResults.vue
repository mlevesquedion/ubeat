<template>
  <SpecificSearchResults
    :dataSource="dataSource"
    :query="query"
    :queryType="queryType"
  >
    <template slot-scope="{ data }">
      <AlbumResults :albums="data" :playlists="playlists"></AlbumResults>
    </template>
  </SpecificSearchResults>
</template>

<script>
import SearchAPI from '../../api/search';
import SpecificSearchResults from './SpecificSearchResults';
import AlbumResults from './specific_results/AlbumResults';
import PlaylistAPI from '../../api/playlist';

export default {
  name: 'AlbumSearchResults',
  components: { SpecificSearchResults, AlbumResults },
  data() {
    return {
      queryType: 'album',
      query: this.$route.params.query,
      dataSource: SearchAPI.albums(this.$route.params.query),
      playlists: PlaylistAPI.getUserPlaylists()
    };
  }
};
</script>
