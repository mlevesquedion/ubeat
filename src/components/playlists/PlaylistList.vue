<template>
  <section class="section">
    <h1 class="title has-text-light">Playlists</h1>
    <div v-if="hasPlaylists" class="accordions">
      <Accordion v-for="(p, pi) in playlists" :key="p.id">
        <template slot="header">
          <div class="level is-mobile">
            <div class="level-left">
              <span class="subtitle is-primary level-item">{{p.name}}</span>
            </div>
            <div class="level-right">
              <button class="button level-item is-danger" @click.stop="deletePlaylist(p.id, pi)">
                <i class="fas fa-trash"></i>
              </button>
            </div>
          </div>
        </template>
        <template slot="body">
          <div v-if="empty(p)">This playlist is empty!</div>
          <div class="level is-mobile" v-for="(t, ti) in p.tracks" :key="t.id">
            <div class="level-left">
              <div class="level-item">{{ t.name }}, {{ t.artist }}</div>
            </div>
            <div class="level-right">
              <div class="level-item">
                <button
                  class="button level-item is-danger is-small"
                  @click="deleteTrack(p.id, pi, t.id, ti)"
                >
                  <i class="fas fa-trash"></i>
                </button>
              </div>
            </div>
          </div>
        </template>
      </Accordion>
    </div>
    <div v-else>You have no playlists!</div>
  </section>
</template>

<script>
import isEmpty from '@/utils/isEmpty';
import Accordion from '../utils/Accordion';
import PlaylistAPI from '../../api/playlists';

export default {
  name: 'PlaylistList',
  props: ['playlists'],
  computed: {
    hasPlaylists() {
      return !isEmpty(this.playlists);
    }
  },
  methods: {
    empty(playlist) {
      return isEmpty(playlist.tracks);
    },
    deletePlaylist(playlistId, playlistIndex) {
      PlaylistAPI.delete(playlistId).then(_ =>
        this.$emit('delete-playlist', playlistIndex)
      );
    },
    deleteTrack(playlistId, playlistIndex, trackId, trackIndex) {
      PlaylistAPI.deleteTrack(playlistId, trackId).then(_ =>
        this.$emit('delete-track', playlistIndex, trackIndex)
      );
    }
  },
  components: { Accordion }
};
</script>

<style scoped lang="scss">
.section {
  padding-top: 0;
}
</style>
