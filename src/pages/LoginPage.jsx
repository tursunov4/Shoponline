// import {useForm} from "react-hook-form";
// import {LoginWrapper, LoginForm, CheckBoxWrapper} from "../styles/Login.jsx";
// import UserServices from "../../services/UserServices.jsx";
// import {useContext} from "react";
// import {AuthContext} from "../contexts/AuthContext.jsx";
// import {useNavigate} from "react-router-dom"

// export default function LoginPage() {
//     const {
//         register,
//         handleSubmit,
//         formState: {errors},
//     } = useForm();

//     const {setAuth, setAdmin} = useContext(AuthContext);
//     const navigate = useNavigate()
//     const onSubmit = async (data) => {
//         UserServices.authUser(data, setAuth, setAdmin, navigate);
//     };
//     return (
//         <LoginWrapper>
//             <LoginForm onSubmit={handleSubmit(onSubmit)}>
//                 <h2>ACCOUNT LOGIN</h2>
//                 <div>
//                     <label>Username</label>
//                     <input
//                         {...register("username", {required: "Name is require!"})}
//                         type="text"
//                     />
//                     {errors.username && (
//                         <p style={{color: "red"}}>This field is required</p>
//                     )}
//                 </div>
//                 <div>
//                     <label>Password</label>
//                     <input
//                         {...register("password", {required: "Password is require!"})}
//                         type="password"
//                     />
//                     {errors.password && (
//                         <p style={{color: "red"}}>This field is required</p>
//                     )}
//                 </div>
//                 <CheckBoxWrapper>
//                     <input {...register("remember")} type="checkbox"/>
//                     <span>Remember me</span>
//                 </CheckBoxWrapper>
//                 <div>
//                     <input type="submit" value="Вход"/>
//                 </div>
//             </LoginForm>
//         </LoginWrapper>
//     );
// }


import { useOktaAuth } from '@okta/okta-react';
import "./style.css"
import { useEffect, useState } from 'react';

const LoginPage = () => {
    const { authState, oktaAuth  } = useOktaAuth();
    const handleLogin = () => oktaAuth.signInWithRedirect()
    const handleLogout = () => oktaAuth.signOut();

   

   console.log(authState)
  return (
    <div>
        {
            !authState?.accessToken ? (
                <>
                <p>Please log in</p>
             
                <button type="button" onClick={handleLogin}>Login </button>
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

export default LoginPage