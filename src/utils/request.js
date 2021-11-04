const Fly = require('flyio/dist/npm/fly');

const fly = new Fly();

fly.config.baseURL = `${process.env.VUE_APP_BASE_URL}/api`;

fly.interceptors.request.use(
  request => request,
  error => Promise.reject(error),
);

fly.interceptors.response.use(
  response => response,
  error => Promise.reject(error),
);

const fly2 = new Fly();

fly2.config.baseURL = `${process.env.VUE_APP_BASE_URL}`;

fly2.interceptors.response.use(
  response => response,
  error => Promise.reject(error),
);

export { fly, fly2 };
