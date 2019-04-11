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
      <FollowButton :user="user" class="no-stretch" v-if="!loggedInUser" />
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
      let text = this.user.name;
      if (this.$root.$data.isUser(this.user)) {
        text += ' (you)';
      }
      return text;
    },
    loggedInUser() {
      return this.$root.$data.isUser(this.user);
    }
  }
};
</script>

<style lang="scss" scoped>
.columns {
  width: 100%;
}

.column {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.no-stretch {
  align-self: flex-start;
}
</style>
