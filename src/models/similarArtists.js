const SimilarArtists = {
  from: artists =>
    artists.map(a => ({
      name: a.name,
      src: a.image[5]['#text'],
      url: a.url
    }))
};

export default SimilarArtists;
