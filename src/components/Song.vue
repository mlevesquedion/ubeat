<template>
  <div class="level is-mobile is-bordered" v-bind:class="{ 'has-background-dark': isDark }">
    <div class="level-left">
      <div>{{ index + 1 }}. {{ song.title }}</div>
    </div>
    <div class="level-right">
      <div class="field is-grouped has-addons">
        <p class="control">
          <a class="has-text-light">
            <span class="icon is-medium">
              <i class="far fa-play-circle"></i>
            </span>
          </a>
          <span>{{ song.time }}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'song',
  props: ['song', 'index'],
  computed: {
    isDark() {
      return this.index % 2 === 0;
    }
  }
};
</script>

<style scoped lang="scss">
.level {
  margin-bottom: 0;
}
</style>