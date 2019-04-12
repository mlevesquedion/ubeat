<template>
  <section class="section">
    <div class="results-container">
      <fragment v-if="hasArtists">
        <ArtistResult
          v-for="a in artists"
          :key="a.id"
          :artist="a"
        ></ArtistResult>
      </fragment>
      <div v-else>
        <NoResults></NoResults>
      </div>
    </div>
  </section>
</template>

<script>
import ArtistResult from './ArtistResult';
import isEmpty from '../../../utils/isEmpty';
import NoResults from './NoResults';

export default {
  name: 'ArtistResults',
  props: ['artists'],
  components: { ArtistResult, NoResults },
  computed: {
    hasArtists() {
      return !isEmpty(this.artists);
    }
  }
};
</script>
