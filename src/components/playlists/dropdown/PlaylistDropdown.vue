<template>
  <Dropdown :isRight="isRight">
    <template slot="trigger">
      <slot></slot>
    </template>
    <template slot="content">
      <PlaylistDropdownContent
        :onPlaylistClick="onPlaylistClick"
        :playlists="playlists"
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
  components: { PlaylistDropdownContent, Dropdown }
};
</script>

<style scoped></style>
