<template>
  <div>
  <div>
   <header>
    <div id="welcome-message"> Welcome to UBeat!</div>
    <div id="sub-message">

      Manage your favorite albums, artists, playlists and songs. UBeat does it
      all and lets you listen to your music, your way.
    </div>

    <div id="sub-message2">
      Get started now !

      <div id="sub-message2-item">
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

<style lang="scss">
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
  font-size: 110%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 2em;
  padding-left: 4px;
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
  position: absolute;
  z-index: -1;
  color:transparent;
  background-position: 30% 30%;
  background-size: cover;
  opacity: 0;

  animation: animation1 30s linear infinite 0s;
}

.images li:nth-child(1) span {
  background-image: url("http://pinkfloydarchives.com/Discog/SAfrica/LP/DSOTM/DSOTM1/FC.jpg")
}
.images li:nth-child(2) span {
  background-image: url("https://fanart.tv/fanart/music/0310f78a-3395-46e9-9986-342480de490e/albumcover/si-on-avait-besoin-dune-cinquime-saison-51bbae14234b6.jpg");
  animation-delay: 5s;
}
.images li:nth-child(3) span {
  background-image: url("https://www.merchandisingplaza.ca/55195/2/Magnets-Pink-Floyd-Pink-Floyd---Wywh-Cover-Magnet--Emi-Music-officially-licensed-product--l.jpg");
  animation-delay: 10s;
}
.images li:nth-child(4) span {
  background-image: url("http://is2.mzstatic.com/image/thumb/Music62/v4/14/bc/e7/14bce756-cb44-d4b3-ffee-762d25d1ab88/source/600x600bb.jpg");
  animation-delay: 15s;
}
.images li:nth-child(5) span {
  background-image: url("https://i.scdn.co/image/a356c42b97313b3261e39477a550c4984d1ecf36");
  animation-delay: 20s;
}
.images li:nth-child(6) span {
  background-image: url("https://llwproductions.files.wordpress.com/2011/07/i-robot.jpg");
  animation-delay: 25s;
}
@keyframes animation1 {

  0%{opacity: 0; animation-timing-function: ease-in}
  9%{opacity: 1; animation-timing-function: ease-out}
  20%{opacity:1}
  30%{opacity: 0}
  100%{opacity: 0}

}

  @media screen and (max-width: 768px){
    html {
      font-size: 38%;
    }
  }
  @media screen and (max-width: 960px) and (min-width: 769px){
  html {
    font-size: 70%;
    }
  }
</style>
