<template>
  <section class="section">
    <h1 class="title has-text-light">Playlists</h1>
    <div v-for="p in playlists" :key="p.id">
      {{p.name}}
    </div>
  </section>
</template>

<script>
  export default {
    name: 'PlaylistListView',
    props: ['playlists']
  };
</script>

<style scoped lang="scss">
  .section {
    padding-top: 0;
  }
</style>
