<template>
  <Dropdown :isRight="isRight">
    <template slot="trigger">
      <slot>
        <button class="button is-primary is-small">
          <span class="icon is-medium">
            <i class="fas fa-plus-circle"></i>
          </span>
        </button>
      </slot>
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
