<template>
  <section class="is-bordered level">
      <img id="artwork" :alt="album.name" :src="album.artworkUrl" />
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
#artwork {
  display: block;
  padding-top: 13px;
  min-width: 60px;
  max-width: 100px;
}

#name {
  text-align: center;
}

#container {
  min-width: 200px;
  max-width: 200px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

  .is-clipped {
    width: 33vw;
  }
</style>
