const ArtistAlbums = {
  from: json => {
    const albumsData = json.results;
    return albumsData.map(albumData => {
      const urlParts = albumData.artworkUrl100.split('100x100');
      return {
        id: albumData.collectionId,
        name: albumData.collectionName,
        url: albumData.collectionViewUrl,
        artworkUrl: `${urlParts[0]}600x600${urlParts[1]}`
      };
    });
  }
};

export default ArtistAlbums;
