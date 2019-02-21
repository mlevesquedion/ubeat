<template>
  <div class="container" >
    <div v-if="tracksState === RequestState.LOADING">
      <LargeSpinner/>
    </div>
    <div v-if="tracksState === RequestState.LOADED">
      <div class="track-gallery">
        <div :key="track.id" v-for="track in tracks" class="track">
          <div @mouseover="showByIndex = track.id" @mouseout="showByIndex = null">
            <p v-if="track.number !== 1" id="hLine"></p>
            <div class="track-line level is-mobile is-bordered" style="padding: 5px">
              <div class="level-left">
                <div>{{ track.number }}. {{ track.name }}</div>
              </div>
              <div class="level-right">
                <div class="field is-grouped has-addons">
                  <div v-show="showByIndex === track.id">
                    <p class="control">
                      <!--boutton "add" pour ajouter une chanson a la liste-->
                      <a id="add-track-list" class="has-text-light" style="text-decoration: none;" v-on:click="addTrackToList(track.id)">
            <span class="icon is-medium">
              <i class="fas fa-plus-circle"></i>
            </span>
                      </a>
                      <!--boutton "play" pour jouer une chanson-->
                      <a id="play-track" class="has-text-light" style="text-decoration: none;" v-on:click="playTrack(track.id)">
              <span class="icon is-medium" style="margin-right: 5px">
              <i class="fas fa-play-circle"></i>
            </span>
                      </a>
                    </p>
                  </div>
                  <span>{{convertMS(track.duration)}}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="tracksState === RequestState.ERROR">
      <ErrorMessage :message="error"/>
    </div>
    <footer class="footer has-text-centered">
      <a :href="getAlbumUrl">
        <img src="@/static/images/get_on_itunes.png" alt="iTunes">
      </a>
    </footer>
  </div>
</template>

<script>
  import { RequestState } from '@/api/constants';
  import { getAlbumTracks } from '@/api/album';
  import LargeSpinner from '@/components/utils/LargeSpinner';
  import ErrorMessage from '@/components/utils/ErrorMessage';

  export default {
    name: 'trackGallery',
    props: ['albumId'],
    mounted() {
      getAlbumTracks(this.albumId, this.populateAlbums, this.handleAlbumsError);
    },
    data() {
      return {
        RequestState,
        tracksState: RequestState.LOADING,
        tracks: [],
        showByIndex: null,
        error: 'Unable to fetch album tracks at this time.',
      };
    },
    methods: {
      populateAlbums(trackData) {
        if (trackData.length === 0) {
          this.tracksState = RequestState.ERROR;
          return;
        }
        this.tracks = trackData;
        this.tracksState = RequestState.LOADED;
      },
      handleAlbumsError(_err) {
        this.tracksState = RequestState.ERROR;
      },
      convertMS(duration) {
        this.minutes = (Math.floor((duration / 1000) % 60));
        this.duration = `${Math.floor(duration / 1000 / 60)}:${(this.minutes < 10) ? `0${this.minutes.toString()}` : `${this.minutes.toString()}`}`;
        return this.duration;
      },
      getAlbumUrl() {
        return `${this.tracks[0].url.split('album')[0]}album/${this.albumId}/?app=itunes`;
      }
    },
    components: {
      LargeSpinner,
      ErrorMessage
    },
  };
</script>

<style scoped lang="scss">
  @import '@/assets/sass/styles.scss';

  #hLine {
    border-bottom: 1px solid #3B3B3B;
  }
  .level {
    margin-bottom: 0;
  }

  .track-line:hover {
    background-color: $primary;
  }

  .footer {
    background: $background;
  }

  .footer img {
    min-width: 200px;
    width: 15%;
  }
</style>
