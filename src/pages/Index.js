export { default as Home } from './Home';
export { default as Login } from './Login';

export const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://kjm5546.iptime.org:8080/api';
//export const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:8080/api';
export const ACCESS_TOKEN = 'accessToken';

export const EMAIL_MAX_LENGTH = 40;

export const PASSWORD_MIN_LENGTH = 4;
export const PASSWORD_MAX_LENGTH = 20;