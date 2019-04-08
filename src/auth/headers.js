import CookieMonster from './cookieMonster';

export default {
  auth: () => ({
    headers: {
      Authorization: CookieMonster.getToken()
    }
  })
};
