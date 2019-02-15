<template>
  <section class="section">
    <div v-if="artistState === RequestState.LOADING">
      <h1>Hol' up, I'm loading some stuff</h1>
    </div>

    <div v-if="artistState === RequestState.LOADED">
      <section class="container has-text-centered">
        <p class="label is-large">{{ artist['artistName'] }}</p>
        <p class="label is-medium">{{ artist['primaryGenreName'] }}</p>
        <a id="itunes-link" v-bind:href="artist['artistLinkUrl']">
          <img
            src="https://linkmaker.itunes.apple.com/en-us/badge-lrg.svg?releaseDate=&kind=artist&bubble=apple_music"
          >
        </a>
      </section>
      <div class="album-gallery">
        <div class="album responsive-image">
          <div class="album-image">
            <a href="https://itunes.apple.com/ca/album/ultu-ulla/1242876068">
              <img
                src="https://pbs.twimg.com/profile_images/870509754350567424/soPP-3fE_400x400.jpg"
                alt="ultu-ulla"
              >
            </a>
          </div>
          <div class="album-title">
            <label class="label subtitle">Ultu Ulla</label>
          </div>
        </div>
        <div class="album responsive-image">
          <div class="album-image">
            <a href="https://itunes.apple.com/ca/album/lugal-ki-en/1298845366">
              <img
                src="https://images.shazam.com/coverart/t147914943-b1298846284_s400.jpg"
                alt="lugal-ki-en"
              >
            </a>
          </div>
          <div class="album-title">
            <label class="label subtitle" subtitle>Lugal Ki En</label>
          </div>
        </div>
        <div class="album responsive-image">
          <div class="album-image">
            <a href="https://itunes.apple.com/ca/album/dingir/1298832976">
              <img src="https://img.cdandlp.com/2018/04/imgL/119126211.jpg" alt="dingir">
            </a>
          </div>
          <div class="album-title">
            <label class="label subtitle">Dingir</label>
          </div>
        </div>
        <div class="album responsive-image">
          <div class="album-image">
            <a href="https://itunes.apple.com/ca/album/embryonic-anomaly/1298828991">
              <img
                src="http://www.ledotakas.net/image/cache/data/R/RINGS-OF-SATURN-Embryonic-Anomaly-LP-400x400.jpg"
                alt="embryonic-anomaly"
              >
            </a>
          </div>
          <div class="album-title">
            <label class="label subtitle">Embryonic Anomaly</label>
          </div>
        </div>
      </div>
    </div>

    <div v-if="artistState === RequestState.ERROR">
      <h1>Sorry there, an error occurred. Refresh the page, maybe?</h1>
      <p>{{ error }}</p>
    </div>
  </section>
</template>

<script>
import { RequestState } from '@/api/constants';
import { getArtist, getArtistAlbums } from '@/api/artist';

export default {
  name: 'artist',
  mounted() {
    getArtist(this.artistId, this.populateArtist, this.handleArtistError);
    getArtistAlbums(this.artistId, this.populateAlbums, this.handleAlbumsError);
  },
  data() {
    return {
      RequestState,
      artistState: RequestState.LOADING,
      albumsState: RequestState.LOADING,
      artistId: this.$route.params.id,
      artist: {},
      albums: [],
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
    populateAlbums(albumData) {
      if (!albumData) {
        this.albumState = RequestState.ERROR;
        this.error = 'Albums could not be fetched.';
        return;
      }
      this.albums = albumData;
      this.albumsState = RequestState.LOADED;
    },
    handleArtistError(err) {
      this.artistState = RequestState.ERROR;
      this.error = err;
    },
    handleAlbumsError(err) {
      this.albumsState = RequestState.ERROR;
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

.label {
  text-align: center;
  color: $text;
}

.responsive-image {
  width: 25%;
  height: 25%;
  min-width: 250px;
  min-height: 250px;
  max-width: 350px;
  max-height: 350px;
  padding: 2% 2%;
}

.album-gallery {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.album {
  display: flex;
  flex-direction: column;
  align-items: space-around;
}
</style>
