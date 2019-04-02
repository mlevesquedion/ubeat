<template>
  <span >
    <p id="artist-name">
      {{ artist.name }}
    </p>

    <p id="genre" class="is-primary">
      Genre : {{ artist.genre }}
    </p>

    <router-link
      :to="{ name: 'Artist', params: { id: artist.id } }"
    >
      <button
      class="button is-primary">
      {{ artist.name }}'s page
      </button>
    </router-link>

  </span>

</template>

<script>
export default {
  name: 'ArtistResult',
  props: ['artist']
};
</script>

<style scoped lang="scss">

  #artist-name {
    font-size: xx-large;
  }

  #genre {
    padding-bottom: 30px;
  }

</style>
