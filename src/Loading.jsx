

import { useOktaAuth } from '@okta/okta-react';
import {useNavigate} from "react-router-dom"
import { useEffect } from 'react';
const Loading = () => {
  const { authState, oktaAuth  } = useOktaAuth();
  const navigate = useNavigate()
  // useEffect(() => {
  //   if (!authState?.isAuthenticated) {
  //     // Avval autentifikatsiya qilish uchun qaytib keyin ma'lumotlarni olish
  //     oktaAuth.loginWithRedirect();
  //   } else {
  //     // Autentifikatsiya muvaffaqiyatli amalga oshgach, kerakli sahifaga qaytish
  //     navigate('/');
  //   }
  // }, [authState?.isAuthenticated, history, oktaAuth]);

  return (
    <div>Hello
    
    </div>
  )
}

export default Loading