<template>
  <div class="level">
    <div class="level-left is-clipped">
      <router-link
        class="is-primary link"
        :to="{ name: 'User', params: { id: user.id } }"
        >{{ user.name }}
      </router-link>
      <span class="bumped-right">({{ user.email }})</span>
    </div>
    <div class="level-right">
      <FollowButton :user="user" :isSmall="true"></FollowButton>
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
  min-width: 100px;
  width: 50vw;
}
</style>
