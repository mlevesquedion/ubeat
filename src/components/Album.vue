<template>
  <div>
    <div class="container">
      <!--
      <div class="card">
        <div class="card-content">
          <div class="media">
            <div class="media-left">
              <figure class="image is-256x256">
                <img
                  id="albumCover"
                  src="https://upload.wikimedia.org/wikipedia/en/8/8b/Foo_Fighters_-_There_Is_Nothing_Left_to_Lose.jpg"
                  alt="Album cover"
                />
              </figure>
            </div>
            <div class="media-content">
              <p id="albumName" class="title is-4">
                There Is Nothing Left to Lose
              </p>
              <p class="subtitle is-6">
                <span>by </span><span id="artist">Foo Fighters</span
                ><span id="releaseYear"> (1998)</span>
              </p>
              <div class="content">
                <p id="albumDescription">
                  There Is Nothing Left to Lose is the third studio album by
                  American rock band Foo Fighters, released on November 2, 1999
                  by Roswell and RCA Records.
                </p>
                <div id="musicStyles">
                  <span class="tag is-success is-medium is-rounded">Rock</span>
                  <span class="tag is-success is-medium is-rounded"
                    >Alternative</span
                  >
                </div>
                <div class="box">
                  <a
                    id="albumLink"
                    href="https://itunes.apple.com/ca/album/there-is-nothing-left-to-lose/278229648"
                    style="display:inline-block;overflow:hidden;background:url(https://linkmaker.itunes.apple.com/en-us/badge-lrg.svg?releaseDate=&kind=artist&bubble=apple_music) no-repeat;width:158px;height:45px;"
                  ></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      -->
      <!--div class="media-left">
        <figure class="image is-256x256">
          <img
            id="albumCover"
            src="https://upload.wikimedia.org/wikipedia/en/8/8b/Foo_Fighters_-_There_Is_Nothing_Left_to_Lose.jpg"
            alt="Album cover"
          />
        </figure>
      </div-->

      <div class="container">
        <section class="section">
        <div class="columns">
          <!-- left -->
          <div class="column">
            <figure class="media-left">
              <img
                style="max-width: 256px"
                id="albumCover"
                src="https://upload.wikimedia.org/wikipedia/en/8/8b/Foo_Fighters_-_There_Is_Nothing_Left_to_Lose.jpg"
                alt="Album cover"
              />
            </figure>
            <div id="musicStyles">
              <span class="tag is-success is-medium is-rounded">Rock</span>
              <span class="tag is-success is-medium is-rounded"
              >Alternative</span
              >
            </div>
          </div>
          <!-- right -->
          <div class="column is-four-fifths">
            <p id="albumName" class="title is-1 has-text-light">
              There Is Nothing Left to Lose
            </p>
            <div class="subtitle is-6 has-text-grey-lighter">
              <p>
              <span>by </span><span id="artist">Foo Fighters</span
              ><span id="releaseYear"> (1998)</span>
              </p>
              <p>
            <span id="numberSongs">11</span><span> songs, </span>
            <span id="albumPlayTime">46</span><span> minutes</span>
              </p>
            </div>
            <p id="albumDescription">
              There Is Nothing Left to Lose is the third studio album by
              American rock band Foo Fighters, released on November 2, 1999 by
              Roswell and RCA Records.
            </p>

          </div>
        </div>
        </section>
      </div>

      <!--div class="level">
        <div class="level-item box has-text-centered">
          <p id="numberSongs" class="title">11</p>
          <p class="subtitle">Songs</p>
        </div>
        <div class="level-item box has-text-centered">
          <p id="albumPlayTime" class="title">00:46:19</p>
          <p class="subtitle">Play time</p>
        </div>
      </div-->

      <!--section class="info-tiles">
        <div class="tile is-ancestor has-text-centered">
          <div class="tile is-parent">
            <article class="tile is-child box">
              <p id="numberSongs" class="title">11</p>
              <p class="subtitle">Songs</p>
            </article>
          </div>
          <div class="tile is-parent">
            <article class="tile is-child box">
              <p id="albumPlayTime" class="title">00:46:19</p>
              <p class="subtitle">Play time</p>
            </article>
          </div>
          <div class="tile is-parent">
            <article class="tile is-child box">
              <a
                id="albumLink"
                href="https://itunes.apple.com/ca/album/there-is-nothing-left-to-lose/278229648"
                style="display:inline-block;overflow:hidden;background:url(https://linkmaker.itunes.apple.com/en-us/badge-lrg.svg?releaseDate=&kind=artist&bubble=apple_music) no-repeat;width:158px;height:45px;"
              ></a>
            </article>
          </div>
        </div>
      </section-->
      <section class="section">
      <div id="listSongs" class="content">
        <ol>
          <li class="has-background-dark">
            <div class="level is-mobile is-bordered">
              <div class="level-left">
                <div id="songName">Stacked Actors</div>
                <div>
                  <span> (</span><span id="playTime">4:17</span><span>)</span>
                </div>
              </div>
              <div class="level-right">
                <div class="field is-grouped has-addons">
                  <p class="control">
                    <a class="has-text-light">
                      <span class="icon is-medium">
                        <i class="far fa-pause-circle"></i>
                      </span>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div class="level is-mobile">
              <div class="level-left">
                <div id="songName">Breakout</div>
                <div>
                  <span> (</span><span id="playTime">3:21</span><span>)</span>
                </div>
              </div>
              <div class="level-right">
                <div class="field is-grouped has-addons">
                  <p class="control">
                    <a class="has-text-light">
                      <span class="icon is-medium">
                        <i class="far fa-play-circle"></i>
                      </span>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </li>
          <li class="has-background-dark">
            <div class="level is-mobile">
              <div class="level-left">
                <div id="songName">Learn to Fly</div>
                <div>
                  <span> (</span><span id="playTime">3:58</span><span>)</span>
                </div>
              </div>
              <div class="level-right">
                <div class="field is-grouped has-addons">
                  <p class="control">
                    <a class="has-text-light">
                      <span class="icon is-medium">
                        <i class="far fa-play-circle"></i>
                      </span>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div class="level is-mobile">
              <div class="level-left">
                <div id="songName">Gimme Stitches</div>
                <div>
                  <span> (</span><span id="playTime">3:42</span><span>)</span>
                </div>
              </div>
              <div class="level-right">
                <div class="field is-grouped has-addons">
                  <p class="control">
                    <a class="has-text-light">
                      <span class="icon is-medium">
                        <i class="far fa-pause-circle"></i>
                      </span>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </li>
          <li class="has-background-dark">
            <div class="level is-mobile">
              <div class="level-left">
                <div id="songName">Generator</div>
                <div>
                  <span> (</span><span id="playTime">3:48</span><span>)</span>
                </div>
              </div>
              <div class="level-right">
                <div class="field is-grouped has-addons">
                  <p class="control">
                    <a class="has-text-light">
                      <span class="icon is-medium">
                        <i class="far fa-play-circle"></i>
                      </span>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div class="level is-mobile">
              <div class="level-left">
                <div id="songName">Aurora</div>
                <div>
                  <span> (</span><span id="playTime">5:49</span><span>)</span>
                </div>
              </div>
              <div class="level-right">
                <div class="field is-grouped has-addons">
                  <p class="control">
                    <a class="icon has-text-light">
                      <span class="icon is-medium">
                        <i class="fa fa-play"></i>
                      </span>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </li>
          <li class="has-background-dark">
            <div class="level is-mobile">
              <div class="level-left">
                <div id="songName">Live-in Skin</div>
                <div>
                  <span> (</span><span id="playTime">3:52</span><span>)</span>
                </div>
              </div>
              <div class="level-right">
                <div class="field is-grouped has-addons">
                  <p class="control">
                    <a class="has-text-light">
                      <span class="icon is-medium">
                        <i class="fas fa-play-circle"></i>
                      </span>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div class="level is-mobile">
              <div class="level-left">
                <div id="songName">Next Year</div>
                <div>
                  <span> (</span><span id="playTime">4:37</span><span>)</span>
                </div>
              </div>
              <div class="level-right">
                <div class="field is-grouped has-addons">
                  <p class="control">
                    <a class="has-text-light">
                      <span class="icon is-medium">
                        <i class="far fa-play-circle"></i>
                      </span>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </li>
          <li class="has-background-dark">
            <div class="level is-mobile">
              <div class="level-left">
                <div id="songName">Headwires</div>
                <div>
                  <span> (</span><span id="playTime">4:37</span><span>)</span>
                </div>
              </div>
              <div class="level-right">
                <div class="field is-grouped has-addons">
                  <p class="control">
                    <a class="has-text-light">
                      <span class="icon is-medium">
                        <i class="far fa-play-circle"></i>
                      </span>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div class="level is-mobile">
              <div class="level-left">
                <div id="songName">Ain't it the Life</div>
                <div>
                  <span> (</span><span id="playTime">4:15</span><span>)</span>
                </div>
              </div>
              <div class="level-right">
                <div class="field is-grouped has-addons">
                  <p class="control">
                    <a class="has-text-light">
                      <span class="icon is-medium">
                        <i class="far fa-play-circle"></i>
                      </span>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </li>
          <li class="has-background-dark">
            <div class="level is-mobile">
              <div class="level-left">
                <div id="songName">M.I.A</div>
                <div>
                  <span> (</span><span id="playTime">4:03</span><span>)</span>
                </div>
              </div>
              <div class="level-right">
                <div class="field is-grouped has-addons">
                  <p class="control">
                    <a class="has-text-light">
                      <span class="icon is-medium">
                        <i class="far fa-play-circle"></i>
                      </span>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </li>
        </ol>

      </div>
      </section>
      <footer class="footer" style="background-color:#27272b">
        <div class="has-text-centered">
          <a
            id="albumLink"
            href="https://itunes.apple.com/ca/album/there-is-nothing-left-to-lose/278229648"
            style="display:inline-block;overflow:hidden;background:url(https://linkmaker.itunes.apple.com/en-us/badge-lrg.svg?releaseDate=&kind=artist&bubble=apple_music) no-repeat;width:158px;height:45px;"
          ></a>
        </div>
      </footer>
    </div>
  </div>


</template>

<style>
</style>
