const Album = {
  from: albumData => ({
    id: albumData.collectionId,
    name: albumData.collectionName,
    artist: albumData.artistName,
    artistId: albumData.artistId,
    artworkUrl: `${albumData.artworkUrl100.split('100x100')[0]}600x600${
      albumData.artworkUrl100.split('100x100')[1]
    }`,
    url: albumData.collectionViewUrl,
    trackCount: albumData.trackCount,
    date: albumData.releaseDate,
    year: albumData.releaseDate.split('-')[0],
    genre: albumData.primaryGenreName
  })
};

export default Album;
