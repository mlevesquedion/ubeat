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
      <FollowButton :user="user" />
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
      if (this.user.id === this.$root.$data.id()) {
        text += ' (you)';
      }
      return text;
    }
  }
};
</script>
