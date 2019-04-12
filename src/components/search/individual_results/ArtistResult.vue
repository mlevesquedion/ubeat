<template>
  <div class="level is-mobile is-bordered">
    <div class="level-left">
      <router-link
        :to="{ name: 'Artist', params: { id: artist.id } }"
        class="is-primary link"
        >{{ artist.name }}
      </router-link>
    </div>
    <div class="level-right has-text-light">{{ artist.genre }}</div>
  </div>
</template>

<script>
export default {
  name: 'ArtistResult',
  props: ['artist']
};
</script>
