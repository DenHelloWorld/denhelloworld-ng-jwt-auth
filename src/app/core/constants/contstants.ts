const apiUrl = 'http://localhost:4402/api';
export const apiEndpoint = {
  Auth: {
    Register: `${apiUrl}/users/register`,
    Login: `${apiUrl}/users/login`,
    Me: `${apiUrl}/users/me`,
  },
};

export const LocalStorage = {
  token: 'USER_TOKEN',
};
