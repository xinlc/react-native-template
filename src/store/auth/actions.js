import { API_TYPES, RESET_AUTH_STATE } from '../actionsTypes';

export const signIn = (username, password) => ({
  type: API_TYPES.SIGN_IN_REQUEST,
  payload: {
    username,
    password
  }
});

export const signUp = payload => ({
  type: API_TYPES.SIGN_UP_REQUEST,
  payload,
});

export const resetAuthState = () => ({
  type: RESET_AUTH_STATE,
});
