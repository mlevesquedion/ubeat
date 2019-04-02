<template>
  <section class="section">
    <h1 class="title has-text-light">Following</h1>
    <div class="accordions" v-if="hasFriends">
      <div :key="u.id" v-for="u in following">
        {{ u }}
      </div>
    </div>
    <div v-else>This user is not following anyone!</div>
  </section>
</template>

<script>
import isEmpty from '@/utils/isEmpty';

export default {
  name: 'PlaylistList',
  props: ['following'],
  computed: {
    hasFriends() {
      return !isEmpty(this.following);
    }
  }
};
</script>

<style scoped lang="scss">
.section {
  padding-top: 0;
}
</style>
