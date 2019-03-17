<template>
  <div class="dropdown" :class="{ 'is-active': isOpen, 'is-right': isRight }">
    <div @click="toggle()" class="dropdown-trigger">
      <slot></slot>
    </div>
    <div class="dropdown-menu my-menu" role="menu">
      <div class="dropdown-content">
        <div v-if="playlistsState === RequestState.LOADING">
          <SmallSpinner />
        </div>
        <div v-if="playlistsState === RequestState.LOADED">
          <PlaylistDropdownContent
            :playlists="playlistData"
            :onPlaylistClick="onPlaylistClick"
            @close="toggle"
          />
        </div>
        <div
          v-if="playlistsState === RequestState.ERROR"
          class="bumped-right has-text-light"
        >
          Could not fetch playlists!
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RequestState from '../../utils/Async/requestState';
import SmallSpinner from '../../utils/Spinner/SmallSpinner';
import PlaylistDropdownContent from './PlaylistDropdownContent';

export default {
  name: 'AsyncPlaylistDropdown',
  props: ['playlists', 'onPlaylistClick', 'isRight'],
  data() {
    return {
      RequestState,
      playlistsState: RequestState.LOADING,
      playlistData: [],
      isOpen: false
    };
  },
  mounted() {
    this.playlists
      .then(playlistData => {
        this.playlistData = playlistData;
        this.playlistsState = RequestState.LOADED;
      })
      .catch(_err => {
        this.playlistsState = RequestState.ERROR;
      });
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen;
    }
  },
  components: {
    PlaylistDropdownContent,
    SmallSpinner
  }
};
</script>

<style scoped lang="scss">
// Have to add this style to prevent the dropdown arrow from showing
.track-button {
  padding: 0 !important;
  margin: 0 !important;

  &::after {
    border: 0 solid transparent !important;
  }
}
</style>
