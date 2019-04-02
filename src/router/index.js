import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Album from '@/components/album/Album';
import Artist from '@/components/artist/Artist';
import User from '@/components/User';
import Playlists from '@/components/playlists/Playlists';
import NotFound from '@/components/NotFound';
import SearchResults from '../components/search/SearchResults';
import Auth from '../components/auth/Auth';
import authAPI from '../api/auth';
import ArtistSearchResults from '../components/search/ArtistSearchResults';
import AlbumSearchResults from '../components/search/AlbumSearchResults';
import TrackSearchResults from '../components/search/TrackSearchResults';
import UserSearchResults from '../components/search/UserSearchResults';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/auth',
      name: 'Login - Signup',
      component: Auth
    },
    {
      path: '/artist/:id',
      name: 'Artist',
      component: Artist
    },
    {
      path: '/album/:id',
      name: 'Album',
      component: Album
    },
    {
      path: '/user',
      name: 'User',
      component: User
    },
    {
      path: '/playlists',
      name: 'Playlists',
      component: Playlists
    },
    {
      path: '*',
      name: 'Not found',
      component: NotFound
    },
    {
      path: '/search/artist/:query',
      name: 'Artist Results',
      component: ArtistSearchResults
    },
    {
      path: '/search/album/:query',
      name: 'Album Results',
      component: AlbumSearchResults
    },
    {
      path: '/search/track/:query',
      name: 'Track Results',
      component: TrackSearchResults
    },
    {
      path: '/search/user/:query',
      name: 'User Results',
      component: UserSearchResults
    },
    {
      path: '/search/global/:query',
      name: 'Search results',
      component: SearchResults
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.path === '/auth') {
    next();
  }
  authAPI
    .isAuthenticated()
    .then(_ => {
      next();
    })
    .catch(_ => {
      next('/auth');
    });
});

export default router;
