import  { useEffect } from 'react';
import { useOktaAuth } from '@okta/okta-react';

const UserProfile = () => {
  const { authState, oktaAuth , authClient } = useOktaAuth();

  useEffect(() => {

      // If the user is authenticated, fetch user info
      if (authClient?.isLoginRedirect()) {
        try {
           authClient.handleLoginRedirect();
        } catch (e) {
          // log or display error details
        }
      } else if (! authClient?.isAuthenticated()) {
        // Start the browser based oidc flow, then parse tokens from the redirect callback url
        authClient.signInWithRedirect();
      } else {
        // User is authenticated
      }
  }, []);

  return (
    <div>
      <h1>User Profile</h1>
      {/* Display other user information if needed */}
    </div>
  );
};

export default UserProfile;
