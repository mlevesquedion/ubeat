<template>
  <nav class="navbar">
    <div class="navbar-brand">
      <router-link id="text-logo" class="is-size-2 navbar-item" to="/"
      >UBeat</router-link
      >
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
      <div id="nav-start" class="navbar-start">


      </div>




      <div class="navbar-end">

        <div class="navbar-item has-dropdown is-hoverable">

          <a class="navbar-link"> <router-link to="/user" class="navbar-item">
            <img class="is-rounded" src="@/static/images/default_profile.png" />
            &nbspUser</router-link>
          </a>

          <div class="navbar-dropdown">
            <a class="navbar-item">
              <i class="fas fa-cog" />  &nbspSettings
            </a>
            <a class="navbar-item">
              <i class="fas fa-sign-out-alt" /> &nbspSign out
            </a>
          </div>
        </div>

        <div class="navbar-item has-dropdown is-hoverable">
          <a id="nav-dropdown" class="navbar-link">Playlists</a>
          <div class="navbar-dropdown">
            <a class="navbar-item">Playlist 1</a>
            <a class="navbar-item">Playlist 2</a>
            <a class="navbar-item">Playlist 3</a>
          </div>
        </div>
        <div class="navbar-item">
          <input
            type="search"
            placeholder="Rechercher..."
            class="navbar-item"
          />
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
    font-family: $big-text;
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
  }

  #nav-start {
    display: flex;
    @media screen and (max-width: $burger-break) {
      display: none;
    }
  }

  #user-link {
    display: none;
    @media screen and (max-width: $burger-break) {
      display: flex;
    }
  }

  .navbar-item {
    @extend .is-unselectable;
  }
</style>
