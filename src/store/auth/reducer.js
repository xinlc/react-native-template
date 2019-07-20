import {
  API_TYPES, Status,
  ACTION_USER_LOGOUT,
  RESET_AUTH_STATE
} from '../actionsTypes';

const INITIAL_STATE = {
  signInStatus: Status.DEFAULT,
  signUpStatus: Status.DEFAULT,
  token: '',

  signInErrorMessage: '',
  signUpErrorMessage: '',
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case API_TYPES.SIGN_IN_LOADING:
      return {
        ...state,
        signInStatus: Status.LOADING,
        signInErrorMessage: '',
      };
    case API_TYPES.SIGN_IN_SUCCESS:
      return {
        ...state,
        signInStatus: Status.SUCCESS,
      };
    case API_TYPES.SIGN_IN_FAILURE:
      return {
        ...state,
        signInStatus: Status.ERROR,
        signInErrorMessage: payload.errorMessage
      };
    case API_TYPES.SIGN_UP_LOADING:
      return {
        ...state,
        signUpStatus: Status.LOADING,
        signUpErrorMessage: '',
      };
    case API_TYPES.SIGN_UP_SUCCESS:
      return {
        ...state,
        signUpStatus: Status.SUCCESS,
      };
    case API_TYPES.SIGN_UP_FAILURE:
      return {
        ...state,
        signUpStatus: Status.ERROR,
        signUpErrorMessage: payload.errorMessage,
      };
    case API_TYPES.CURRENT_USER_SUCCESS:
      return {
        ...state,
        token: payload.token,
      };
    case ACTION_USER_LOGOUT:
    case RESET_AUTH_STATE:
      return INITIAL_STATE;
    default:
      return state;
  }
};
