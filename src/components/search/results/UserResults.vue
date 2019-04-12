<template>
  <section class="section">
    <div class="results-container">
      <fragment v-if="hasUsers">
        <UserResult v-for="u in users" :key="u.id" :user="u"></UserResult>
      </fragment>
      <div v-else>
        <NoResults></NoResults>
      </div>
    </div>
  </section>
</template>

<script>
import UserResult from './UserResult';
import NoResults from './NoResults';
import isEmpty from '../../../utils/isEmpty';

export default {
  name: 'UserResults',
  props: ['users'],
  components: { UserResult, NoResults },
  computed: {
    hasUsers() {
      return !isEmpty(this.users);
    }
  }
};
</script>
