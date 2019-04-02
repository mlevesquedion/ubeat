<template>
  <Accordion>
    <template slot="header">
      <span class="subtitle is-primary is-clipped level-item">
        <i :class="`fa ${icon} is-primary bumped-left`"></i>
        {{ resultType }}
      </span>
    </template>
    <template slot="body">
      <div v-if="hasResults">
        <p v-for="r in results">
          <slot :data="r"> </slot>
        </p>
      </div>
      <div v-else>
        No results found!
      </div>
    </template>
  </Accordion>
</template>

<script>
import Accordion from '../../utils/Accordion';
import isEmpty from '../../../utils/isEmpty';

export default {
  name: 'ResultsGroup',
  components: { Accordion },
  props: ['resultType', 'results', 'icon'],
  computed: {
    hasResults() {
      return !isEmpty(this.results);
    }
  }
};
</script>

<style scoped></style>
