import Track from './track';

export default {
  from: data => ({
    ownerEmail: data.owner.email,
    name: data.name,
    tracks: data.tracks.map(t => Track.fromBackend(t)),
    id: data.id
  })
};
