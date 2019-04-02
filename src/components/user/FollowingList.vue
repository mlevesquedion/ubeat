<template>
  <section class="section">
    <div class="accordions">
      <Accordion>
        <template slot="header">
          <h1 class="title has-text-light">Following ({{ followingCount }})</h1>
        </template>
        <template slot="body">
          <div v-if="hasFriends">
            <div :key="u.id" v-for="u in following">
              {{ u }}
            </div>
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

export default {
  name: 'PlaylistList',
  components: { Accordion },
  computed: {
    hasFriends() {
      return !isEmpty(this.following);
    },
    following() {
      return this.$root.$data.getUser().following;
    },
    followingCount() {
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
