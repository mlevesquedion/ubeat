import axios from 'axios';
import apiRoot from './apiRoot';
import SearchResults from '../models/searchResults';
import Headers from '../auth/headers';
import User from '../models/user';
import Artist from '../models/artist';
import Album from '../models/album';
import Track from '../models/track';

const searchRoot = `${apiRoot}search/`;

const searchLimit = 50;

const makeSearchRoot = what => `${searchRoot}${what}?limit=${searchLimit}&q=`;

const globalSearchRoot = makeSearchRoot('');
const userSearchRoot = makeSearchRoot('users');
const artistSearchRoot = makeSearchRoot('artists');
const albumSearchRoot = makeSearchRoot('albums');
const trackSearchRoot = makeSearchRoot('tracks');

const makeQuery = (root, constructor) => query =>
  axios
    .get(`${root}${encodeURIComponent(query)}`, Headers.auth())
    .then(({ data }) => constructor(data));

const users = makeQuery(userSearchRoot, u => User.from(u));
const artists = makeQuery(artistSearchRoot, artists_ =>
  artists_.results.map(a => Artist.from(a))
);
const albums = makeQuery(albumSearchRoot, albums_ =>
  albums_.results.map(a => Album.from(a))
);
const tracks = makeQuery(trackSearchRoot, tracks_ =>
  tracks_.results.map(t => Track.fromBackend(t))
);
const globals = makeQuery(globalSearchRoot, x => x.results);

const global = query =>
  axios
    .all([users(query), globals(query)])
    .then(
      axios.spread((userResults, otherResults) =>
        SearchResults.from([...userResults, ...otherResults])
      )
    );

export default {
  artists,
  albums,
  tracks,
  users,
  global
};
