const Playlist = {
  from: data => ({
    ownerEmail: data.owner.email,
    name: data.name,
    tracks: data.tracks,
    id: data.id
  })
};

export default Playlist;
