<template>
  <div v-if="isLoading">
    <SmallSpinner />
  </div>
  <div v-else-if="isError">
    An error has occurred.
  </div>
  <div v-else-if="hasPlaylists">
    <a
      :key="p.id"
      @click="playlistClicked(p)"
      class="dropdown-item"
      v-for="p in playlists"
    >
      <div class="is-clipped">{{ p.name }}</div>
      <SmallSpinner v-if="pending.includes(p.id)" />
    </a>
  </div>
  <div class="bumped-right has-text-light" v-else>
    No playlists!
  </div>
</template>

<script>
import SmallSpinner from '../../utils/Spinner/SmallSpinner';
import isEmpty from '../../../utils/isEmpty';

export default {
  name: 'PlaylistDropdownContent',
  props: ['playlists', 'onPlaylistClick'],
  data() {
    return {
      pending: []
    };
  },
  computed: {
    isLoading() {
      return this.playlists === 'loading';
    },
    isError() {
      return this.playlists === 'error';
    },
    hasPlaylists() {
      return !isEmpty(this.playlists);
    }
  },
  methods: {
    playlistClicked(p) {
      this.pending.push(p.id);
      this.onPlaylistClick(p, () => this.playlistResolved(p.id));
      this.$parent.$emit('close');
    },
    playlistResolved(id) {
      this.pending = this.pending.filter(id_ => id_ !== id);
    }
  },
  components: { SmallSpinner }
};
</script>

<style lang="scss" scoped>
.is-clipped {
  min-width: 100px;
  max-width: 200px;
  width: 40vw;
}
</style>
