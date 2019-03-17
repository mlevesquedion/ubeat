<template>
  <div id="app">
    <Navigation />
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
  }
};
</script>

<style></style>
