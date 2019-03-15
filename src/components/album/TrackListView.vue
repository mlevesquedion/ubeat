<template>
  <section class="section">
    <div class="track-list">
      <div :key="track.id" v-for="track in tracks" class="track">
        <hr v-if="track.number !== 1" class="horizontal-line" />
        <div
          class="track-line level is-mobile is-bordered"
          style="padding: 5px"
        >
          <div style="width: calc(100% - 140px)">
            <div class="level-left item-title">
              <div class="clip-ellipsis">
                {{ track.number }}. {{ track.name }}
              </div>
            </div>
          </div>
          <div class="level-right truncate">
            <div class="button-group bumped-left">
              <PlaylistDropdown
                :playlists="playlists"
                :on-playlist-click="addTrackToPlayList(track)"
                :is-right="true"
              >
                <a class="navbar-link has-text-light track-button">
                  <span class="icon is-medium">
                    <i class="fas fa-plus-circle"></i>
                  </span>
                </a>
              </PlaylistDropdown>
              <template v-if="track.id === playingTrackId">
                <a class="has-text-light track-button">
                  <span class="icon is-medium">
                    <i
                      class="fas fa-pause-circle"
                      v-on:click="pauseTrack()"
                    ></i>
                  </span>
                </a>
                <a class="has-text-light track-button">
                  <span class="icon is-medium">
                    <i class="fas fa-stop-circle" v-on:click="stopTrack()"></i>
                  </span>
                </a>
              </template>
              <a class="has-text-light track-button" v-else>
                <span class="icon is-medium">
                  <i
                    class="fas fa-play-circle"
                    v-on:click="playTrack(track)"
                  ></i>
                </span>
              </a>
            </div>
            <span>{{ formatTrackDuration(track.duration) }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="footer has-text-centered">
      <a :href="this.tracks[0].url">
        <img
          class="img-responsive"
          src="static/images/get_on_itunes.png"
          alt="iTunes"
        />
      </a>
    </div>
  </section>
</template>

<script>
import Jukebox from '@/utils/jukebox';
import PlaylistDropdown from './PlaylistDropdown';
import PlaylistAPI from '../../api/playlist';
import trackDurationFormatter from '../../formatting/trackDurationFormatter';

export default {
  name: 'TrackListView',
  props: ['tracks', 'playlists'],
  data() {
    return {
      jukebox: new Jukebox(this.stopTrack)
    };
  },
  computed: {
    playingTrackId() {
      return this.jukebox.playingTrackId();
    }
  },
  beforeDestroy() {
    this.stopTrack();
  },
  methods: {
    playTrack(url) {
      this.jukebox.play(url);
    },
    pauseTrack() {
      this.jukebox.pause();
    },
    stopTrack() {
      this.jukebox.stop();
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
            this.$toated.show(
              `Could not add ${track.name} to playlist ${playlist.name}.`,
              { type: 'ubeat-error' }
            )
          );
      };
    }
  },
  components: {
    PlaylistDropdown
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
}

.track-line:hover {
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

.img-responsive {
  min-width: 180px;
  max-width: 150px;
  height: auto;
}

.button-group {
  display: flex;
  justify-content: flex-start;
  width: 96px;
}

.clip-ellipsis {
  width: 90%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: inline-block;
}
</style>
