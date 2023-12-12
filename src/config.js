

export default {
  oidc: {
    clientId: "0oa9fr10rp1c1OZQ1697",
    issuer: 'https://exness-test.okta.com/',
    redirectUri: `${window.location.origin}/login/callback`,
    scopes: ['openid', 'profile', 'email'],
    pkce: true
  }
};
