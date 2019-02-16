<template>
  <section class="section">
    <div v-if="albumsState === RequestState.LOADING">
      <h1>Hol' up, I'm loading some stuff</h1>
    </div>

    <div v-if="albumsState === RequestState.LOADED">
      <h1 class="title is-primary albums-title">Albums</h1>
      <div class="album-gallery">
        <div v-bind:key="album.id" v-for="album in albums" class="album">
          <a class="responsive-image-container" :href="album.url">
            <img class="responsive-image" :src="album.artworkUrl" alt="album.name">
          </a>
          <label class="album-name subtitle">{{ album.name }}</label>
        </div>
      </div>
    </div>

    <div v-if="albumsState === RequestState.ERROR">
      <h1>Sorry there, an error occurred. Refresh the page, maybe?</h1>
      <p>{{ error }}</p>
    </div>
  </section>
</template>

<script>
import { RequestState } from '@/api/constants';
import { getArtistAlbums } from '@/api/artist';

export default {
  name: 'albumGallery',
  mounted() {
    getArtistAlbums(this.artistId, this.populateAlbums, this.handleAlbumsError);
  },
  data() {
    return {
      RequestState,
      albumsState: RequestState.LOADING,
      artistId: this.$route.params.id,
      albums: [],
      error: ''
    };
  },
  methods: {
    populateAlbums(albumData) {
      if (albumData.length === 0) {
        this.albumsState = RequestState.ERROR;
        this.error = 'Albums could not be fetched.';
        return;
      }
      this.albums = albumData;
      this.albumsState = RequestState.LOADED;
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
.responsive-image-container {
  width: 25vw;
  height: 25vw;
  min-width: 250px;
  min-height: 250px;
  max-width: 350px;
  max-height: 350px;
  padding: 2% 2%;
}

.responsive-image {
  width: 100%;
  height: 100%;
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
  align-items: center;
  margin-bottom: 20px;
}

.albums-title {
  text-align: center;
}

.album-name {
  width: 200px;
  text-align: center;
  color: $text;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
</style>
