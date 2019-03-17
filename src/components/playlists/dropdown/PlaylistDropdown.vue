<template>
  <Dropdown :isRight="isRight">
    <template slot="trigger">
      <slot></slot>
    </template>
    <template slot="content">
      <PlaylistDropdownContent
        :playlists="playlists"
        :onPlaylistClick="onPlaylistClick"
        @close="toggle"
      />
    </template>
  </Dropdown>
</template>

<script>
import PlaylistDropdownContent from './PlaylistDropdownContent';
import Dropdown from '../../utils/Dropdown';

export default {
  name: 'PlaylistDropdown',
  props: ['playlists', 'isRight', 'onPlaylistClick'],
  data() {
    return {
      isOpen: false
    };
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen;
    }
  },
  components: { PlaylistDropdownContent, Dropdown }
};
</script>

<style scoped></style>
