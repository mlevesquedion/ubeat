<template>
  <section class="section">
    <div v-if="requestState === RequestState.LOADING">
      <Spinner :size="SpinnerSize.LARGE"/>
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
import Spinner from '@/components/utils/Spinner/Spinner';
import ErrorMessage from '@/components/utils/ErrorMessage';
import SpinnerSize from '@/components/utils/Spinner/spinnerSize';
import RequestState from './requestState';

export default {
  name: 'asyncComponent',
  props: ['dataSource', 'errorMessage'],
  data() {
    return {
      SpinnerSize,
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
    Spinner,
    ErrorMessage
  }
};
</script>

<style scoped>
</style>