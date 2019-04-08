const Album = {
  from: albumData => {
    const urlParts = albumData.artworkUrl100.split('100x100');
    return {
      id: albumData.collectionId,
      name: albumData.collectionName,
      artist: albumData.artistName,
      artistId: albumData.artistId,
      url: albumData.collectionViewUrl,
      src: `${urlParts[0]}600x600${urlParts[1]}`,
      trackCount: albumData.trackCount,
      date: albumData.releaseDate,
      year: albumData.releaseDate.split('-')[0],
      genre: albumData.primaryGenreName
    };
  }
};

export default Album;
