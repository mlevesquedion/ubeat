<template>
  <div class="container">


    <section id="sub-menu" class="section">
      <div class="columns">
        <div class="column is-one-third is-3-fullhd">

          <button @click="createPlaylist" id="create-message"
                  class="is-primary is-size-4-desktop is-size-5-tablet is-size-6-mobile"> Create a new
            playlist
          </button>
          <span> <p id="existing-message" class="is-primary is-size-4-desktop is-size-5-tablet is-size-6-mobile">
              Your playlists :
            </p>

            </span>
        </div>
      </div>
    </section>

    <Async :dataSource="dataSource" :dataName="dataName">
      <template slot-scope="{data}">
        <PlaylistView :playlist="data"/>
        <PlaylistTracks :playlist="data"/>
      </template>
    </Async>

  </div>
</template>

<script>
  import { getPlaylist, getUserPlaylists, postPlaylist } from '@/api/playlist';
  import Async from '../utils/Async/Async';
  import PlaylistView from './PlaylistView';
  import PlaylistTracks from './PlaylistTracks';

  export default {
    name: 'playlist',
    data() {
      return {
        dataSource:
          getPlaylist(this.playlistId),
        dataName: 'that playlist',
        playlistId: '5c8130f8d6f63a0004c2653a',
      }, {
        dataSource:
          getUserPlaylists(this.ownerEmail),
        dataName: 'user playlists',
        ownerEmail: 'utilisateur@gmail.com'
      };
    },
    methods: {
      createPlaylist() {
        postPlaylist(data => alert(data), err => alert(err));
      }
    },
    components: {
      Async,
      PlaylistView,
      PlaylistTracks
    }
  };
</script>

<style scoped lang="scss">
  @import '@/assets/sass/styles.scss';

  #create-message {
    font-family: $stylish-text;
  }

  #existing-message {
    font-family: $stylish-text;
  }

  #playlist-name {
    font-family: $stylish-text;
  }

</style>
