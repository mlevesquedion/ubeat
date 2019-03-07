<template>
  <div class="accordion is-active">
    <div class="accordion-header toggle">
      <div class="level">
        <div class="level-left">
          <span class="level-item">{{playlist.name}}</span>
        </div>
        <div class="level-right">
          <button class="button level-item is-danger delete"
                  :class="{'is-loading': isDeleting}"
                  @click="deleteSelf()"></button>
        </div>
      </div>
    </div>
    <div class="accordion-body">
      <div class="accordion-content">
        <ul>
          <li v-for="t in playlist.tracks">
            {{ t.name }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import PlaylistAPI from '../../api/playlists';

  export default {
    name: 'PlaylistListViewItem',
    props: ['playlist', 'onDelete'],
    data() {
      return {
        isDeleting: false
      };
    },
    methods: {
      deleteSelf() {
        PlaylistAPI.delete(this.playlist.id)
          .then(_ => this.onDelete(this.playlist.id));
      }
    }
  };
</script>

<style scoped>

</style>
