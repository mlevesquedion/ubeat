const ArtistAlbums = {
  from: json => {
    const albumsData = json.results;
    return albumsData.map(albumData => ({
      id: albumData.collectionId,
      name: albumData.collectionName,
      url: albumData.collectionViewUrl,
      artworkUrl: albumData.artworkUrl100
    }));
  }
};

export default ArtistAlbums;
