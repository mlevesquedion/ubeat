<template>
  <nav class="navbar">
    <div class="navbar-menu">
      <div class="navbar-start">
        <div class="navbar-item">
          <input type="search" placeholder="Rechercher..." class="navbar-item">
        </div>
        <div class="navbar-item has-dropdown is-hoverable">
          <a id="nav-dropdown" class="navbar-link">Playlists</a>
          <div class="navbar-dropdown">
            <a class="navbar-item">Playlist 1</a>
            <a class="navbar-item">Playlist 2</a>
            <a class="navbar-item">Playlist 3</a>
          </div>
        </div>
        <router-link to="/album" class="navbar-item">Album</router-link>
        <router-link to="/artist" class="navbar-item">Artist</router-link>
      </div>
      <div class="navbar-end">
        <div class="navbar-item">
          <a class="button is-primary is-rounded">
            <i class="fas fa-sign-out-alt"/>
          </a>
          <a class="button is-primary is-rounded">
            <i class="fas fa-cog"/>
          </a>
        </div>
        <div class="navbar-item">
          <img class="is-rounded" src="@/static/images/default_profile.png">
        </div>
        <p class="navbar-item">Utilisateur</p>
      </div>
    </div>
    <div class="navbar-brand">
      <router-link id="text-logo" class="is-size-1 navbar-item" to="/">UBeat</router-link>
      <a role="button" class="navbar-burger is-size-1" aria-label="menu" aria-expanded="false">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
  </nav>
</template>


<style></style>
