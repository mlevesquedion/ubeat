const Playlist = {
  from: json => {
    const playlistData = json.results;
    return {
      owner: {
        name: playlistData.playlistOwner,
        email: playlistData.ownerEmail,
        id: playlistData.ownerId
      },
      name: playlistData.playlistName,
      tracks: playlistData.playlistTracks,
      id: playlistData.playlistId
    };
  }
};

export default Playlist;
