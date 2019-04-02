<template>
  <section class="section columns">
    <div class="column is-narrow">
      <figure class="media-left image">
        <img
          :alt="user.name"
          src="static/images/default_profile.png"
          class="responsive-image"
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
  </section>
</template>

<script>
import userAPI from '../../api/user';

export default {
  name: 'UserHeader',
  props: ['user'],
  computed: {
    isFollowed() {
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

.user-name {
  color: $primary;
  font-size: 20px;
  font-weight: bold;
}
</style>
