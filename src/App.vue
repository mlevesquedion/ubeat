<template>
  <div id="app">
    <nav-menu></nav-menu>
    <router-view></router-view>
    <button class="button is-primary is-large">I'm a large button</button>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation';

export default {
  name: 'app',
  components: {
    'nav-menu': Navigation
  }
};
</script>

<style></style>
