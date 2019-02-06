<template>
  <div>
    <h1 id="home">Home</h1>
    <span>
      <img
        class="album-cover"
        src="https://upload.wikimedia.org/wikipedia/en/7/76/TheWallImmersion.jpg"
      />

      <img
        class="album-cover"
        src="https://upload.wikimedia.org/wikipedia/en/3/32/IronMaiden_NumberOfBeast.jpg"
      />

      <img
        class="album-cover"
        src="https://upload.wikimedia.org/wikipedia/en/a/a1/Radiohead.okcomputer.albumart.jpg"
      />
      <img
        class="album-cover"
        src="https://upload.wikimedia.org/wikipedia/en/d/d1/Plasticbeach452.jpg"
      />
      <img
        class="album-cover"
        src="https://upload.wikimedia.org/wikipedia/en/1/12/Space_Jam_Soundtrack_Album_Cover.jpg"
      />
      <img
        class="album-cover"
        src="https://upload.wikimedia.org/wikipedia/en/b/bd/Toto_Toto_IV.jpg"
      />
      <img
        class="album-cover"
        src="https://images-na.ssl-images-amazon.com/images/I/41YHS3PKQHL.jpg"
      />
      <img
        class="album-cover"
        src="https://upload.wikimedia.org/wikipedia/en/0/0f/The_Alan_Parsons_Project_-_I_Robot.jpg"
      />
      <img class="album-cover" src="https://i.redd.it/pts7n7ojjol11.jpg" />
    </span>
    <div id="welcome-message"><br />Welcome to UBeat!</div>
    <div id="sub-message">
      <br />
      <br />
      Manage your favorite albums, artists, playlists and songs. UBeat does it
      all and lets you listen to your music, your way.
    </div>

    <span id="sub-message2">
      Get started now !

      <span id="sub-message2-item">
        <i class="fa fa-arrow-circle-right"></i>
      </span>
    </span>

    <br />
    <div>
      <span>
        <img
          class="album-cover"
          src="https://upload.wikimedia.org/wikipedia/en/3/3b/Dark_Side_of_the_Moon.png"
        />

        <img
          class="album-cover"
          src="https://upload.wikimedia.org/wikipedia/en/e/e3/Led_Zeppelin_-_Physical_Graffiti.jpg"
        />

        <img
          class="album-cover"
          src="https://upload.wikimedia.org/wikipedia/en/5/5f/Led_Zeppelin_-_Led_Zeppelin_III.png"
        />
        <img
          class="album-cover"
          src="https://upload.wikimedia.org/wikipedia/en/5/57/GenesisSellingEngland.jpg"
        />
        <img
          class="album-cover"
          src="https://upload.wikimedia.org/wikipedia/en/e/ee/The_Lamb_Lies_Down_on_Broadway.jpg"
        />
        <img
          class="album-cover"
          src="https://upload.wikimedia.org/wikipedia/en/a/a4/Pink_Floyd%2C_Wish_You_Were_Here_%281975%29.png"
        />
        <img
          class="album-cover"
          src="https://upload.wikimedia.org/wikipedia/en/e/e8/TAPP-TalesOfImagination.jpg"
        />
        <img
          class="album-cover"
          src="https://upload.wikimedia.org/wikipedia/en/f/fb/FMacRumours.PNG"
        />
        <img
          class="album-cover"
          src="https://upload.wikimedia.org/wikipedia/en/c/c1/Harmonium_-_Si_On_Avait_Besoin_D%27Une_Cinqui%C3%A8me_Saison.jpg"
        />
      </span>
    </div>
  </div>
</template>

<style>
.custom-bg {
  background-color: #27272b;
}

#home {
  color: #2fc563;
  font-family: 'Permanent Marker', cursive;
}
#welcome-message {
  color: #2fc563;
  font-family: 'Permanent Marker', cursive;
  font-size: 500%;
  height: 2.1em;
  display: flex;
  align-items: center;
  justify-content: center;
}

#sub-message {
  color: #2fc563;
  font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;
  font-size: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
}

#sub-message2 {
  color: #2fc563;
  font-family: 'Permanent Marker', cursive;
  font-size: 110%;
  display: flex;
  align-items: center;
  justify-content: center;
}

#sub-message2-item {
  font-size: 33px;
  border-color: #2fc563;
}

.album-cover {
  -webkit-filter: brightness(40%);
  width: 10.85%;
}
</style>
