<template>
  <div class="content notification">
    <song v-for="(s, i) in songs" :song="s" :index="i" :key="s.title"></song>
  </div>
</template>

<script>
import Song from '@/components/Song';

export default {
  name: 'song-list',
  components: {
    song: Song
  },
  data() {
    return {
      songs: [
        {
          title: 'Breakout',
          time: '3:21'
        },
        {
          title: 'Learn to Fly',
          time: '3:58'
        },
        {
          title: 'Gimme Stitches',
          time: '3:42'
        },
        {
          title: 'Generator',
          time: '3:48'
        },
        {
          title: 'Aurora',
          time: '5:49'
        },
        {
          title: 'Live-in Skin',
          time: '3:52'
        },
        {
          title: 'Next Year',
          time: '4:37'
        },
        {
          title: 'Headwires',
          time: '4:37'
        },
        {
          title: "Ain't it the Life",
          time: '4:15'
        },
        {
          title: 'M.I.A.',
          time: '4:03'
        }
      ]
    };
  }
};
</script>

<style scoped lang="scss">
</style>
