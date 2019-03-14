<template>
  <Spinner :size="size" :line-fg-color="color" />
</template>

<script>
import styles from '@/assets/sass/styles.scss';
import Spinner from 'vue-simple-spinner';

export default {
  props: ['size'],
  data() {
    return {
      color: styles.primary
    };
  },
  components: { Spinner }
};
</script>

<style scoped></style>
