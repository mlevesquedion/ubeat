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
        <SearchInput />
        <div
          class="is-size-6-tablet is-size-5-desktop navbar-item has-dropdown is-hoverable"
        >
          <a @click="closeBurger" class="navbar-link">
            <router-link :to="userLink" class="navbar-item" id="user-container">
              <img
                class="is-rounded bumped-left"
                id="user-image"
                src="static/images/default_profile.png"
              />
              <span class="is-clipped">{{ username }}</span>
            </router-link>
          </a>
          <div class="navbar-dropdown">
            <a @click="closeBurger">
              <router-link class="navbar-item" to="/playlists">
                <i class="fas fa-list" />
                <span class="is-size-7-tablet is-size-6-desktop bumped-right"
                  >Playlists</span
                >
              </router-link>
            </a>
            <a @click="logout" class="navbar-item">
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
import authAPI from '../api/auth';
import SearchInput from './search/input/SearchInput';
import { authPath } from '../router/index';

export default {
  name: 'Navigation',
  components: { SearchInput },
  created() {
    this.$on('close-burger', this.closeBurger);
  },
  data() {
    return { isOpen: false };
  },
  computed: {
    username() {
      return this.$root.$data.name();
    },
    userLink() {
      return { name: 'User', params: { id: this.$root.$data.id() } };
    }
  },
  methods: {
    toggleBurger() {
      this.isOpen = !this.isOpen;
    },
    closeBurger() {
      this.isOpen = false;
    },
    logout() {
      authAPI
        .logout()
        .then(_ => {
          this.$router.push(authPath);
        })
        .catch(_ =>
          this.$toasted.show('Could not log you out!', { type: 'ubeat-error' })
        );
    }
  }
};
</script>

<style lang="scss" scoped>
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

.is-clipped {
  max-width: 18vw;
  @media screen and (max-width: $navbar-breakpoint) {
    max-width: 80vw;
  }
}
</style>
