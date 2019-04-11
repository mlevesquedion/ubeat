<template>
  <section class="section">
    <div class="accordions">
      <Accordion>
        <template slot="header">
          <h1 class="title has-text-light">Following ({{ followingCount }})</h1>
        </template>
        <template slot="body">
          <div v-if="hasFriends">
            <UserResult :key="u.id" :user="u" v-for="u in following" />
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
  name: 'FollowingList',
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
        return this.$root.$data.following().length;
      }
      return this.following.length;
    }
  }
};
</script>

<style lang="scss" scoped>
.section {
  padding-top: 0;
}
</style>
