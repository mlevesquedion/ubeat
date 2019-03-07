<template>
  <section class="section">
    <h1 class="title has-text-light">Playlists</h1>
    <div class="accordions">
      <div v-for="p in playlists" :key="p.id">
        <div class="accordion">
          <div class="accordion-header">
            {{p.name}}
          </div>
          <div class="accordion-body">
            <ul>
              <li v-for="t in p.tracks">
                {{ t.name }}
              </li>
            </ul>
          </div>
        </div>
      </div>
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
