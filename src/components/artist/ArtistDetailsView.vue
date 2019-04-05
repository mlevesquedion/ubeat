<template>
  <div>
    <div class="container has-text-centered responsive-image-container">
      <img
        :alt="artist.name"
        class="responsive-image is-round"
        :src="artist.src"
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
