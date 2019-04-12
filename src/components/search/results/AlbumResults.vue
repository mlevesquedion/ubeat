<template>
  <section class="section">
    <div class="results-container">
      <fragment v-if="hasAlbums">
        <AlbumResult v-for="a in albums" :key="a.id" :album="a"></AlbumResult>
      </fragment>
      <div v-else>
        <NoResults></NoResults>
      </div>
    </div>
  </section>
</template>

<script>
import AlbumResult from './AlbumResult';
import NoResults from './NoResults';
import isEmpty from '../../../utils/isEmpty';

export default {
  name: 'AlbumResults',
  props: ['albums'],
  components: { AlbumResult, NoResults },
  computed: {
    hasAlbums() {
      return !isEmpty(this.albums);
    }
  }
};
</script>
