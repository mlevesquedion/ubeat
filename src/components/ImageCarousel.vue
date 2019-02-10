<template>
  <div class="flex-centered">
    <div id="carousel"></div>
  </div>
</template>

<script>
const images = [
  'https://www.billboard.com/files/styles/900_wide/public/media/Joy-Division-Unknown-Pleasures-album-covers-billboard-1000x1000.jpg',
  'https://3m84r11gpx1j11puas2g5wfl-wpengine.netdna-ssl.com/wp-content/uploads/2015/12/Tame-Impala-Currents.jpg',
  'https://blurppy.files.wordpress.com/2016/02/deftones-gore-album-cover.jpg?w=900',
  'https://i1.wp.com/vehlinggo.com/wp-content/uploads/2018/07/GUNSHIP_Dark_All_Day_Album_Pack_Shot.jpg?ssl=1',
  'https://lastfm-img2.akamaized.net/i/u/ar0/6cdffee4073d4859858256a103a75591',
  'http://truomega.ca/wp-content/uploads/2015/12/Jingle-Cats-Album-Cover.png'
];
let imageIndex = 1;
const updateImage = () => {
  const carousel = document.getElementById('carousel');
  if (carousel !== null) {
    const image = images[imageIndex];
    carousel.style.backgroundImage = `url(${image})`;
    imageIndex = (imageIndex + 1) % images.length;
  }
};
setInterval(updateImage, 3000);
</script>

<style scoped lang="scss">
#carousel {
  width: 40vw;
  height: 40vw;
  min-width: 300px;
  min-height: 300px;
  max-width: 500px;
  max-height: 500px;
  opacity: 0.8;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url('https://www.billboard.com/files/styles/900_wide/public/media/Joy-Division-Unknown-Pleasures-album-covers-billboard-1000x1000.jpg');
  transition: background-image 1s ease-in-out;
}

#carousel:after {
  display: block;
  padding-bottom: 100%;
}
</style> 