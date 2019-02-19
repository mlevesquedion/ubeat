
<template>
  <section class="section">
    <h1 class="title is-primary albums-title">Albums</h1>
    <div class="album-gallery">
      <div :key="album.id" v-for="album in albums" class="album">
        <a class="responsive-image-container" :href="album.url">
          <img class="responsive-image" :src="album.artworkUrl" alt="album.name">
        </a>
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

.albums-title {
  text-align: center;
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
