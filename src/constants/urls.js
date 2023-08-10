import FrontendConfig from "../assets/js/config";

const URL_BASE = FrontendConfig.api_endpoint;
export const URL_APP = FrontendConfig.current_url;
export const URL_VIEW = FrontendConfig.site_url;
export const URL_COUNTERS = `${URL_BASE}/counters`;
export const URL_DOMAIN = `${URL_BASE}/domain`;
export const URL_SIGN_UP = `${URL_BASE}/user/signup`;
export const URL_SIGN_IN = `${URL_BASE}/user/signin`;
export const URL_SIGN_IN_MFA = `${URL_BASE}/user/signin/mfa`;
export const URL_SIGN_IN_SSO = `${URL_BASE}/user/signin/sso`;
export const URL_SIGN_IN_WEBAUTHN = `${URL_BASE}/user/signin/webauthn`;

