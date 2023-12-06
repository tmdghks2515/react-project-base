import api from '../api';

const authService = {
  login: (params) => api.post('/login', params),
  logout: () => api.post('/logout'),
};

export default authService;
