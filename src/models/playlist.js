import Track from './track';

export default {
  from: data => ({
    ownerEmail: data.owner.email,
    name: data.name,
    tracks: data.tracks.map(Track.from),
    id: data.id
  })
};
