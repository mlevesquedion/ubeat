<template>
  <section class="section">
    <h1 class="title has-text-light">Playlists ({{ count }})</h1>
    <div class="accordions" v-if="hasPlaylists">
      <Playlist
        :index="pi"
        :isStatic="isStatic"
        :key="p.id"
        :playlist="p"
        :userPlaylists="userPlaylists"
        v-for="(p, pi) in sortedPlaylists"
      />
    </div>
    <div v-else>You have no playlists!</div>
  </section>
</template>

<script>
import isEmpty from '@/utils/isEmpty';
import Playlist from './Playlist';

export default {
  name: 'PlaylistList',
  props: ['playlists', 'userPlaylists', 'isStatic'],
  computed: {
    count() {
      return this.playlists.length;
    },
    hasPlaylists() {
      return !isEmpty(this.playlists);
    },
    sortedPlaylists() {
      const compare = (a, b) =>
        a.name.toLowerCase().localeCompare(b.name.toLowerCase());
      return this.playlists.sort(compare);
    }
  },
  components: { Playlist }
};
</script>

<style lang="scss" scoped>
.section {
  padding-top: 0;
}
</style>
