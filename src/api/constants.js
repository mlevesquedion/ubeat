export const apiRoot = 'http://ubeat.herokuapp.com/unsecure/';

export const RequestState = Object.freeze({
  LOADING: Symbol('loading'),
  LOADED: Symbol('loaded'),
  ERROR: Symbol('error')
});
