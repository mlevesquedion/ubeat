<template>
  <div>
    <hr class="horizontal-line" v-if="track.number !== 1" />
    <div
      class="level is-mobile is-bordered"
      :class="{ 'hover-highlight': highlightOnHover }"
    >
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
          <a class="has-text-light" v-if="isPlaying">
            <span class="icon is-medium">
              <i class="fas fa-stop-circle" @click="stop()"></i>
            </span>
          </a>
          <a class="has-text-light" v-else>
            <span class="icon is-medium">
              <i class="fas fa-play-circle" @click="play()"></i>
            </span>
          </a>
        </div>
        <span class="align-track">{{
          formatTrackDuration(track.duration)
        }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import trackDurationFormatter from '../../utils/trackDurationFormatter';
import PlaylistAPI from '../../api/playlist';
import AsyncPlaylistDropdown from '../playlists/dropdown/AsyncPlaylistDropdown';

export default {
  name: 'Track',
  props: ['track', 'playlists', 'isPlaying', 'highlightOnHover'],
  methods: {
    play() {
      this.$parent.$emit('play', this.track);
    },
    stop() {
      this.$parent.$emit('stop');
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
  components: { AsyncPlaylistDropdown }
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

.hover-highlight:hover {
  color: white;
  background-color: $primary;
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
