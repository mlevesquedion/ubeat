<template>
  <div id="app">
    <Navigation v-if="loggedIn" />
    <router-view />
  </div>
</template>

<script>
import '@/assets/sass/styles.scss';
import Navigation from '@/components/Navigation';

export default {
  name: 'app',
  components: {
    Navigation
  },
  computed: {
    loggedIn() {
      return this.$route.name !== 'Login - Signup';
    }
  }
};
</script>

<style></style>
