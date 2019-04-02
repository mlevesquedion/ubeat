<template>
  <section class="accordions section">
    <h1
      id="title"
      class="title is-primary is-size-1-desktop is-size-2-tablet is-size-4-mobile flex-centered is-mobile padded-bottom"
    >
      Results for "{{ query }}"
    </h1>
    <ArtistResults :artists="searchresults.artists" />
    <AlbumResults :albums="searchresults.albums" />
    <TrackResults :tracks="searchresults.tracks" />
    <UserResults :users="[]" />
  </section>
</template>

<script>
import ArtistResults from './ArtistResults';
import AlbumResults from './AlbumResults';
import TrackResults from './TrackResults';
import UserResults from './UserResults';

export default {
  name: 'SearchResultsView',
  components: { ArtistResults, AlbumResults, TrackResults, UserResults },
  props: ['searchresults', 'query']
};
</script>

<style scoped lang="scss">
.padded-bottom {
  padding-bottom: 20px;
}
</style>
