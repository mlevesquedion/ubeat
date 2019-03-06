const Album = {
  from: json => {
    const albumData = json.results[0];
    return {
      id: albumData.collectionId,
      name: albumData.collectionName,
      artist: albumData.artistName,
      artistId: albumData.artistId,
      artworkUrl: albumData.artworkUrl100,
      url: albumData.collectionViewUrl,
      nbTracks: albumData.trackCount,
      date: albumData.releaseDate,
      year: albumData.releaseDate.split('-')[0],
      genre: albumData.primaryGenreName
    }
      ;
  }
};

export default Album;
