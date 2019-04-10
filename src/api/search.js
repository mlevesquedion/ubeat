import axios from 'axios';
import { apiRoot } from './constants';
import SearchResults from '../models/searchResults';
import Headers from '../auth/headers';

const searchRoot = `${apiRoot}search/`;

const makeSearchRoot = what => `${searchRoot}${what}?limit=50&q=`;

const globalSearchRoot = makeSearchRoot('');
const userSearchRoot = makeSearchRoot('users');
const artistSearchRoot = makeSearchRoot('artists');
const albumSearchRoot = makeSearchRoot('albums');
const trackSearchRoot = makeSearchRoot('tracks');

const encode = encodeURIComponent;

const makeQuery = root => query =>
  axios
    .get(`${root}${encode(query)}`, Headers.auth())
    .then(({ data }) => data.results);

const artists = makeQuery(artistSearchRoot);
const albums = makeQuery(albumSearchRoot);
const tracks = makeQuery(trackSearchRoot);

const users = query =>
  axios
    .get(`${userSearchRoot}${encode(query)}`, Headers.auth())
    .then(({ data }) => data);

const otherGlobals = makeQuery(globalSearchRoot);

const global = query =>
  axios
    .all([users(query), otherGlobals(query)])
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
