import axios from 'axios';
import ArtistDetails from '../models/artistDetails';
import ArtistList from '../models/artistList';
import SearchAPI from './search';

export const apiKey = 'a8090a6b57c8d1fc53f6fdb6bd660e2b';
export const apiRoot = `http://ws.audioscrobbler.com/2.0/?api_key=${apiKey}&format=json`;
export const artistRoot = `${apiRoot}&method=artist.getinfo&artist=`;
export const topArtistRoot = `${apiRoot}&method=geo.gettopartists&country=canada`;

const getArtist = artistName => axios.get(`${artistRoot}${artistName}`);

const getArtistDetails = artistName =>
  getArtist(artistName).then(({ data }) => ArtistDetails.from(data.artist));

const getArtistList = artists => {
  const artistList = ArtistList.from(artists);
  return axios.all(artistList.map(a => SearchAPI.artists(a.name))).then(
    axios.spread((...results) =>
      results.map((r, i) => ({
        ...artistList[i],
        id: r[0] && r[0].id
      }))
    )
  );
};

const getSimilarArtists = artistName =>
  getArtist(artistName).then(({ data }) =>
    getArtistList(data.artist.similar.artist)
  );

const artistsToGet = 5;
const getTopArtists = () =>
  axios
    .get(topArtistRoot)
    .then(({ data }) =>
      getArtistList(data.topartists.artist.slice(0, artistsToGet))
    );

export default { getArtistDetails, getSimilarArtists, getTopArtists };
