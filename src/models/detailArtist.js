const DetailArtist = {
  from: detailArtistData => ({
    name: detailArtistData.name,
    bio: detailArtistData.bio.summary
    // image: detailArtistData.image,
    // similar: detailArtistData.similar.artist
  })
};

export default DetailArtist;
