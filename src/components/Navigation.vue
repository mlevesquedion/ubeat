<template>
  <nav class="navbar">
    <div class="navbar-brand">
      <router-link id="text-logo" class="is-size-2 navbar-item" to="/">UBeat</router-link>
      <a
        id="burger"
        role="button"
        class="navbar-burger"
        aria-label="menu"
        aria-expanded="false"
        @click="toggleBurger"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div id="nav-menu" class="navbar-menu">
      <div class="navbar-end">
        <div id="search-bar-container" class="navbar-item is-marginless">
          <input class="is-size-6 search-bar" type="search" placeholder="Search ...">
        </div>
        <router-link to="/artist" class="navbar-item">Artist</router-link>
        <router-link to="/album" class="navbar-item">Album</router-link>
        <div class="navbar-item has-dropdown is-hoverable">
          <a id="nav-dropdown" class="navbar-link">Playlists</a>
          <div class="navbar-dropdown">
            <a class="navbar-item">Playlist 1</a>
            <a class="navbar-item">Playlist 2</a>
            <a class="navbar-item">Playlist 3</a>
          </div>
        </div>
        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">
            <router-link to="/user" id="user-container" class="navbar-item">
              <img class="is-rounded bumped-left" src="@/static/images/default_profile.png">
              <span>User</span>
            </router-link>
          </a>
          <div class="navbar-dropdown">
            <a class="navbar-item">
              <i class="fas fa-cog"/>
              <span class="bumped-right">Settings</span>
            </a>
            <a class="navbar-item">
              <i class="fas fa-sign-out-alt"/>
              <span class="bumped-right">Sign out</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    toggleClassById(id, cls) {
      const el = document.getElementById(id);
      el.classList.toggle(cls);
    },
    toggleBurger() {
      this.toggleClassById('burger', 'is-active');
      this.toggleClassById('nav-menu', 'is-active');
    }
  }
};
</script>

<style scoped lang="scss">
@import '@/assets/sass/styles.scss';
#text-logo {
  color: $background;
  font-family: $style-text;
  background-color: $primary;
}

#text-logo:hover {
  color: $background-light;
}

#text-logo:active {
  color: $background-lighter;
}

#nav-menu {
  padding-top: 0;
  padding-right: 0;
}

#user-container {
  @extend .is-paddingless;
  @media screen and (max-width: $navbar-breakpoint) {
    display: flex;
    align-items: center;
  }
}

.navbar-item {
  @extend .is-unselectable;
}

.bumped-right {
  margin-left: 10px;
}

.bumped-left {
  margin-right: 10px;
}

.search-bar {
  height: 40px;
  padding: 10px;
  @media screen and (max-width: $navbar-breakpoint) {
    width: 100%;
  }
}
</style>
