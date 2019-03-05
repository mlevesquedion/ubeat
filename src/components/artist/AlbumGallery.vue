<template>
  <section class="section">
    <div v-if="albumsState === RequestState.LOADING">
      <LargeSpinner/>
    </div>

    <div v-if="albumsState === RequestState.LOADED">
      <h1 class="title is-primary albums-title">Albums</h1>
      <div class="album-gallery">
        <div :key="album.id" v-for="album in albums" class="album">
          <router-link
            class="responsive-image-container"
            :to="{name: 'Album', params: { id: album.id }}"
          >
            <img class="responsive-image" :src="album.artworkUrl" alt="album.name">
          </router-link>
          <label class="album-name subtitle">{{ album.name }}</label>
        </div>
      </div>
    </div>

    <div v-if="albumsState === RequestState.ERROR">
      <ErrorMessage :message="error"/>
    </div>
  </section>
</template>

<script>
import { RequestState } from '@/api/constants';
import { getArtistAlbums } from '@/api/artist';
import LargeSpinner from '@/components/utils/LargeSpinner';
import ErrorMessage from '@/components/utils/ErrorMessage';

export default {
  name: 'albumGallery',
  props: ['artistId'],
  mounted() {
    getArtistAlbums(this.artistId, this.populateAlbums, this.handleAlbumsError);
  },
  data() {
    return {
      RequestState,
      albumsState: RequestState.LOADING,
      albums: [],
      error: 'Unable to fetch artist albums at this time.'
    };
  },
  methods: {
    populateAlbums(albumData) {
      if (albumData.length === 0) {
        this.albumsState = RequestState.ERROR;
        return;
      }
      this.albums = albumData;
      this.albumsState = RequestState.LOADED;
    },
    handleAlbumsError(_err) {
      this.albumsState = RequestState.ERROR;
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
