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
      <FollowButton :user="user" />
    </div>
  </section>
</template>

<script>
import FollowButton from './FollowButton';

export default {
  name: 'UserHeader',
  components: { FollowButton },
  props: ['user']
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
