<template>
  <section class="is-bordered level is-mobile">
    <img id="artwork" :alt="album.name" :src="album.src"/>
    <router-link
      class="is-primary link"
      :to="{ name: 'Album', params: { id: album.id } }"
    >
      <p class="is-primary is-clipped" id="name">
        {{ album.name }}
      </p>
    </router-link>
  </section>
</template>

<script>
  export default {
    name: 'AlbumResult',
    props: ['album']
  };
</script>

<style scoped lang="scss">
  @import '@/assets/sass/styles.scss';

  #artwork {
    display: block;
    padding-top: 13px;
    min-width: 60px;
    max-width: 100px;
  }

  .is-clipped {
    width: 33vw;
  }
</style>
