import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Album from '@/components/album/Album';
import Artist from '@/components/artist/Artist';
import User from '@/components/User';
import Playlists from '@/components/playlists/Playlists';
import NotFound from '@/components/NotFound';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
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
    }
  ]
});
