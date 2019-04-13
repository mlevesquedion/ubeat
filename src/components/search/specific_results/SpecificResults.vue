<template>
  <section class="section">
    <div class="results-container">
      <fragment v-if="hasData">
        <fragment :key="d.id" v-for="d in data">
          <slot :data="d"></slot>
        </fragment>
      </fragment>
      <div v-else>
        <NoResults></NoResults>
      </div>
    </div>
  </section>
</template>

<script>
import NoResults from './NoResults';
import isEmpty from '../../../utils/isEmpty';

export default {
  name: 'SpecificResults',
  props: ['data'],
  components: { NoResults },
  computed: {
    hasData() {
      return !isEmpty(this.data);
    }
  }
};
</script>

<style scoped></style>
