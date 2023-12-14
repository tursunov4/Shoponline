
import { useNavigate , Routes , Route } from 'react-router-dom';
import { Security ,LoginCallback,   } from '@okta/okta-react';
import { OktaAuth, toRelativeUrl } from '@okta/okta-auth-js';
import config from './config';
import Sidebar from "./components/layouts/Sidebar"
import Shopage from "./pages/ShopPage"
import Contact from './pages/Contact';
import LoginPage from './pages/LoginPage';
import Loading from './pages/Loading';
import UserProfile from './pages/Profile';
const oktaAuth = new OktaAuth(config.oidc);
function App() {
  const navigate = useNavigate();
  const restoreOriginalUri = (_oktaAuth,  originalUri) => {
    navigate(toRelativeUrl(originalUri || '/', window.location.origin));
  };


  return (
    <Security oktaAuth={oktaAuth} restoreOriginalUri={restoreOriginalUri}>
      <Routes>
        <Route path='/' element={<Sidebar/>}>
        <Route index element={<Shopage/>}/>
        <Route path='/contact-us' element={<Contact/>} />
        <Route path='/profile' element={<UserProfile/>}/>
        <Route path='/login/callback' element={<Loading/> } />
        </Route>
      </Routes>  
  </Security>
  )
}

export default App
