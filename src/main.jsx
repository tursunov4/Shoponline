import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { BrowserRouter } from 'react-router-dom'
import { GlobalStyle } from './styles/global.jsx'
import {QueryClient, QueryClientProvider} from "react-query";
import { AuthContextProvider } from './contexts/AuthContext.jsx';
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    <AuthContextProvider>
    {/* <QueryClientProvider client={queryClient}> */}
    <App />
    {/* </QueryClientProvider> */}
    </AuthContextProvider>
    <GlobalStyle/>
    </BrowserRouter>
  
)
