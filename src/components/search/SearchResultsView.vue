<template>
  <div class="container">
    <section class="accordions section">
      <h1
        class="title is-primary is-size-1-desktop is-size-2-tablet is-size-4-mobile flex-centered is-mobile padded-bottom"
        id="title"
      >
        Results for "{{ query }}" ({{ count }})
      </h1>
      <ArtistResultsGroup :artists="searchresults.artists" />
      <AlbumResultsGroup
        :albums="searchresults.albums"
        :playlists="playlists"
      />
      <TrackResultsGroup
        :tracks="searchresults.tracks"
        :playlists="playlists"
      />
      <UserResultsGroup :users="searchresults.users" />
    </section>
  </div>
</template>

<script>
import ArtistResultsGroup from './grouped_results/ArtistResultsGroup';
import AlbumResultsGroup from './grouped_results/AlbumResultsGroup';
import TrackResultsGroup from './grouped_results/TrackResultsGroup';
import UserResultsGroup from './grouped_results/UserResultsGroup';

export default {
  name: 'SearchResultsView',
  components: {
    ArtistResultsGroup,
    AlbumResultsGroup,
    TrackResultsGroup,
    UserResultsGroup
  },
  props: ['searchresults', 'query', 'playlists'],
  computed: {
    count() {
      return (
        this.searchresults.artists.length +
        this.searchresults.albums.length +
        this.searchresults.tracks.length +
        this.searchresults.users.length
      );
    }
  }
};
</script>

<style lang="scss" scoped>
.padded-bottom {
  padding-bottom: 20px;
}

.container {
  max-width: 1000px;
}
</style>
