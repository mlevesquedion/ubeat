<template>
  <div
    class="dropdown is-hoverable"
    :class="{'is-right': isRight}"
  >
    <div class="dropdown-trigger">
      <slot></slot>
    </div>
    <div class="dropdown-menu" role="menu">
      <div class="dropdown-content album-hoverable">
        <a
          class="dropdown-item album-hoverable-item"
          v-for="p in playlists" :key="p.id" @click="onPlaylistClick(p)">
          {{p.name}}
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Dropdown',
    props: ['playlists', 'onPlaylistClick', 'isRight']
  };
</script>

<style scoped lang="scss">
  @import '@/assets/sass/styles.scss';
</style>
