<template>
  <section class="section">
    <section class="container has-text-centered">
      <a>
        <img
          class="is-rounded responsive-image"
          src="https://lastfm-img2.akamaized.net/i/u/ar0/fd4384fc364f4589c217eb3b805eab99.jpg"
          alt="Rings-Of-Saturn"
        >
      </a>
      <p class="label is-large">Rings of Saturn</p>
      <p class="label is-medium">Technical Death Metal</p>
      <a
        id="itunes-link"
        href="https://geo.itunes.apple.com/us/artist/rings-of-saturn/373843476?mt=1&app=music"
      >
        <img
          src="https://linkmaker.itunes.apple.com/en-us/badge-lrg.svg?releaseDate=&kind=artist&bubble=apple_music"
        >
      </a>
    </section>
    <div class="album-gallery">
      <div class="album responsive-image">
        <div class="album-image">
          <a href="https://itunes.apple.com/ca/album/ultu-ulla/1242876068">
            <img
              src="https://pbs.twimg.com/profile_images/870509754350567424/soPP-3fE_400x400.jpg"
              alt="ultu-ulla"
            >
          </a>
        </div>
        <div class="album-title">
          <label class="label subtitle">Ultu Ulla</label>
        </div>
      </div>
      <div class="album responsive-image">
        <div class="album-image">
          <a href="https://itunes.apple.com/ca/album/lugal-ki-en/1298845366">
            <img
              src="https://images.shazam.com/coverart/t147914943-b1298846284_s400.jpg"
              alt="lugal-ki-en"
            >
          </a>
        </div>
        <div class="album-title">
          <label class="label subtitle" subtitle>Lugal Ki En</label>
        </div>
      </div>
      <div class="album responsive-image">
        <div class="album-image">
          <a href="https://itunes.apple.com/ca/album/dingir/1298832976">
            <img src="https://img.cdandlp.com/2018/04/imgL/119126211.jpg" alt="dingir">
          </a>
        </div>
        <div class="album-title">
          <label class="label subtitle">Dingir</label>
        </div>
      </div>
      <div class="album responsive-image">
        <div class="album-image">
          <a href="https://itunes.apple.com/ca/album/embryonic-anomaly/1298828991">
            <img
              src="http://www.ledotakas.net/image/cache/data/R/RINGS-OF-SATURN-Embryonic-Anomaly-LP-400x400.jpg"
              alt="embryonic-anomaly"
            >
          </a>
        </div>
        <div class="album-title">
          <label class="label subtitle">Embryonic Anomaly</label>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import '@/assets/sass/styles.scss';

#itunes-link {
  margin-bottom: 1%;
}

.label {
  text-align: center;
  color: $text;
}

.responsive-image {
  width: 25%;
  height: 25%;
  min-width: 250px;
  min-height: 250px;
  max-width: 350px;
  max-height: 350px;
  padding: 2% 2%;
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
  align-items: space-around;
}
</style>
