import bioSanitizer from '../utils/bioSanitizer';

const DetailArtist = {
  from: detailArtistData => ({
    name: detailArtistData.name,
    bio: bioSanitizer.sanitize(detailArtistData.bio.summary),
    image: detailArtistData.image,
    similar: detailArtistData.similar.artist
  })
};
export default DetailArtist;
