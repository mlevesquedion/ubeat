import axios from 'axios';
import ArtistDetails from '../models/artistDetails';
import SimilarArtists from '../models/similarArtists';
import SearchAPI from './search';

export const apiKey = 'a8090a6b57c8d1fc53f6fdb6bd660e2b';
export const artistRoot = `http://ws.audioscrobbler.com/2.0/?api_key=${apiKey}\
&method=artist.getinfo&format=json&artist=`;

const getRaw = artistName => axios.get(`${artistRoot}${artistName}`);

const get = artistName =>
  getRaw(artistName).then(({ data }) => ArtistDetails.from(data.artist));

const similarArtists = artistName =>
  getRaw(artistName).then(({ data }) => {
    const artists = SimilarArtists.from(data.artist.similar.artist);
    return axios
      .all(artists.map(a => SearchAPI.artists(a.name)))
      .then(
        axios.spread((...results) =>
          results.map((r, i) => ({ ...artists[i], id: r[0].artistId }))
        )
      );
  });

export default { get, similarArtists };
