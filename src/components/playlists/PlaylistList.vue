<template>
  <section class="section">
    <h1 class="title has-text-light">Playlists ({{ count }})</h1>
    <div class="accordions" v-if="hasPlaylists">
      <Playlist
        v-for="(p, pi) in sortedPlaylists"
        :playlist="p"
        :index="pi"
        :key="p.id"
        :playlists="playlists"
        :isReadOnly="isReadOnly"
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
  props: ['playlists', 'isReadOnly'],
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
