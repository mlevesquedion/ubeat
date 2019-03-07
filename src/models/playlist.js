const Playlist = {
  from: data => {
    const owner = data.owner;
    return {
      owner: {
        name: owner.playlistOwner,
        email: owner.ownerEmail,
        id: owner.ownerId
      },
      name: data.playlistName,
      tracks: data.playlistTracks,
      id: data.playlistId
    };
  }
};

export default Playlist;
