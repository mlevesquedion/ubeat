<template>
  <section class="section columns">
    <div class="column is-narrow">
      <figure class="media-left responsive-image-container image">
        <img
          :alt="user.name"
          class="responsive-image"
          src="static/images/default_profile.png"
        />
      </figure>
    </div>
    <div class="column">
      <div class="label is-primary">{{ userNameText }}</div>
      <div class="label">{{ user.email }}</div>
      <FollowButton :user="user" class="no-stretch" v-if="isNotOwnPage" />
    </div>
  </section>
</template>

<script>
import FollowButton from './FollowButton';

export default {
  name: 'UserHeader',
  components: { FollowButton },
  props: ['user'],
  computed: {
    userNameText() {
      return (
        this.user.name + (this.$root.$data.isUser(this.user) ? ' (you)' : '')
      );
    },
    isNotOwnPage() {
      return !this.$root.$data.isUser(this.user);
    }
  }
};
</script>

<style lang="scss" scoped>
.column {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.no-stretch {
  align-self: flex-start;
}
</style>
