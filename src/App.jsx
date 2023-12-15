
import {  Routes , Route } from 'react-router-dom';
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

        <Route path='/log' element={<LoginPage/>} />

        <Route path='/login/callback' element={<Loading/> } />
        </Route>
      </Routes>  

  )
}

export default App
