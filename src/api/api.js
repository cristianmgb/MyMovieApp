const BASE_URL_AUTH = 'https://simple-signin-signup.herokuapp.com/api/';
const BASE_URL_MOVIE = 'https://api.themoviedb.org/3/movie/';
const API_KEY = '?api_key=75c5cda14e2525f32fb5f6ca48910e9c';

export const SIGNIN = BASE_URL_AUTH + '/signin';
export const SIGNUP = BASE_URL_AUTH + '/signup';

class Api {
  async post(url, data) {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };
    try {
      const response = await fetch(url, options);
      return await response.json();
    } catch (error) {
      console.log(error);
    }
  }

  async getMovies(endPoint) {
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    };
    try {
      const response = await fetch(
        BASE_URL_MOVIE + endPoint + API_KEY,
        options,
      );
      return await response.json();
    } catch (e) {
      console.log(e);
    }
  }
}

export default new Api();
