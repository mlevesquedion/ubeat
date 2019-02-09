<template>
  <div>
    <div>
      <header>
        <div id="welcome-message">Welcome to UBeat!</div>
        <div id="sub-message">
          Manage your favorite albums, artists, playlists and songs. UBeat does it
          all and lets you listen to your music, your way.
        </div>

        <div id="sub-message2">Get started now !
          <div id="sub-message2-item">
            <i class="fa fa-arrow-circle-right"></i>
          </div>
        </div>
      </header>
    </div>

    <div>
      <ul class="images">
        <li>
          <span></span>
        </li>
        <li>
          <span></span>
        </li>
        <li>
          <span></span>
        </li>
        <li>
          <span></span>
        </li>
        <li>
          <span></span>
        </li>
        <li>
          <span></span>
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
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
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
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
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
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
    1px 1px 0 #000;
}

#sub-message2-item {
  font-size: 33px;
  border-color: $primary;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
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

.images li span {
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  position: absolute;
  z-index: -1;
  color: transparent;
  background-position: 30% 30%;
  background-size: cover;
  opacity: 0;

  animation: animation1 30s linear infinite 0s;
}

.images li:nth-child(1) span {
  background-image: url('https://upload.wikimedia.org/wikipedia/en/3/3b/Dark_Side_of_the_Moon.png');
}
.images li:nth-child(2) span {
  background-image: url('https://upload.wikimedia.org/wikipedia/en/c/c1/Harmonium_-_Si_On_Avait_Besoin_D%27Une_Cinqui%C3%A8me_Saison.jpg');
  animation-delay: 5s;
}
.images li:nth-child(3) span {
  background-image: url('https://upload.wikimedia.org/wikipedia/en/a/a4/Pink_Floyd%2C_Wish_You_Were_Here_%281975%29.png');
  animation-delay: 10s;
}
.images li:nth-child(4) span {
  background-image: url('https://upload.wikimedia.org/wikipedia/en/c/cb/Led_Zeppelin_-_Mothership.jpg');
  animation-delay: 15s;
}
.images li:nth-child(5) span {
  background-image: url('https://upload.wikimedia.org/wikipedia/en/1/12/Space_Jam_Soundtrack_Album_Cover.jpg');
  animation-delay: 20s;
}
.images li:nth-child(6) span {
  background-image: url('https://upload.wikimedia.org/wikipedia/en/0/0f/The_Alan_Parsons_Project_-_I_Robot.jpg');
  animation-delay: 25s;
}
@keyframes animation1 {
  0% {
    opacity: 0;
    animation-timing-function: ease-in;
  }
  9% {
    opacity: 1;
    animation-timing-function: ease-out;
  }
  20% {
    opacity: 1;
  }
  30% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}

@media screen and (max-width: 768px) {
  html {
    font-size: 40%;
  }
}
</style>
