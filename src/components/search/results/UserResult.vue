<template>
  <div class="level">
    <div class="level-left">{{ user.name }}, {{ user.email }}</div>
    <div class="level-right">
      <button
        class="button is-small is-danger"
        v-if="isFollowed"
        @click="unfollow"
      >
        <i class="fas fa-user-times"></i>
      </button>
      <button class="button is-small is-primary" v-else @click="follow">
        <i class="fas fa-user-plus"></i>
      </button>
    </div>
  </div>
</template>

<script>
import userAPI from '../../../api/user';

export default {
  name: 'UserResult',
  props: ['user'],
  computed: {
    isFollowed() {
      return this.$root.$data.isFollowing(this.user.id);
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

<style scoped></style>
