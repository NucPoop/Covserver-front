export { default as Home } from './Home';
export { default as Login } from './Login';

export const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://jamjam.hopto.org:8180/api';
//export const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:8180/api';
export const ACCESS_TOKEN = 'accessToken';

export const EMAIL_MAX_LENGTH = 40;

export const PASSWORD_MIN_LENGTH = 4;
export const PASSWORD_MAX_LENGTH = 20;