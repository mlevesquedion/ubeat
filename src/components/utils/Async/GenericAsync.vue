<template>
  <AsyncContent :requestState="requestState" :data="data" :dataName="dataName">
    <slot :data="data"></slot>
  </AsyncContent>
</template>

<script>
import RequestState from './requestState';
import AsyncContent from './AsyncContent';

export default {
  name: 'GenericAsync',
  props: ['dataSource', 'dataName'],
  data() {
    return {
      requestState: RequestState.LOADING,
      data: null
    };
  },
  methods: {
    setData(data) {
      if (Object.entries(data).length === 0) {
        this.setError(data);
        return;
      }
      this.data = data;
      this.requestState = RequestState.LOADED;
    },
    setError(_err) {
      this.requestState = RequestState.ERROR;
    }
  },
  mounted() {
    this.dataSource.then(this.setData).catch(this.setError);
  },
  components: {
    AsyncContent
  }
};
</script>

<style scoped></style>
