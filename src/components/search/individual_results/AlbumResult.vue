<template>
  <section class="is-bordered level is-mobile">
    <div class="level-left">
      <div class="level-item">
        <img :alt="album.name" :src="album.src" class="artwork" />
      </div>
      <div class="level-item stacked">
        <div>
          <router-link
            :to="{ name: 'Album', params: { id: album.id } }"
            class="is-primary link is-clipped"
            >{{ album.name }}
          </router-link>
        </div>
        <div class="flex-row">
          <span class="bumped-left">by</span>
          <router-link
            :to="{ name: 'Artist', params: { id: album.artistId } }"
            class="is-primary link is-clipped"
            >{{ album.artist }}
          </router-link>
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

<style lang="scss" scoped>
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
