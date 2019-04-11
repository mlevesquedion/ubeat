<template>
  <GenericAsync
    :allowEmpty="true"
    :dataName="dataName"
    :dataSource="dataSource"
  >
    <template slot-scope="{ data }">
      <SearchResultsView
        :playlists="playlists"
        :query="query"
        :searchresults="data"
      />
    </template>
  </GenericAsync>
</template>

<script>
import GenericAsync from '@/components/utils/Async/GenericAsync';
import SearchResultsView from './SearchResultsView';
import SearchAPI from '../../api/search';
import PlaylistAPI from '../../api/playlist';

export default {
  name: 'SearchResults',
  data() {
    return {
      dataSource: SearchAPI.global(this.$route.params.query),
      dataName: 'search results',
      playlists: PlaylistAPI.getUserPlaylists()
    };
  },
  computed: {
    query() {
      return this.$route.params.query;
    }
  },
  components: { SearchResultsView, GenericAsync }
};
</script>

<style lang="scss" scoped>
@import '@/assets/sass/styles.scss';

.accordions {
  padding-left: 2em;
  padding-top: 2em;
}

.div {
  padding-bottom: 5px;
}
</style>
