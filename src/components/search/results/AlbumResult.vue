<template>
  <section class="is-bordered level is-mobile">
    <div class="level-left">
      <div class="level-item">
        <img class="artwork" :alt="album.name" :src="album.src" />
      </div>
      <div class="level-item stacked">
        <div>
          <router-link
            class="is-primary link is-clipped"
            :to="{ name: 'Album', params: { id: album.id } }"
            >{{ album.name }}</router-link
          >
        </div>
        <div class="flex-row">
          <span class="bumped-left">by</span>
          <router-link
            class="is-primary link is-clipped"
            :to="{ name: 'Artist', params: { id: album.artistId } }"
            >{{ album.artist }}</router-link
          >
        </div>
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

.stacked {
  flex-direction: column;
  align-items: flex-start;
}

.flex-row {
  display: flex;
  flex-direction: row;
}

.bumped-left {
  margin-right: 5px;
}
</style>
