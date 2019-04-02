<template>
  <section class="hero">
    <div class="hero-body ">
      <div class="container" >
        <div class="user-content">
          <div class="columns">
            <div class="column user-info">
              <img
                class="is-rounded bumped-left"
                id="user-image"
                src="static/images/default_profile.png"
                alt="user1.name"
              />
            </div>
            <div class="column">
              <div class="user-name">{{user1.name}}</div>
              <div class ="user-email">{{user1.email}}</div>
              <button
                v-if="user1.isFollowing"> <i class="fas fa-user-times"></i> Unfollow</button>
              <button
                v-else-if="user1.isFollowing === false"> <i class="fas fa-user-plus"></i> Follow </button>
              <div v-else></div>
            </div>
          </div>
        </div>
        <vue-tabs active-tab-color="#2fc563"
                  active-text-color="white"
                  centered
                  class="tab-title"
        >
          <v-tab  title="Playlists" icon="fas fa-music">
            <div class="container friend-content">
              <UserPlaylist></UserPlaylist>
            </div>
          </v-tab>

          <v-tab title="Following" icon="fas fa-user-friends">
            <div class="container friend-content">
              <UserFriends ></UserFriends>
            </div>
          </v-tab>
        </vue-tabs>

      </div></div>
  </section>
</template>

<script>
  import { VueTabs, VTab } from 'vue-nav-tabs';
  import 'vue-nav-tabs/themes/vue-tabs.css';
  import UserPlaylist from './UserPlaylist';
  import UserFriends from './UserFriends';
  import userTemp from './userTemporaire.json';

  export default {
    name: 'User',
    props: ['friend', 'index', 'userList'],
    components: { UserFriends,
      UserPlaylist,
      VueTabs,
      VTab },
    data() {
      return {
        user1: userTemp,
        isModalVisible: false,
        isSettingVisible: false,
        isUnfollowing: false
      };
    },
    methods: {
    },
  };
</script>

<style scoped lang="scss">
  @import '@/assets/sass/styles.scss';
  .user-info{
    min-width: 150px;
    max-width: 150px
  }

  .tab-title{
    background-color: dimgrey;
    font-size: 12px;
    size: 12px
  }
  .vue-tabs{
    font-size: 10px
  }
  .user-name{
    color: $primary;
    font-size: 20px;
    font-weight: bold;
  }

  .user-content{
    padding: 20px
  }

  span.icon {
    font-family: FontAwesome,monospace;
  }

  .friend-content{
    background-color: #181818;
    border: 1px solid white;
    border-top-width: 0;
  }

  .column.song-name{
    font-size: 18px;
    padding: 0 0 0 20px;
  }

  #user-image {
    display: flex;
    width: 100px;
  }



</style>
