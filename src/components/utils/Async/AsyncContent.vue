<template>
  <div>
    <section class="section" v-if="requestState === RequestState.LOADING">
      <Spinner :size="SpinnerSize.LARGE" />
    </section>

    <div v-if="requestState === RequestState.LOADED">
      <slot></slot>
    </div>

    <section class="section" v-if="requestState === RequestState.ERROR">
      <ErrorMessage :message="error" />
    </section>
  </div>
</template>

<script>
import Spinner from '@/components/utils/Spinner/Spinner';
import ErrorMessage from '@/components/utils/ErrorMessage';
import RequestState from './requestState';
import SpinnerSize from '../Spinner/spinnerSize';

export default {
  name: 'AsyncContent',
  props: ['requestState', 'data', 'dataName'],
  data() {
    return {
      RequestState,
      SpinnerSize,
      error: `Unable to fetch ${this.dataName} at this time.`
    };
  },
  components: {
    Spinner,
    ErrorMessage
  }
};
</script>

<style scoped></style>
