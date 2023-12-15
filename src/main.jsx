import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { BrowserRouter } from 'react-router-dom'
import { GlobalStyle } from './styles/global.jsx'
import { AuthContextProvider } from './contexts/AuthContext.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    <AuthContextProvider>
    <App />
    </AuthContextProvider>
    <GlobalStyle/>
    </BrowserRouter>
  
)
