const Artist = {
  from: json => {
    const albumData = json.results[0];
    return {
      id: albumData.collectionId,
      name: albumData.collectionName,
      artist: albumData.artistName,
      artId: albumData.artistId,
      artworkUrl: albumData.artworkUrl100,
      url: albumData.collectionViewUrl,
      nbTracks: albumData.trackCount,
      date: albumData.releaseDate,
      genre: albumData.primaryGenreName
    };
  }
};

export default Artist;
