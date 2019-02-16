<template>
  <section class="section">
    <div v-if="artistState === RequestState.LOADING">
      <LargeSpinner/>
    </div>

    <div v-if="artistState === RequestState.LOADED">
      <section class="container has-text-centered">
        <p class="label is-size-1">{{ artist.name }}</p>
        <p class="label is-size-3">{{ artist.genre }}</p>
        <a id="itunes-link" :href="artist.url">
          <img
            src="https://linkmaker.itunes.apple.com/en-us/badge-lrg.svg?releaseDate=&kind=artist&bubble=apple_music"
          >
        </a>
      </section>
    </div>

    <div v-if="artistState === RequestState.ERROR">
      <ErrorMessage :message="error"/>
    </div>
  </section>
</template>

<script>
import '@/assets/sass/styles.scss';
import { RequestState } from '@/api/constants';
import { getArtist } from '@/api/artist';
import LargeSpinner from '@/components/utils/LargeSpinner';
import ErrorMessage from '@/components/utils/ErrorMessage';

export default {
  name: 'artistInfo',
  props: ['artistId'],
  mounted() {
    getArtist(this.artistId, this.populateArtist, this.handleArtistError);
  },
  data() {
    return {
      RequestState,
      artistState: RequestState.LOADING,
      artist: {},
      error: 'Unable to fetch artist data at this time.'
    };
  },
  methods: {
    populateArtist(artistData) {
      if (!artistData) {
        this.artistState = RequestState.ERROR;
        return;
      }
      this.artist = artistData;
      this.artistState = RequestState.LOADED;
    },
    handleArtistError(_err) {
      this.artistState = RequestState.ERROR;
    }
  },
  components: {
    LargeSpinner,
    ErrorMessage
  }
};
</script>

<style scoped lang="scss">
@import '@/assets/sass/styles.scss';

#itunes-link {
  margin-bottom: 1%;
}
</style>
