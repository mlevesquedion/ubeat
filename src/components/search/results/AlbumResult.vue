<template>
  <section class="is-bordered level is-mobile">
    <div class="level-left">
      <div class="level-item">
        <img class="artwork" :alt="album.name" :src="album.src" />
      </div>
      <div class="level-item">
        <router-link
          class="is-primary link"
          :to="{ name: 'Album', params: { id: album.id } }"
        >
          <p class="is-clipped">
            {{ album.name }}
          </p>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AlbumResult',
  props: ['album']
};
</script>

<style scoped lang="scss">
@import '@/assets/sass/styles.scss';

.artwork {
  padding: 10px 0;
  display: block;
  min-width: 60px;
  max-width: 100px;
}

.is-clipped {
  width: 50vw;
}
</style>
