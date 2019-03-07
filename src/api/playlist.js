import axios from 'axios';
import { apiRoot } from './constants';
import Playlist from '../models/playlist';

const playlistRoot = `${apiRoot}playlists/`;
const axiosConfig = {
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
    'Access-Control-Allow-Origin': '*'
  }
};
const ownerEmail = 'utilisateur@gmail.com';

export const getPlaylist = id => (callBack, onError) => {
  axios
    .get(`${playlistRoot}${id}`)
    .then(({ data }) => callBack(Playlist.from(data)))
    .catch(onError);
};

export const getUserPlaylists = (callBack, onError) => {
  axios
    .get(`${playlistRoot}`)
    .then(({ data }) => data.filter(p => p.owner.email === ownerEmail))
    .then(userPlaylists => callBack(userPlaylists))

    .catch(onError);
};

export const postPlaylist = (callBack, onError) => {
  axios
    .post(`${playlistRoot}`, { name: 'unePlaylist513513463', owner: ownerEmail }, axiosConfig)
    .then(({ data }) => callBack(Playlist.from(data)))
    .catch(onError);
};
