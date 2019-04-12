<template>
  <Accordion>
    <template slot="header">
      <span class="subtitle is-primary is-clipped level-item">
        <i :class="`fa ${icon} is-primary bumped-left`"></i>
        {{ resultSummary }}
      </span>
    </template>
    <template slot="body">
      <div v-if="hasResults">
        <div v-for="(r, i) in results">
          <hr class="horizontal-line" v-if="i !== 0" />
          <slot :data="r"></slot>
        </div>
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
import pluralize from '../../../utils/pluralize';

export default {
  name: 'ResultsGroup',
  components: { Accordion },
  props: ['resultType', 'results', 'icon'],
  computed: {
    hasResults() {
      return !isEmpty(this.results);
    },
    resultCount() {
      return this.results.length;
    },
    resultTypePluralized() {
      return pluralize(this.resultType, this.resultCount);
    },
    resultSummary() {
      return `${this.resultTypePluralized} (${this.resultCount})`;
    }
  }
};
</script>

<style lang="scss" scoped>
.horizontal-line {
  margin: 0;
  border-bottom: 1px solid lightgray;
}
</style>
