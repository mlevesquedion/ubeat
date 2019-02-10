<template>
  <div>
    <div>
      <header>
        <h1
          id="welcome-message"
          class="title is-primary is-size-1-desktop is-size-2-tablet is-size-4-mobile flex-centered"
        >Welcome to UBeat!</h1>
        <p
          id="summary-message"
          class="is-size-3-desktop is-size-4-tablet is-size-5-mobile is-primary flex-centered"
        >
          Manage your favorite albums, artists, playlists and songs. UBeat does it
          all and lets you listen to your music, your way.
        </p>
        <h2
          id="punchline-message"
          class="subtitle is-size-2-desktop is-size-3-tablet is-size-5-mobile is-primary flex-centered"
        >
          <p>Get started now !</p>
          <router-link
            to="/user"
            id="get-started-arrow"
            class="is-size-2-desktop is-size-3-tablet is-size-5-mobile"
          >
            <i class="fa fa-arrow-circle-right bumped-right is-primary"></i>
          </router-link>
        </h2>
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

#welcome-message {
  font-family: $stylish-text;
  text-shadow: $black-border;
  padding-top: 1em;
}

#summary-message {
  font-size: 150%;
  padding-top: 2em;
  text-align: center;
  padding-left: 20px;
  padding-right: 20px;
  text-shadow: $black-border;
}

#punchline-message {
  font-family: $stylish-text;
  font-size: 110%;
  padding-top: 2em;
  text-shadow: $black-border;
}

#get-started-arrow {
  border-color: $primary;
  text-shadow: $black-border;
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
  position: fixed;
  z-index: -1;
  color: transparent;
  background-position: 50% 50%;
  background-size: cover;
  opacity: 0;
  -webkit-filter: brightness(45%);

  animation: crossfade 50s linear infinite 0s;
}

.images li:nth-child(1) span {
  background-image: url('http://www.jambase.com/wp-content/uploads/2016/03/DSOTM-Crop.jpg');
}
.images li:nth-child(2) span {
  background-image: url('https://llwproductions.files.wordpress.com/2011/07/i-robot.jpg');
  animation-delay: 10s;
}
.images li:nth-child(3) span {
  background-image: url('https://i.pinimg.com/736x/1f/87/5c/1f875c2b411eb3d0247f6938ded3e859.jpg');
  animation-delay: 20s;
}
.images li:nth-child(4) span {
  background-image: url('http://flashwounds.com/wp-content/uploads/2014/05/black-album.jpg');
  animation-delay: 30s;
}
.images li:nth-child(5) span {
  background-image: url('https://i.scdn.co/image/a356c42b97313b3261e39477a550c4984d1ecf36');
  animation-delay: 40s;
}

@keyframes crossfade {
  0% {
    opacity: 0;
    animation-timing-function: ease-in;
  }
  9% {
    opacity: 1;
    animation-timing-function: ease-out;
  }
  15% {
    opacity: 1;
  }
  22% {
    opacity: 1;
  }
  30% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}
</style>
