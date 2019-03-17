import Track from './track';

export default {
  fromBackend: data => ({
    ownerEmail: data.owner.email,
    name: data.name,
    tracks: data.tracks.map(t => Track.fromBackend(t)),
    id: data.id
  }),
  toBackend: playlistData => ({
    owner: {
      email: playlistData.ownerEmail
    },
    name: playlistData.name,
    tracks: playlistData.tracks.map(t => Track.toBackend(t)),
    id: playlistData.id
  })
};
