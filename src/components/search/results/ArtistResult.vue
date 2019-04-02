<template>
  <div class="level is-mobile is-bordered">
    <div class="level-left is-flex">
      <router-link
        class="is-primary link"
        :to="{ name: 'Artist', params: { id: artist.id } }"
        >{{ artist.name }}
      </router-link>
      <div id="genre" class="has-text-light">, Genre : {{ artist.genre }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ArtistResult',
  props: ['artist'],
  mounted() {
    console.log(this.artist);
  }
};
</script>

<style scoped lang="scss">
.is-flex {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
</style>
