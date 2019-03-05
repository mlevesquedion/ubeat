<template>
  <div class="container">
    <div v-if="albumState === RequestState.LOADING">
      <LargeSpinner/>
    </div>
    <div v-if="albumState === RequestState.LOADED">
      <section class="section">
        <div class="columns ">
          <div class="column is-narrow ">
            <figure class="media-left image">
              <img class="img-responsive" :src="album.artworkUrl" alt="album.name">
            </figure>
          </div>
          <div class="column is-three-quarters">
            <p
              class="title is-size-3 has-text-light"
            >{{ album.name }}</p>
            <div class="subtitle has-text-grey-lighter">
              <div class="is-size-5">
                <a>
                  <router-link :to="{name: 'Artist', params: {id: album.artId}}" id="artist-name">
                    <span>{{ album.artist }}</span>
                  </router-link>
                </a>
              </div>
              <div class="is-size-6 has-text-grey-lighter">
              <p>{{ album.genre }} ({{year}})</p>
              <p>{{ album.nbTracks }} songs</p>
              </div>
              <div style="padding-top: 10px">
              <div id=add-album class="tag  is-medium button" v-on:click="addAblbumToList( album.id )">
                <i class="fas fa-plus-circle"></i><span style="padding-left:5px">Album</span>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <div v-if="albumState === RequestState.ERROR">
      <ErrorMessage :message="error"/>
    </div>
  </div>
</template>
<script>
  import '@/assets/sass/styles.scss';
  import { RequestState } from '@/api/constants';
  import { getAlbum } from '@/api/album';
  import LargeSpinner from '@/components/utils/LargeSpinner';
  import ErrorMessage from '@/components/utils/ErrorMessage';

  export default {
    name: 'albumInfo',
    props: ['albumId'],
    mounted() {
      getAlbum(this.albumId, this.populateAlbum, this.handleAlbumError);
    },
    data() {
      return {
        RequestState,
        albumState: RequestState.LOADING,
        year: '',
        durationMS: '',
        error: 'Unable to fetch album data at this time.',
      };
    },
    methods: {
      populateAlbum(albumData) {
        if (!albumData) {
          this.albumState = RequestState.ERROR;
          return;
        }
        this.album = albumData;
        this.year = this.album.date.split('-')[0];
        this.albumState = RequestState.LOADED;
      },
      handleAlbumError(_err) {
        this.albumState = RequestState.ERROR;
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
  .img-responsive {
    display: block;
    min-width: 180px;
    max-width: 200px;
    height: auto;
  }
  #add-album:hover {
      color: white;
      background-color: $primary;
    }
  #artist-name{
    color: $primary;
  }
</style>
