<template>
  <div class="container has-text-centered">
    <img
      :alt="artist.name"
      class="responsive-image is-round"
      :src="artist.src"
    />
    <p class="label padded-bottom">{{ artist.bio }}</p>
  </div>
</template>

<script>
export default {
  name: 'ArtistDetailsView',
  props: ['artist']
};
</script>
