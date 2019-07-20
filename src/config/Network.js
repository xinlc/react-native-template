
let API_ROOT_DOMAIN = 'http://www.xxx.com'; // 生产环境
if (process.env.NODE_ENV === 'development') {
  API_ROOT_DOMAIN = 'http://localhost:8080/'; // 开发环境
}

const AUTH_URL = `${API_ROOT_DOMAIN}auth/`;
const Network = {};

Network.API_ROOT_DOMAIN = API_ROOT_DOMAIN;
Network.API_AUTH_URL = AUTH_URL;

export default Network;
