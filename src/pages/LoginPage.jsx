
import { useOktaAuth } from '@okta/okta-react';
import "./style.css"
import { useEffect, useState } from 'react';

const LoginPage = () => {
    const { authState, oktaAuth  } = useOktaAuth();
    const handleLogin = () => oktaAuth.signInWithRedirect()
    const handleLogout = () => oktaAuth.signOut();
  return (
    <div>
        {
            !authState?.accessToken ? (
                <>
                <div className="loginPage__wrapp">
                <h4>Please log in</h4>             
                <button type="button" onClick={handleLogin}>Login </button>
                </div>
              </>
            ):(
                <>
                <div className="loginPage__wrapp">
                <h4>You&apos;re logged in!</h4>
                <button type="button" onClick={handleLogout}>Logout</button>
                </div>
              </>  
            )
        }
    </div>
  )
}

export default LoginPage