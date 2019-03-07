const Album = {
  from: albumData => ({
    id: albumData.collectionId,
    name: albumData.collectionName,
    artist: albumData.artistName,
    artistId: albumData.artistId,
    artworkUrl: albumData.artworkUrl100,
    url: albumData.collectionViewUrl,
    trackCount: albumData.trackCount,
    date: albumData.releaseDate,
    year: albumData.releaseDate.split('-')[0],
    genre: albumData.primaryGenreName
  })
};

export default Album;
