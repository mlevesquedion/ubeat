<template>
  <section class="section">
    <h1 class="title is-primary has-text-centered">Albums</h1>
    <div class="album-gallery">
      <div :key="album.id" class="album" v-for="album in albums">
        <router-link
          :to="{ name: 'Album', params: { id: album.id } }"
          class="responsive-image-container"
        >
          <img
            :src="album.artworkUrl"
            :alt="album.name"
            class="responsive-image"
          />
        </router-link>
        <label class="album-name subtitle">{{ album.name }}</label>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'albumGallery',
  props: ['albums']
};
</script>

<style scoped lang="scss">
@import '@/assets/sass/styles.scss';

.section {
  padding-top: 0;
}

.responsive-image-container {
  width: 25vw;
  height: 25vw;
  min-width: 250px;
  min-height: 250px;
  max-width: 350px;
  max-height: 350px;
  padding: 2% 2%;
}

.responsive-image {
  width: 100%;
  height: 100%;
}

.album-gallery {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.album {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
}

.album-name {
  width: 200px;
  text-align: center;
  color: $text;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
</style>
