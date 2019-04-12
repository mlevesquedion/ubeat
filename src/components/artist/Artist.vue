<template>
  <div>
    <AsyncContent :requestState="requestState" dataName="artist info">
      <ArtistInfo :artist="artist" />
    </AsyncContent>
    <AlbumGallery :artistId="id" />
    <AsyncContent :requestState="requestState" dataName="similar artists">
      <SimilarArtistsGallery :artistName="artist.name" />
    </AsyncContent>
  </div>
</template>

<script>
import ArtistInfo from './ArtistInfo';
import AlbumGallery from './AlbumGallery';
import SimilarArtistsGallery from './SimilarArtistsGallery';
import RequestState from '../utils/Async/requestState';
import ArtistAPI from '../../api/artist';
import AsyncContent from '../utils/Async/AsyncContent';

export default {
  name: 'Artist',
  data() {
    return {
      id: this.$route.params.id,
      artist: {},
      requestState: RequestState.LOADING
    };
  },
  created() {
    ArtistAPI.get(this.id)
      .then(this.setArtist)
      .catch(this.setError);
  },
  methods: {
    setArtist(artist) {
      this.artist = artist;
      this.requestState = RequestState.LOADED;
    },
    setError(_err) {
      this.requestState = RequestState.ERROR;
    }
  },
  components: {
    SimilarArtistsGallery,
    ArtistInfo,
    AlbumGallery,
    AsyncContent
  }
};
</script>

<style lang="scss" scoped></style>
