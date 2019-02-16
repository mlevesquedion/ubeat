<template>
  <section class="section">
    <div v-if="artistState === RequestState.LOADING">
      <h1>Hol' up, I'm loading some stuff</h1>
    </div>

    <div v-if="artistState === RequestState.LOADED">
      <section class="container has-text-centered">
        <p class="label is-size-1">{{ artist.name }}</p>
        <p class="label is-size-3">{{ artist.genre }}</p>
        <a id="itunes-link" v-bind:href="artist.url">
          <img
            src="https://linkmaker.itunes.apple.com/en-us/badge-lrg.svg?releaseDate=&kind=artist&bubble=apple_music"
          >
        </a>
      </section>
    </div>

    <div v-if="artistState === RequestState.ERROR">
      <h1>Sorry there, an error occurred. Refresh the page, maybe?</h1>
      <p>{{ error }}</p>
    </div>
  </section>
</template>

<script>
import { RequestState } from '@/api/constants';
import { getArtist } from '@/api/artist';

export default {
  name: 'artistInfo',
  mounted() {
    getArtist(this.artistId, this.populateArtist, this.handleArtistError);
  },
  data() {
    return {
      RequestState,
      artistState: RequestState.LOADING,
      artistId: this.$route.params.id,
      artist: {},
      error: ''
    };
  },
  methods: {
    populateArtist(artistData) {
      if (!artistData) {
        this.artistState = RequestState.ERROR;
        this.error = `Artist with id ${this.artistId} does not exist.`;
        return;
      }
      this.artist = artistData;
      this.artistState = RequestState.LOADED;
    },
    handleArtistError(err) {
      this.artistState = RequestState.ERROR;
      this.error = err;
    }
  }
};
</script>

<style scoped lang="scss">
@import '@/assets/sass/styles.scss';

#itunes-link {
  margin-bottom: 1%;
}
</style>
