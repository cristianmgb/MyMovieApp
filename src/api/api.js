const BASE_URL_AUTH = 'https://simple-signin-signup.herokuapp.com/api/';

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
}

export default new Api();
