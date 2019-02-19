<template>
  <section class="section">
    <div v-if="requestState === RequestState.LOADING">
      <LargeSpinner/>
    </div>

    <div v-if="requestState === RequestState.LOADED">
      <slot :data="data"></slot>
    </div>

    <div v-if="requestState === RequestState.ERROR">
      <ErrorMessage :message="error"/>
    </div>
  </section>
</template>

<script>
import LargeSpinner from '@/components/utils/LargeSpinner';
import ErrorMessage from '@/components/utils/ErrorMessage';
import { RequestState } from '@/api/constants';

export default {
  name: 'asyncComponent',
  props: ['dataSource', 'errorMessage'],
  data() {
    return {
      RequestState,
      requestState: RequestState.LOADING,
      data: null,
      error: this.errorMessage
    };
  },
  methods: {
    populateData(data) {
      if (Object.entries(data).length === 0) {
        this.populateError(data);
        return;
      }
      this.data = data;
      this.requestState = RequestState.LOADED;
    },
    populateError(_err) {
      this.requestState = RequestState.ERROR;
    }
  },
  mounted() {
    this.dataSource(this.populateData, this.populateError);
  },
  components: {
    LargeSpinner,
    ErrorMessage
  }
};
</script>

<style scoped>
</style>