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
import ArtistResults from './results/ArtistResults';
import AlbumResults from './results/AlbumResults';
import TrackResults from './results/TrackResults';
import UserResults from './results/UserResults';

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
