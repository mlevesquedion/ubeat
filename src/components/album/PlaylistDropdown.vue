<template>
  <div class="dropdown is-hoverable" :class="{ 'is-right': isRight }">
    <div class="dropdown-trigger">
      <slot></slot>
    </div>
    <div class="dropdown-menu" role="menu">
      <div class="dropdown-content album-hoverable">
        <div v-if="playlistsState === RequestState.LOADING">
          <Spinner :size="SpinnerSize.SMALL"></Spinner>
        </div>
        <div v-if="playlistsState === RequestState.LOADED && hasPlaylists">
          <a
            class="dropdown-item album-hoverable-item"
            v-for="p in playlistData"
            :key="p.id"
            @click="onPlaylistClick(p)"
          >
            {{ p.name }}
          </a>
        </div>
        <div
          v-if="playlistsState === RequestState.LOADED && !hasPlaylists"
          class="bumped-right"
        >
          No playlists!
        </div>
        <div v-if="playlistsState === RequestState.ERROR" class="bumped-right">
          > Could not fetch playlists!
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import isEmpty from '../../utils/isEmpty';
import RequestState from '../utils/Async/requestState';
import SpinnerSize from '../utils/Spinner/spinnerSize';
import Spinner from '../utils/Spinner/Spinner';

export default {
  name: 'Dropdown',
  props: ['playlists', 'onPlaylistClick', 'isRight'],
  data() {
    return {
      SpinnerSize,
      RequestState,
      playlistsState: RequestState.LOADING,
      playlistData: []
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
  components: {
    Spinner
  }
};
</script>

<style scoped lang="scss"></style>
