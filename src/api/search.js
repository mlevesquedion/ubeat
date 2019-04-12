import axios from 'axios';
import apiRoot from './apiRoot';
import SearchResults from '../models/searchResults';
import Headers from '../auth/headers';

const searchRoot = `${apiRoot}search/`;

const searchLimit = 50;

const makeSearchRoot = what => `${searchRoot}${what}?limit=${searchLimit}&q=`;

const globalSearchRoot = makeSearchRoot('');
const userSearchRoot = makeSearchRoot('users');
const artistSearchRoot = makeSearchRoot('artists');
const albumSearchRoot = makeSearchRoot('albums');
const trackSearchRoot = makeSearchRoot('tracks');

const makeQuery = root => query =>
  axios
    .get(`${root}${encodeURIComponent(query)}`, Headers.auth())
    .then(({ data }) => data);

const makeQueryWithResults = root => query =>
  makeQuery(root)(query).then(data => data.results);

const users = makeQuery(userSearchRoot);
const artists = makeQueryWithResults(artistSearchRoot);
const albums = makeQueryWithResults(albumSearchRoot);
const tracks = makeQueryWithResults(trackSearchRoot);
const globals = makeQueryWithResults(globalSearchRoot);

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
