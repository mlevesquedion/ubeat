<template>
  <div id="app">
    <nav-menu></nav-menu>
    <router-view></router-view>
  </div>
</template>

<script>
import '@/assets/css/styles.css';
import Navigation from '@/components/Navigation';

export default {
  name: 'app',
  components: {
    'nav-menu': Navigation
  }
};
</script>

<style></style>
