<template>
  <section class="section columns">
    <div class="column is-narrow">
      <figure class="media-left image">
        <img
          class="is-rounded bumped-left"
          id="user-image"
          src="static/images/default_profile.png"
          alt="user.name"
        />
      </figure>
    </div>
    <div class="column">
      <div class="user-name">{{ user.name }}</div>
      <div class="user-email">{{ user.email }}</div>
      <div>
        <button class="button is-danger" v-if="isFollowed" @click="unfollow">
          <i class="fas fa-user-times"></i
          ><span class="bumped-right">Unfollow</span>
        </button>
        <button class="button is-primary" v-else @click="follow">
          <i class="fas fa-user-plus"></i
          ><span class="bumped-right">Follow</span>
        </button>
      </div>
    </div>
    <FollowingList :following="user.following"></FollowingList>
  </section>
</template>

<script>
import UserPlaylist from './UserPlaylist';
import UserFriends from './UserFriends';
import FollowingList from './FollowingList';
import userAPI from '../../api/user';

export default {
  name: 'UserView',
  props: ['user'],
  components: { UserFriends, UserPlaylist, FollowingList },
  computed: {
    isFollowed() {
      console.log(this.$root.$data.getUser());
      return (
        this.$root.$data.getUser().following.filter(u => u.id === this.user.id)
          .length !== 0
      );
    }
  },
  methods: {
    follow() {
      userAPI
        .follow(this.user.id)
        .then(user => this.$root.$data.setUser(user))
        .catch(_err =>
          this.$toasted.show(`Could not follow user ${this.user.name}.`, {
            type: 'ubeat-error'
          })
        );
    },
    unfollow() {
      userAPI
        .unfollow(this.user.id)
        .then(user => this.$root.$data.setUser(user))
        .catch(_err =>
          this.$toasted.show(`Could not unfollow user ${this.user.name}.`, {
            type: 'ubeat-error'
          })
        );
    }
  }
};
</script>

<style scoped lang="scss">
@import '@/assets/sass/styles.scss';
.user-info {
  min-width: 150px;
  max-width: 150px;
}

.tab-title {
  background-color: dimgrey;
  font-size: 12px;
  size: 12px;
}
.vue-tabs {
  font-size: 10px;
}
.user-name {
  color: $primary;
  font-size: 20px;
  font-weight: bold;
}

.user-content {
  padding: 20px;
}

span.icon {
  font-family: FontAwesome, monospace;
}

.friend-content {
  background-color: #181818;
  border: 1px solid white;
  border-top-width: 0;
}

.column.song-name {
  font-size: 18px;
  padding: 0 0 0 20px;
}

#user-image {
  display: flex;
  width: 100px;
}
</style>
