<template>
  <div>
    <div class="container has-text-centered responsive-image-container">
      <img
        :alt="artist.name"
        :src="artist.src"
        class="responsive-image is-round"
      />
    </div>
    <p class="label padded-bottom">{{ artist.bio }}</p>
  </div>
</template>

<script>
export default {
  name: 'ArtistDetailsView',
  props: ['artist']
};
</script>

<style lang="scss" scoped>
.responsive-image-container {
  width: 30vw;
  height: 30vw;
  min-width: 260px;
  min-height: 260px;
  max-width: 420px;
  max-height: 420px;
  padding: 2% 2%;
}
</style>
