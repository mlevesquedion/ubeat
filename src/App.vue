<template>
  <div id="app">
    <Navigation v-if="loggedIn" />
    <router-view :key="$route.fullPath" />
  </div>
</template>

<script>
import '@/assets/sass/styles.scss';
import Navigation from '@/components/Navigation';
import { authPath } from './router';

export default {
  name: 'App',
  components: {
    Navigation
  },
  computed: {
    loggedIn() {
      return this.$route.fullPath !== authPath;
    }
  }
};
</script>
