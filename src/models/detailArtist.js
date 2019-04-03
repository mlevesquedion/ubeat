import detailArtistSanitizer from '../utils/detailArtistSanitizer';

const DetailArtist = {
  from: detailArtistData => ({
    name: detailArtistData.name,
    bio: detailArtistSanitizer.sanitizeBio(detailArtistData.bio.summary),
    image: detailArtistSanitizer.sanitizeImage(detailArtistData.image),
    similar: detailArtistData.similar.artist
  })
};
export default DetailArtist;
