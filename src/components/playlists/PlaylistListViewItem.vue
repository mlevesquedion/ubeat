<template>
  <Accordion>
    <template slot="header">
      <div class="level is-mobile">
        <div class="level-left">
          <span class="subtitle is-primary level-item">{{playlist.name}}</span>
        </div>
        <div class="level-right">
          <button class="button level-item is-danger"
                  :class="{'is-loading': isDeleting}"
                  @click.stop="deleteSelf()">
            <i class="fas fa-trash"></i>
          </button>
        </div>
      </div>
    </template>
    <template slot="body">
      <div class="accordion-body">
        <div class="accordion-content">
          <div v-if="noTracks">This playlist is empty!</div>
          <div class="level is-mobile" v-for="t in playlist.tracks">
            <div class="level-left">
              <div class="level-item">
                {{ t.name }}, {{ t.artist }}
              </div>
            </div>
            <div class="level-right">
              <div class="level-item">
                <button class="button level-item is-danger is-small"
                        :class="{'is-loading': isDeleting}"
                        @click="deleteTrack(t.id)">
                  <i class="fas fa-trash"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </Accordion>
</template>

<script>
  import PlaylistAPI from '../../api/playlists';
  import Accordion from '../utils/Accordion';

  export default {
    name: 'PlaylistListViewItem',
    props: ['playlist', 'onDelete'],
    data() {
      return {
        isDeleting: false
      };
    },
    computed: {
      noTracks() {
        return Object.entries(this.playlist.tracks).length === 0;
      }
    },
    methods: {
      deleteSelf() {
        PlaylistAPI.delete(this.playlist.id)
          .then(_ => this.onDelete(this.playlist.id));
      },
      deleteTrack(trackId) {
        PlaylistAPI.deleteTrack(this.playlist.id, trackId)
          .then(_ => this.removeTrack(trackId));
      }
    },
    components: { Accordion }
  };
</script>

<style scoped lang="scss">
</style>
