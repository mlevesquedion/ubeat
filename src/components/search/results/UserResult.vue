<template>
  <div class="level is-mobile">
    <div class="level-left">
      <div class="level-item is-clipped">
        <router-link
          class="is-primary link"
          :to="{ name: 'User', params: { id: user.id } }"
          >{{ user.name }}
        </router-link>
        <span>({{ user.email }})</span>
      </div>
    </div>
    <div class="level-right">
      <div class="level-item">
        <FollowButton :user="user" :isSmall="true"></FollowButton>
      </div>
    </div>
  </div>
</template>

<script>
import FollowButton from '../../user/FollowButton';

export default {
  name: 'UserResult',
  components: { FollowButton },
  props: ['user']
};
</script>

<style scoped lang="scss">
.is-clipped {
  min-width: 80px;
  width: 60vw;
  max-width: 700px;
}
</style>
