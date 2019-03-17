<template>
  <div class="dropdown" :class="{ 'is-active': isOpen, 'is-right': isRight }">
    <div @click="toggle()" class="dropdown-trigger">
      <slot></slot>
    </div>
    <div class="dropdown-menu my-menu" role="menu">
      <div class="dropdown-content">
        <PlaylistDropdownContent
          :playlists="playlists"
          :onPlaylistClick="onPlaylistClick"
          @close="toggle"
        />
      </div>
    </div>
  </div>
</template>

<script>
import PlaylistDropdownContent from './PlaylistDropdownContent';

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
  components: { PlaylistDropdownContent }
};
</script>

<style scoped></style>
