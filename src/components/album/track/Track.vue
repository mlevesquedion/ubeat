<template>
  <div>
    <hr class="horizontal-line" v-if="showSeparators && track.number !== 1" />
    <div
      :class="{ 'hover-highlight': highlightOnHover }"
      class="level is-mobile is-bordered"
    >
      <div class="level-left">
        <slot>
          <div class="is-clipped">{{ track.number }}. {{ track.name }}</div>
        </slot>
      </div>
      <div class="level-right">
        <div class="button-group level-item bumped-left">
          <AsyncPlaylistDropdown
            :isRight="true"
            :onPlaylistClick="addTrackToPlayList(track)"
            :playlists="playlists"
          />
          <a class="has-text-light" v-if="playingTrackId === track.id">
            <span class="icon is-medium">
              <i @click="stop()" class="fas fa-stop-circle"></i>
            </span>
          </a>
          <a class="has-text-light" v-else>
            <span class="icon is-medium">
              <i @click="play()" class="fas fa-play-circle"></i>
            </span>
          </a>
        </div>
        <span class="level-item align-track bumped-right">{{
          formatTrackDuration(track.duration)
        }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import trackDurationFormatter from '../../../utils/trackDurationFormatter';
import PlaylistAPI from '../../../api/playlist';
import AsyncPlaylistDropdown from '../../playlists/dropdown/AsyncPlaylistDropdown';

export default {
  name: 'Track',
  props: [
    'track',
    'playlists',
    'highlightOnHover',
    'showSeparators',
    'playingTrackId'
  ],
  methods: {
    play() {
      this.$root.$emit('play-track', this.track);
    },
    stop() {
      this.$root.$emit('stop-track');
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

<style lang="scss" scoped>
@import '@/assets/sass/styles.scss';

.horizontal-line {
  margin: 0;
  border-bottom: 1px solid #3b3b3b;
}

.level {
  margin-bottom: 0;
  padding: 5px;
  width: 100%;
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

// Have to add this style to prevent the dropdown arrow from showing
.navbar-link {
  padding: 0 !important;
  margin: 0 !important;

  &::after {
    border: 0 solid transparent !important;
  }
}
</style>
