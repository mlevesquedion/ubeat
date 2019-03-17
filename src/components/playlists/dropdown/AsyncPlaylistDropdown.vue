<template>
  <Dropdown :isRight="isRight">
    <template slot="trigger">
      <slot></slot>
    </template>
    <template slot="content">
      <div v-if="playlistsState === RequestState.LOADING">
        <SmallSpinner />
      </div>
      <div v-if="playlistsState === RequestState.LOADED">
        <PlaylistDropdownContent
          :onPlaylistClick="onPlaylistClick"
          :playlists="playlistData"
        />
      </div>
      <div
        class="bumped-right has-text-light"
        v-if="playlistsState === RequestState.ERROR"
      >
        Could not fetch playlists!
      </div>
    </template>
  </Dropdown>
</template>

<script>
import RequestState from '../../utils/Async/requestState';
import SmallSpinner from '../../utils/Spinner/SmallSpinner';
import PlaylistDropdownContent from './PlaylistDropdownContent';
import Dropdown from '../../utils/Dropdown';

export default {
  name: 'AsyncPlaylistDropdown',
  props: ['playlists', 'onPlaylistClick', 'isRight'],
  data() {
    return {
      RequestState,
      playlistsState: RequestState.LOADING,
      playlistData: []
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
  components: {
    Dropdown,
    PlaylistDropdownContent,
    SmallSpinner
  }
};
</script>

<style scoped lang="scss"></style>
