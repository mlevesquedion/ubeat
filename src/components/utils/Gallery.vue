<template>
  <section class="section">
    <h1
      class="title is-size-1-desktop is-size-2-tablet is-size-3-mobile is-primary has-text-centered"
    >
      {{ title }}
    </h1>
    <div class="gallery">
      <div :key="e.id || ei" class="element" v-for="(e, ei) in elements">
        <router-link
          v-if="e.id"
          :to="{ name: linkTo, params: { id: e.id } }"
          class="responsive-image-container"
        >
          <img :alt="e.name" :src="e.src" class="responsive-image" />
        </router-link>
        <a class="responsive-image-container" v-else :href="e.url">
          <img :alt="e.name" :src="e.src" class="responsive-image" />
        </a>
        <label class="element-name subtitle">{{ e.name }}</label>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'Gallery',
  props: ['title', 'linkTo', 'elements']
};
</script>
<style scoped lang="scss">
@import '@/assets/sass/styles.scss';

.section {
  padding-top: 0;
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
