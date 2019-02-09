<template>
  <div>
  <div>
   <header>
     <div id="welcome-message" class="is-size-3-mobile"> Welcome to UBeat!</div>
    <div id="sub-message" class="is-size-5-mobile">

      Manage your favorite albums, artists, playlists and songs. UBeat does it
      all and lets you listen to your music, your way.
    </div>

    <div id="sub-message2" class="is-size-6-mobile">
      Get started now !

      <div id="sub-message2-item" class="is-size-9-mobile">
        <i class="fa fa-arrow-circle-right"></i>
      </div>
    </div>
   </header>
  </div>

  <div>
  <ul class="images">
    <li>
    <span> </span>

    </li>
    <li>
      <span> </span>

    </li>
    <li>
      <span> </span>

    </li>
    <li>
      <span> </span>

    </li>
    <li>
      <span> </span>

    </li>
    <li>
      <span> </span>

    </li>
  </ul>
  </div>
</div>

</template>

<style scoped lang="scss">
@import '@/assets/sass/styles.scss';

.custom-bg {
  background-color: $background;

}

#home {
  color: $primary;
  font-family: 'Permanent Marker', cursive;
}
#welcome-message {
  color: $primary;
  font-family: 'Permanent Marker', cursive;
  font-size: 500%;
  height: 2.1em;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 1.5em;
  padding-top: 3em;
  text-shadow:
    -1px -1px 0 #000,
    1px -1px 0 #000,
    -1px 1px 0 #000,
    1px 1px 0 #000;
}

#sub-message {
  color: $primary;
  font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;
  font-size: 150%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 2em;
  padding-left: 15px;
  text-shadow:
    -1px -1px 0 #000,
    1px -1px 0 #000,
    -1px 1px 0 #000,
    1px 1px 0 #000;
}

#sub-message2 {
  color: $primary;
  font-family: 'Permanent Marker', cursive;
  font-size: 110%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 2em;
  text-shadow:
    -1px -1px 0 #000,
    1px -1px 0 #000,
    -1px 1px 0 #000,
    1px 1px 0 #000;
}

#sub-message2-item {
  font-size: 33px;
  border-color: $primary;
  text-shadow:
    -1px -1px 0 #000,
    1px -1px 0 #000,
    -1px 1px 0 #000,
    1px 1px 0 #000;
}

.images:after {
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  position: fixed;
  z-index: 0;
}

.images li span{
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  position: fixed;
  z-index: -1;
  color: transparent;
  background-position: 50% 50%;
  background-size: cover;
  opacity: 0;
  -webkit-filter: brightness(50%);

  animation: animation1 50s linear infinite 0s;
}

.images li:nth-child(1) span {
  background-image: url("http://www.jambase.com/wp-content/uploads/2016/03/DSOTM-Crop.jpg")
}
.images li:nth-child(2) span {
  background-image: url("https://llwproductions.files.wordpress.com/2011/07/i-robot.jpg");
  animation-delay: 10s;
}
.images li:nth-child(3) span {
  background-image: url("https://i.pinimg.com/736x/1f/87/5c/1f875c2b411eb3d0247f6938ded3e859.jpg");
  animation-delay: 20s;
}
.images li:nth-child(4) span {
  background-image: url("http://flashwounds.com/wp-content/uploads/2014/05/black-album.jpg");
  animation-delay: 30s;
}
.images li:nth-child(5) span {
  background-image: url("https://i.scdn.co/image/a356c42b97313b3261e39477a550c4984d1ecf36");
  animation-delay: 40s;
}

@keyframes animation1 {

  0%{opacity: 0; animation-timing-function: ease-in}
  9%{opacity: 1; animation-timing-function: ease-out}
  20%{opacity:1}
  30%{opacity: 0}
  100%{opacity: 0}

}

</style>
