<template>
  <section class="section columns">
    <div class="column is-narrow">
      <figure class="media-left responsive-image-container image">
        <img
          :alt="user.name"
          src="static/images/default_profile.png"
          class="responsive-image"
        />
      </figure>
    </div>
    <div class="column">
      <div class="label is-primary">{{ userNameText }}</div>
      <div class="label">{{ user.email }}</div>
      <FollowButton v-if="!loggedInUser" class="no-stretch" :user="user" />
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

<style scoped lang="scss">
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
