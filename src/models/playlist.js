const Playlist = {
  from: json => {
    const ownerData = json.owner;
    const playlistName = json.name;
    const playlistTracks = json.tracks;
    const playlistId = json.id;
    return {
      owner: {
        name: ownerData.playlistOwner,
        email: ownerData.ownerEmail,
        id: ownerData.ownerId
      },
      name: playlistName,
      tracks: playlistTracks,
      id: playlistId
    };
  }
};

export default Playlist;
