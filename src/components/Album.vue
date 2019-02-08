<template>
  <div>
    <div class="container">
      <div class="card">
        <div class="card-content">
          <div class="media">
            <div class="media-left">
              <figure class="image is-128x128">
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
            </div>
          </div>

          <div class="content">
            <p id="albumDescription">
              There Is Nothing Left to Lose is the third studio album by
              American rock band Foo Fighters, released on November 2, 1999 by
              Roswell and RCA Records.
            </p>
            <div id="musicStyles">
              <span class="tag is-success is-medium is-rounded">Rock</span>
              <span class="tag is-success is-medium is-rounded"
                >Alternative</span
              >
            </div>
          </div>
        </div>
      </div>
      <section class="info-tiles">
        <div class="tile is-ancestor has-text-centered">
          <div class="tile is-parent">
            <article class="tile is-child box is-">
              <p id="numberSongs" class="title">11</p>
              <p class="subtitle">Songs</p>
            </article>
          </div>
          <div class="tile is-parent">
            <article class="tile is-child box">
              <p id="playTime" class="title">00:46:19</p>
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
      </section>
      <div class="card-table">
        <div class="content">
          <table class="table is-fullwidth is-striped">
            <tbody>
              <tr>
                <td width="5%"><i class="fa fa-bell-o"></i></td>
                <td>1. Stacked Actors (4:17)</td>
                <td>
                  <div class="field is-grouped has-addons">
                    <p class="control">
                      <a class="button is-success">
                        <span class="icon is-small">
                          <i class="far fa-play-circle"></i>
                        </span>
                      </a>
                    </p>
                    <p class="control">
                      <a class="button is-success" disabled>
                        <span class="icon is-small">
                          <i class="far fa-pause-circle"></i>
                        </span>
                      </a>
                    </p>
                    <p class="control">
                      <a class="button is-success" disabled>
                        <span class="icon is-small">
                          <i class="far fa-stop-circle"></i>
                        </span>
                      </a>
                    </p>
                  </div>
                </td>
              </tr>
              <tr>
                <td width="5%"><i class="fa fa-bell-o"></i></td>
                <td>2. Breakout (3:21)</td>
                <td>
                  <div class="field is-grouped has-addons">
                    <p class="control">
                      <a class="button is-success">
                        <span class="icon is-small">
                          <i class="far fa-play-circle"></i>
                        </span>
                      </a>
                    </p>
                    <p class="control">
                      <a class="button is-success" disabled>
                        <span class="icon is-small">
                          <i class="far fa-pause-circle"></i>
                        </span>
                      </a>
                    </p>
                    <p class="control">
                      <a class="button is-success" disabled>
                        <span class="icon is-small">
                          <i class="far fa-stop-circle"></i>
                        </span>
                      </a>
                    </p>
                  </div>
                </td>
              </tr>
              <tr>
                <td width="5%"><i class="fa fa-bell-o"></i></td>
                <td>3. Learn to Fly (3:58)</td>
                <td>
                  <div class="field is-grouped has-addons">
                    <p class="control">
                      <a class="button is-success">
                        <span class="icon is-small">
                          <i class="far fa-play-circle"></i>
                        </span>
                      </a>
                    </p>
                    <p class="control">
                      <a class="button is-success" disabled>
                        <span class="icon is-small">
                          <i class="far fa-pause-circle"></i>
                        </span>
                      </a>
                    </p>
                    <p class="control">
                      <a class="button is-success" disabled>
                        <span class="icon is-small">
                          <i class="far fa-stop-circle"></i>
                        </span>
                      </a>
                    </p>
                  </div>
                </td>
              </tr>
              <tr>
                <td width="5%"><i class="fa fa-bell-o"></i></td>
                <td>4. Gimme Stitches (3:42)</td>
                <td>
                  <div class="field is-grouped has-addons">
                    <p class="control">
                      <a class="button is-success">
                        <span class="icon is-small">
                          <i class="far fa-play-circle"></i>
                        </span>
                      </a>
                    </p>
                    <p class="control">
                      <a class="button is-success" disabled>
                        <span class="icon is-small">
                          <i class="far fa-pause-circle"></i>
                        </span>
                      </a>
                    </p>
                    <p class="control">
                      <a class="button is-success" disabled>
                        <span class="icon is-small">
                          <i class="far fa-stop-circle"></i>
                        </span>
                      </a>
                    </p>
                  </div>
                </td>
              </tr>
              <tr>
                <td width="5%"><i class="fa fa-bell-o"></i></td>
                <td>5. Generator (3:48)</td>
                <td>
                  <div class="field is-grouped has-addons">
                    <p class="control">
                      <a class="button is-success is-loading">
                        <span class="icon is-small">
                          <i class="far fa-play-circle"></i>
                        </span>
                      </a>
                    </p>
                    <p class="control">
                      <a class="button is-success">
                        <span class="icon is-small">
                          <i class="far fa-pause-circle"></i>
                        </span>
                      </a>
                    </p>
                    <p class="control">
                      <a class="button is-success">
                        <span class="icon is-small">
                          <i class="far fa-stop-circle"></i>
                        </span>
                      </a>
                    </p>
                  </div>
                </td>
              </tr>
              <tr>
                <td width="5%"><i class="fa fa-bell-o"></i></td>
                <td>6. Aurora (5:49)</td>
                <td>
                  <div class="field is-grouped has-addons">
                    <p class="control">
                      <a class="button is-success">
                        <span class="icon is-small">
                          <i class="far fa-play-circle"></i>
                        </span>
                      </a>
                    </p>
                    <p class="control">
                      <a class="button is-success" disabled>
                        <span class="icon is-small">
                          <i class="far fa-pause-circle"></i>
                        </span>
                      </a>
                    </p>
                    <p class="control">
                      <a class="button is-success" disabled>
                        <span class="icon is-small">
                          <i class="far fa-stop-circle"></i>
                        </span>
                      </a>
                    </p>
                  </div>
                </td>
              </tr>
              <tr>
                <td width="5%"><i class="fa fa-bell-o"></i></td>
                <td>7. Live-in Skin (3:52)</td>
                <td>
                  <div class="field is-grouped has-addons">
                    <p class="control">
                      <a class="button is-success">
                        <span class="icon is-small">
                          <i class="far fa-play-circle"></i>
                        </span>
                      </a>
                    </p>
                    <p class="control">
                      <a class="button is-success" disabled>
                        <span class="icon is-small">
                          <i class="far fa-pause-circle"></i>
                        </span>
                      </a>
                    </p>
                    <p class="control">
                      <a class="button is-success" disabled>
                        <span class="icon is-small">
                          <i class="far fa-stop-circle"></i>
                        </span>
                      </a>
                    </p>
                  </div>
                </td>
              </tr>
              <tr>
                <td width="5%"><i class="fa fa-bell-o"></i></td>
                <td>8. Next Year (4:37)</td>
                <td>
                  <div class="field is-grouped has-addons">
                    <p class="control">
                      <a class="button is-success">
                        <span class="icon is-small">
                          <i class="far fa-play-circle"></i>
                        </span>
                      </a>
                    </p>
                    <p class="control">
                      <a class="button is-success" disabled>
                        <span class="icon is-small">
                          <i class="far fa-pause-circle"></i>
                        </span>
                      </a>
                    </p>
                    <p class="control">
                      <a class="button is-success" disabled>
                        <span class="icon is-small">
                          <i class="far fa-stop-circle"></i>
                        </span>
                      </a>
                    </p>
                  </div>
                </td>
              </tr>
              <tr>
                <td width="5%"><i class="fa fa-bell-o"></i></td>
                <td>9. Headwires (4:37)</td>
                <td>
                  <div class="field is-grouped has-addons">
                    <p class="control">
                      <a class="button is-success">
                        <span class="icon is-small">
                          <i class="far fa-play-circle"></i>
                        </span>
                      </a>
                    </p>
                    <p class="control">
                      <a class="button is-success" disabled>
                        <span class="icon is-small">
                          <i class="far fa-pause-circle"></i>
                        </span>
                      </a>
                    </p>
                    <p class="control">
                      <a class="button is-success" disabled>
                        <span class="icon is-small">
                          <i class="far fa-stop-circle"></i>
                        </span>
                      </a>
                    </p>
                  </div>
                </td>
              </tr>
              <tr>
                <td width="5%"><i class="fa fa-bell-o"></i></td>
                <td>10. Ain't it the Life (4:15)</td>
                <td>
                  <div class="field is-grouped has-addons">
                    <p class="control">
                      <a class="button is-success">
                        <span class="icon is-small">
                          <i class="far fa-play-circle"></i>
                        </span>
                      </a>
                    </p>
                    <p class="control">
                      <a class="button is-success" disabled>
                        <span class="icon is-small">
                          <i class="far fa-pause-circle"></i>
                        </span>
                      </a>
                    </p>
                    <p class="control">
                      <a class="button is-success" disabled>
                        <span class="icon is-small">
                          <i class="far fa-stop-circle"></i>
                        </span>
                      </a>
                    </p>
                  </div>
                </td>
              </tr>
              <tr>
                <td width="5%"><i class="fa fa-bell-o"></i></td>
                <td>11. M.I.A (4:03)</td>
                <td>
                  <div class="field is-grouped has-addons">
                    <p class="control">
                      <a class="button is-success">
                        <span class="icon is-small">
                          <i class="far fa-play-circle"></i>
                        </span>
                      </a>
                    </p>
                    <p class="control">
                      <a class="button is-success" disabled>
                        <span class="icon is-small">
                          <i class="far fa-pause-circle"></i>
                        </span>
                      </a>
                    </p>
                    <p class="control">
                      <a class="button is-success" disabled>
                        <span class="icon is-small">
                          <i class="far fa-stop-circle"></i>
                        </span>
                      </a>
                    </p>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
