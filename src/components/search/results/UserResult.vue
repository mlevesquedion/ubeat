<template>
  <div class="level">
    <div class="level-left">{{ user.name }}, {{ user.email }}</div>
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

<style scoped></style>
