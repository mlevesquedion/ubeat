import axios from 'axios';
import { secureRoot } from './constants';
import CookieMonster from '../auth/cookieMonster';
import SearchResults from '../models/searchResults';

const searchRoot = `${secureRoot}search/`;

const makeSearchRoot = what => `${searchRoot}${what}?q=`;

const globalSearchRoot = makeSearchRoot('');
const userSearchRoot = makeSearchRoot('users');
const artistSearchRoot = makeSearchRoot('artists');
const albumSearchRoot = makeSearchRoot('albums');
const trackSearchRoot = makeSearchRoot('tracks');

const authorization = () => ({
  headers: { Authorization: CookieMonster.getToken() }
});

const encode = encodeURIComponent;

const makeQuery = root => query =>
  axios
    .get(`${root}${encode(query)}`, authorization())
    .then(({ data }) => data.results);

const artists = makeQuery(artistSearchRoot);
const albums = makeQuery(albumSearchRoot);
const tracks = makeQuery(trackSearchRoot);

const users = query =>
  axios
    .get(`${userSearchRoot}${encode(query)}`, authorization())
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
