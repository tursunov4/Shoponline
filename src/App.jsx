
import { useNavigate , Routes , Route } from 'react-router-dom';
import { Security      } from '@okta/okta-react';
import { OktaAuth, toRelativeUrl } from '@okta/okta-auth-js';
import config from './config';
import Sidebar from "./components/layouts/Sidebar"
import Shopage from "./pages/ShopPage"
import LoginPage from './pages/LoginPage';
import Loading from './pages/Loading';
import UserProfile from './pages/Profile';
import OrdersPage from './pages/OrdersPage';
import NotFound from './pages/NotFound';
function App() {
  const token = sessionStorage.getItem("token")


  return (
   
      <Routes>
         <Route path='*' element={<NotFound/>} />
        <Route path='/' element={<Sidebar/>}>
        <Route index element={<Shopage/>}/>
        {
          token &&  <Route path='/profil' element={<UserProfile/>}/>
        }
        {
          token && <Route path='/orders' element={<OrdersPage/>} />
        }
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/login/callback' element={<Loading/> } />
        </Route>
      </Routes>  

  )
}

export default App
