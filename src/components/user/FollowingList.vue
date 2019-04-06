<template>
  <section class="section">
    <div class="accordions">
      <Accordion>
        <template slot="header">
          <h1 class="title has-text-light">Following ({{ followingCount }})</h1>
        </template>
        <template slot="body">
          <div v-if="hasFriends">
            <UserResult :key="u.id" v-for="u in following" :user="u" />
          </div>
          <div v-else>This user is not following anyone!</div>
        </template>
      </Accordion>
    </div>
  </section>
</template>

<script>
import isEmpty from '@/utils/isEmpty';
import Accordion from '../utils/Accordion';
import UserResult from '../search/results/UserResult';

export default {
  name: 'PlaylistList',
  props: ['user'],
  components: { Accordion, UserResult },
  computed: {
    following() {
      return this.user.following;
    },
    hasFriends() {
      return !isEmpty(this.following);
    },
    followingCount() {
      if (this.$root.$data.isUser(this.user)) {
        return this.following.filter(u => this.$root.$data.isFollowing(u))
          .length;
      }
      return this.following.length;
    }
  }
};
</script>

<style scoped lang="scss">
.section {
  padding-top: 0;
}
</style>
