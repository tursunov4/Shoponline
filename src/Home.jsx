
import { useOktaAuth } from '@okta/okta-react';

const Home = () => {
    const { authState, oktaAuth } = useOktaAuth();
    const handleLogin = () => oktaAuth.signInWithRedirect().then((res)=>{
        console.log(res.data)
    });
    const handleLogout = () => oktaAuth.signOut();
  return (
    <div>
        {
            !authState?.isAuthenticated ? (
                <>
                <p>Please log in</p>
                <button type="button" onClick={handleLogin}>Login</button>
              </>
            ):(
                <>
                <p>You&apos;re logged in!</p>
                <button type="button" onClick={handleLogout}>Logout</button>
              </>  
            )
        }
    </div>
  )
}

export default Home