<template>
  <div id="app">
    <Navigation v-if="loggedIn" />
    <router-view :key="$route.fullPath" />
  </div>
</template>

<script>
import '@/assets/sass/styles.scss';
import Navigation from '@/components/Navigation';

export default {
  name: 'App',
  components: {
    Navigation
  },
  computed: {
    loggedIn() {
      return this.$route.fullPath !== '/auth';
    }
  }
};
</script>

<style></style>
