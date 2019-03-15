const ArtistAlbums = {
  from: json => {
    const albumsData = json.results;
    return albumsData.map(albumData => ({
      id: albumData.collectionId,
      name: albumData.collectionName,
      url: albumData.collectionViewUrl,
      artworkUrl: `${albumData.artworkUrl100.split('100x100')[0]}600x600${
        albumData.artworkUrl100.split('100x100')[1]
      }`
    }));
  }
};

export default ArtistAlbums;
