import Homepage from "../pages/Homepage.jsx";
import ShopPage from "../pages/ShopPage.jsx";
import LoginPage from "../pages/LoginPage.jsx";
import MyHistoryPage from "../pages/MyHistoryPage.jsx";
import LogoutPage from "../pages/LogoutPage.jsx";
import OrdersPage from "../pages/OrdersPage.jsx";
import SettingsPage from "../pages/SettingsPage.jsx";
import Contact from "../pages/Contact.jsx";
import ProductsPage from "../pages/ProductsPage.jsx";
export const ROUTES = [
  {
    path: "/",
    element: <ShopPage />,
  },
  {
    path: "/about",
    element: <Homepage />,
  },
  {
    path: "/my-history",
    element: <MyHistoryPage />,
  },

  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <Homepage />,
  },
  {
    path: "/logout",
    element: <LogoutPage />,
  },
  {
    path:"contact-us" ,
    element: <Contact/>
  },
  // admin panel
  {
    path: "/orders",
    element: <OrdersPage />,
  },
  {
    path: "/products",
    element: <ProductsPage />,
  },
  {
    path: "/settings",
    element: <SettingsPage />,
  },
  {
    path: "*",
    element: <Homepage />,
  },
];

export default ROUTES;
