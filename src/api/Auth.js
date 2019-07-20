import Request from '../utils/Request';

export function signIn(data) {
  return Request({
    url: '/system/login',
    method: 'post',
    data
  });
}

export function signUp(data) {
  return Request({
    url: '/system/login',
    method: 'post',
    data
  });
}

export function getInfo(token) {
  return Request({
    url: '/user/info',
    method: 'get',
    params: { token }
  });
}

export function logout() {
  return Request({
    url: '/user/logout',
    method: 'post'
  });
}
