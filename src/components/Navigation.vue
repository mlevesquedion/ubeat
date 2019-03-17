<template>
  <nav class="navbar">
    <div class="navbar-brand">
      <router-link
        class="is-size-2-desktop is-size-3-mobile is-size-3-tablet navbar-item"
        id="text-logo"
        to="/"
        >UBeat
      </router-link>
      <a
        :class="{ 'is-active': isOpen }"
        @click="toggleBurger"
        aria-expanded="false"
        aria-label="menu"
        class="navbar-burger"
        id="burger"
        role="button"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div :class="{ 'is-active': isOpen }" class="navbar-menu" id="nav-menu">
      <div class="navbar-end">
        <div class="navbar-item is-marginless" id="search-bar-container">
          <input
            class="is-size-6-tablet is-size-5-desktop search-bar"
            placeholder="Search ..."
            type="search"
          />
        </div>

        <router-link
          @click.native="closeBurger"
          class="navbar-item is-size-6-tablet is-size-5-desktop hover-white"
          to="/playlists"
        >
          Playlists
        </router-link>
        <div
          class="is-size-6-tablet is-size-5-desktop navbar-item has-dropdown is-hoverable"
        >
          <a @click="closeBurger" class="navbar-link">
            <router-link class="navbar-item" id="user-container" to="/user">
              <img
                class="is-rounded bumped-left"
                id="user-image"
                src="static/images/default_profile.png"
              />
              <span>User</span>
            </router-link>
          </a>
          <div class="navbar-dropdown">
            <a class="navbar-item">
              <i class="fas fa-cog" />
              <span class="is-size-7-tablet is-size-6-desktop bumped-right"
                >Settings</span
              >
            </a>
            <a class="navbar-item">
              <i class="fas fa-sign-out-alt" />
              <span class="is-size-7-tablet is-size-6-desktop bumped-right"
                >Sign out</span
              >
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return { isOpen: false };
  },
  methods: {
    toggleBurger() {
      this.isOpen = !this.isOpen;
    },
    closeBurger() {
      this.isOpen = false;
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

.hover-white:hover {
  color: white;
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
