<template>
  <section><p id="playlist-name" class="is-primary is-size-4-desktop is-size-5-tablet is-size-6-mobile flex-centered">
    {{ playlist.name }}</p>
  </section>
</template>

<script>
  export default {
    name: 'PlaylistView',
    props: ['playlist']
  };
</script>

<style scoped lang="scss">

</style>
