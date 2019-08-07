// @flow
import { API_TYPES, RESET_AUTH_STATE } from '../actionsTypes';

/**
 |--------------------------------------------------
 | DEFINE SERVICE ACTION INTERFACE
 |--------------------------------------------------
 */


export const signIn = (username: string, password: string) => ({
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


/**
 |--------------------------------------------------
 | DEFINE REDUCER ACTION INTERFACE
 |--------------------------------------------------
 */

export const resetAuthState = () => ({
  type: RESET_AUTH_STATE,
});
