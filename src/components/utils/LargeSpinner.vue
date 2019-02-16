<template>
  <Spinner size="large" :line-fg-color="color"/>
</template>

<script>
import styles from '@/assets/sass/styles.scss';
import Spinner from 'vue-simple-spinner';

export default {
  data() {
    return {
      color: styles.primary
    };
  },
  components: { Spinner }
};
</script>

<style scoped>
</style>