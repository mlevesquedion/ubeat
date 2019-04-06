<template>
  <section class="section">
    <div :key="track.id" class="track" v-for="track in tracks">
      <hr class="horizontal-line" v-if="track.number !== 1" />
      <div class="level is-mobile is-bordered">
        <div class="level-left">
          <div class="is-clipped">{{ track.number }}. {{ track.name }}</div>
        </div>
        <div class="level-right">
          <div class="button-group bumped-left">
            <AsyncPlaylistDropdown
              :isRight="true"
              :onPlaylistClick="addTrackToPlayList(track)"
              :playlists="playlists"
            >
              <!-- Using .navbar-link here for styling -->
              <a class="navbar-link has-text-light">
                <span class="icon is-medium">
                  <i class="fas fa-plus-circle"></i>
                </span>
              </a>
            </AsyncPlaylistDropdown>
            <a class="has-text-light" v-if="track.id === playingTrackId">
              <span class="icon is-medium">
                <i class="fas fa-stop-circle" v-on:click="stopTrack()"></i>
              </span>
            </a>
            <a class="has-text-light" v-else>
              <span class="icon is-medium">
                <i class="fas fa-play-circle" v-on:click="playTrack(track)"></i>
              </span>
            </a>
          </div>
          <span class="align-track">{{
            formatTrackDuration(track.duration)
          }}</span>
        </div>
      </div>
    </div>
    <div class="footer has-text-centered">
      <a :href="albumUrl">
        <img
          alt="Get it on iTunes Store"
          class="responsive-image"
          src="static/images/get_on_itunes.png"
        />
      </a>
    </div>
  </section>
</template>

<script>
import Jukebox from '@/utils/jukebox';
import AsyncPlaylistDropdown from '../playlists/dropdown/AsyncPlaylistDropdown';
import PlaylistAPI from '../../api/playlist';
import trackDurationFormatter from '../../utils/trackDurationFormatter';

export default {
  name: 'TrackListView',
  props: ['tracks', 'playlists'],
  data() {
    return {
      jukebox: new Jukebox(this.stopTrack, this.onPlaybackError)
    };
  },
  computed: {
    playingTrackId() {
      return this.jukebox.playingTrackId();
    },
    albumUrl() {
      return this.tracks[0].url;
    }
  },
  beforeDestroy() {
    this.stopTrack();
  },
  methods: {
    playTrack(url) {
      this.jukebox.play(url);
    },
    stopTrack() {
      this.jukebox.stop();
    },
    onPlaybackError(track) {
      this.$toasted.show(`Could not play track ${track.name}!`, {
        type: 'ubeat-error'
      });
    },
    formatTrackDuration(seconds) {
      return trackDurationFormatter.format(seconds);
    },
    addTrackToPlayList(track) {
      return (playlist, onTrackAdded) => {
        PlaylistAPI.addTrackToPlaylist(track, playlist.id)
          .then(_ =>
            this.$toasted.show(
              `Track ${track.name} was successfully added to playlist ${
                playlist.name
              }!`,
              { type: 'ubeat-success' }
            )
          )
          .then(onTrackAdded)
          .catch(_ =>
            this.$toasted.show(
              `Could not add ${track.name} to playlist ${playlist.name}.`,
              { type: 'ubeat-error' }
            )
          );
      };
    }
  },
  components: {
    AsyncPlaylistDropdown
  }
};
</script>

<style scoped lang="scss">
@import '@/assets/sass/styles.scss';

.horizontal-line {
  margin: 0;
  border-bottom: 1px solid #3b3b3b;
}

.level {
  margin-bottom: 0;
  padding: 5px;
}

.level:hover {
  color: white;
  background-color: $primary;
}

.footer {
  background: $background;
}

.footer img {
  min-width: 150px;
  width: 15%;
}

.responsive-image {
  min-width: 180px;
  max-width: 150px;
  height: auto;
}

.button-group {
  display: flex;
  justify-content: flex-start;
  width: 64px;
}

.is-clipped {
  min-width: 100px;
  width: 50vw;
}

.section {
  padding-left: 0;
  padding-right: 0;
}

.align-track {
  margin-right: 25px;
  width: 10px;
}

// Have to add this style to prevent the dropdown arrow fromBackend showing
.navbar-link {
  padding: 0 !important;
  margin: 0 !important;

  &::after {
    border: 0 solid transparent !important;
  }
}
</style>
