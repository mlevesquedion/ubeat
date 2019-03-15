<template>
  <div class="dropdown" :class="{ 'is-active': isOpen, 'is-right': isRight }">
    <div @click="toggle()" class="dropdown-trigger">
      <slot></slot>
    </div>
    <div class="dropdown-menu my-menu" role="menu">
      <div class="dropdown-content album-hoverable">
        <div v-if="playlistsState === RequestState.LOADING">
          <SmallSpinner />
        </div>
        <div v-if="playlistsState === RequestState.LOADED && hasPlaylists">
          <a
            class="dropdown-item"
            v-for="p in playlistData"
            :key="p.id"
            @click="playlistClicked(p)"
          >
            <div class="is-clipped">{{ p.name }}</div>
            <SmallSpinner v-if="pending.includes(p.id)" />
          </a>
        </div>
        <div
          v-if="playlistsState === RequestState.LOADED && !hasPlaylists"
          class="bumped-right has-text-light"
        >
          No playlists!
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
import isEmpty from '../../utils/isEmpty';
import RequestState from '../utils/Async/requestState';
import SmallSpinner from '../utils/Spinner/SmallSpinner';

export default {
  name: 'PlaylistDropdown',
  props: ['playlists', 'onPlaylistClick', 'isRight'],
  data() {
    return {
      RequestState,
      playlistsState: RequestState.LOADING,
      playlistData: [],
      pending: [],
      isOpen: false
    };
  },
  computed: {
    hasPlaylists() {
      return !isEmpty(this.playlistData);
    }
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
    playlistClicked(p) {
      this.pending.push(p.id);
      this.onPlaylistClick(p, () => this.playlistResolved(p.id));
    },
    playlistResolved(id) {
      this.pending = this.pending.filter(id_ => id_ !== id);
    },
    toggle() {
      this.isOpen = !this.isOpen;
    }
  },
  components: {
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

.dropdown-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.is-clipped {
  min-width: 100px;
  width: 40vw;
}
</style>
