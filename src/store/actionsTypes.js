const REQUEST = 'REQUEST';
const LOADING = 'LOADING';
const SUCCESS = 'SUCCESS';
const FAILURE = 'FAILURE';

const STATUS_DEFAULT = 'NOT_STARTED';
const STATUS_LOADING = 'LOADING';
const STATUS_SUCCESS = 'SUCCESS';
const STATUS_ERROR = 'ERROR';

const suffixTypes = [REQUEST, LOADING, SUCCESS, FAILURE];

function createRequestTypes(prefix = '', bases, suffixes = suffixTypes) {
  const req = {};
  bases.forEach((base) => {
    suffixes.forEach((suffix) => {
      req[`${base}_${suffix}`] = `${prefix}_${base}_${suffix}`;
    });
  });
  return req;
}

// REST API
export const API_TYPES = createRequestTypes('API_TYPE', [
  'SIGN_IN', // Sign in already existing user
  'SIGN_UP', // Create new user account
  'CURRENT_USER', // Fetch details of current logged in user
], suffixTypes);

console.log('api----------->', API_TYPES);

export const Status = Object.freeze({
  STATUS_DEFAULT, STATUS_LOADING, STATUS_SUCCESS, STATUS_ERROR
});

export const CUSTOMER_TOKEN = 'CUSTOMER_TOKEN';

/**
 |--------------------------------------------------
 | DEFINE ACTION TYPE
 | this will be reused in the reducer and service
 | FORMAT:
 | for reducer action [FILENAME]_[ACTION]_TYPE
 | for service action [FILENAME]_[ACTION]_SERVICE_TYPE
 |--------------------------------------------------
 */

export const ACTION_USER_LOGOUT/* : ACTION_USER_LOGOUT */ = 'USER_LOGOUT';
export const RESET_AUTH_STATE/* : RESET_AUTH_STATE */ = 'RESET_AUTH_STATE';
