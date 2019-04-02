<template>
  <section class="accordions section">
    <h1
      id="title"
      class="title is-primary is-size-1-desktop is-size-2-tablet is-size-4-mobile flex-centered is-mobile padded-bottom"
    >
      Results for "{{ query }}" ({{ count }})
    </h1>
    <ArtistResults :artists="searchresults.artists" />
    <AlbumResults :albums="searchresults.albums" />
    <TrackResults :tracks="searchresults.tracks" />
    <UserResults :users="searchresults.users" />
  </section>
</template>

<script>
import ArtistResults from './results/ArtistResults';
import AlbumResults from './results/AlbumResults';
import TrackResults from './results/TrackResults';
import UserResults from './results/UserResults';

export default {
  name: 'SearchResultsView',
  components: { ArtistResults, AlbumResults, TrackResults, UserResults },
  props: ['searchresults', 'query'],
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

<style scoped lang="scss">
.padded-bottom {
  padding-bottom: 20px;
}
</style>
