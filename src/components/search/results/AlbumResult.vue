<template>
  <section>
    <div
      :key="album.id"
      v-for="album in albums"
      id="container"
      class="is-mobile "
    >
      <img id="artwork" :alt="album.name" :src="album.artworkUrl" />
      <label class="has-text-light subtitle" id="name">
        {{ album.name }}
      </label>
    </div>
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
</style>
