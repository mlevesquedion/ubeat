<template>
  <nav class="navbar">
    <div class="navbar-brand">
      <router-link
        id="text-logo"
        class="is-size-2-desktop is-size-3-mobile is-size-3-tablet navbar-item"
        to="/"
      >UBeat</router-link>
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
          <input
            class="is-size-6-tablet is-size-5-desktop search-bar"
            type="search"
            placeholder="Search ..."
          >
        </div>
        <div class="navbar-item has-dropdown is-hoverable">
          <a id="nav-dropdown" class="is-size-6-tablet is-size-5-desktop navbar-link">Playlists</a>
          <div class="navbar-dropdown">
            <a class="navbar-item is-size-7-tablet is-size-6-desktop">Playlist 1</a>
            <a class="navbar-item is-size-7-tablet is-size-6-desktop">Playlist 2</a>
            <a class="navbar-item is-size-7-tablet is-size-6-desktop">Playlist 3</a>
          </div>
        </div>
        <div class="is-size-6-tablet is-size-5-desktop navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">
            <router-link to="/user" id="user-container" class="navbar-item">
              <img
                id="user-image"
                class="is-rounded bumped-left"
                src="@/static/images/default_profile.png"
              >
              <span>User</span>
            </router-link>
          </a>
          <div class="navbar-dropdown">
            <a class="navbar-item">
              <i class="fas fa-cog"/>
              <span class="is-size-7-tablet is-size-6-desktop bumped-right">Settings</span>
            </a>
            <a class="navbar-item">
              <i class="fas fa-sign-out-alt"/>
              <span class="is-size-7-tablet is-size-6-desktop bumped-right">Sign out</span>
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
  font-family: $stylish-text;
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
  @media screen and (min-width: $navbar-breakpoint) {
    width: 200px;
  }
  @media screen and (min-width: $desktop) {
    width: 300px;
  }
  @media screen and (max-width: $navbar-breakpoint) {
    width: 100%;
  }
}

#user-image {
  display: flex;
  width: 36px;
  height: 36px;
  // Have to do this to override Bulma behavior...
  max-height: 36px !important;
  @media screen and (max-width: $desktop) {
    width: 28px;
    height: 28px;
  }
}
</style>
