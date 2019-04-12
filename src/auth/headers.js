import Token from './token';

export default {
  auth: () => ({
    headers: {
      Authorization: Token.get()
    }
  })
};
