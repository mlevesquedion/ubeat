<template>
  <section class="section">
    <h1 class="title is-primary has-text-centered">{{ title }}</h1>
    <div class="gallery">
      <div :key="e.id" class="element" v-for="e in elements">
        <router-link
          :to="{ name: linkTo, params: { id: e.id } }"
          class="responsive-image-container"
        >
          <img :alt="e.name" :src="e.src" class="responsive-image" />
        </router-link>
        <label class="element-name subtitle">{{ e.name }}</label>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'Gallery',
  props: ['title', 'linkTo', 'linkParamsMaker', 'elements']
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

.gallery {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.element {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
}

.element-name {
  width: 200px;
  text-align: center;
  color: $text;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
</style>
