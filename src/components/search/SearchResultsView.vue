<template>
  <div class="container">
    <section class="accordions section">
      <h1
        class="title is-primary is-size-1-desktop is-size-2-tablet is-size-4-mobile flex-centered is-mobile padded-bottom"
        id="title"
      >
        Results for "{{ query }}" ({{ count }})
      </h1>
      <ArtistResults :artists="searchresults.artists" />
      <AlbumResults :albums="searchresults.albums" />
      <TrackResults :playlists="playlists" :tracks="searchresults.tracks" />
      <UserResults :users="searchresults.users" />
    </section>
  </div>
</template>

<script>
import ArtistResults from './results/ArtistResults';
import AlbumResults from './results/AlbumResults';
import TrackResults from './results/TrackResults';
import UserResults from './results/UserResults';

export default {
  name: 'SearchResultsView',
  components: { ArtistResults, AlbumResults, TrackResults, UserResults },
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
