<template>
  <button
    class="button is-danger"
    :class="{ 'is-small': isSmall, 'is-loading': isLoading }"
    v-if="isFollowed"
    @click="unfollow"
  >
    <i class="fas fa-user-times"></i
    ><span class="bumped-right" v-if="!isSmall">Unfollow</span>
  </button>
  <button
    class="button is-primary"
    :class="{ 'is-small': isSmall, 'is-loading': isLoading }"
    v-else
    @click="follow"
  >
    <i class="fas fa-user-plus"></i
    ><span v-if="!isSmall" class="bumped-right">Follow</span>
  </button>
</template>

<script>
import userAPI from '../../api/user';
import SmallSpinner from '../utils/Spinner/SmallSpinner';

export default {
  name: 'FollowButton',
  components: { SmallSpinner },
  data() {
    return {
      isLoading: false
    };
  },
  props: ['user', 'isSmall'],
  computed: {
    isFollowed() {
      return this.$root.$data.isFollowing(this.user.id);
    }
  },
  methods: {
    follow() {
      this.isLoading = true;
      userAPI
        .follow(this.user.id)
        .then(user => {
          this.isLoading = false;
          this.$root.$data.setUser(user);
        })
        .catch(_err => {
          this.isLoading = false;
          this.$toasted.show(`Could not follow user ${this.user.name}.`, {
            type: 'ubeat-error'
          });
        });
    },
    unfollow() {
      this.isLoading = true;
      userAPI
        .unfollow(this.user.id)
        .then(user => {
          this.isLoading = false;
          this.$root.$data.setUser(user);
        })
        .catch(_err => {
          this.isLoading = false;
          this.$toasted.show(`Could not unfollow user ${this.user.name}.`, {
            type: 'ubeat-error'
          });
        });
    }
  }
};
</script>

<style scoped></style>
