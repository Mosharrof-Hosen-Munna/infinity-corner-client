import { createBrowserRouter } from "react-router-dom";
import CategoryLayout from "../Layout/CategoryLayout";
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
import Blog from "../Pages/Blog/Blog";
import CategoryProduct from "../Pages/CategoryProduct/CategoryProduct";
import AddProduct from "../Pages/Dashboard/AddProduct/AddProduct";
import AllBuyer from "../Pages/Dashboard/AllBuyer/AllBuyer";
import AllSeller from "../Pages/Dashboard/AllSeller/AllSeller";
import Dashboard from "../Pages/Dashboard/Dashboard";
import MyOrder from "../Pages/Dashboard/MyOrder/MyOrder";
import MyProducts from "../Pages/Dashboard/MyProducts/MyProducts";
import Payment from "../Pages/Dashboard/payment/Payment";
import ReportedProduct from "../Pages/Dashboard/ReportedProduct/ReportedProduct";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import NotFound from "../Pages/NotFound/NotFound";
import Register from "../Pages/Register/Register";
import AdminRoute from "./AdminRoute";
import PrivateRoute from "./PrivateRoute";
import SellerRoute from "./SellerRoute";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/category/:categoryName",
        element: <PrivateRoute><CategoryLayout /></PrivateRoute>,
        children: [
          {
            path: "/category/:categoryName",
            element: <PrivateRoute><CategoryProduct /></PrivateRoute>,
          },
        ]
      },
      
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],

  },
  {
    path: "/dashboard",
    element:<PrivateRoute> <DashboardLayout /></PrivateRoute>,
    children: [
      {
        path: "/dashboard",
        element: <PrivateRoute><Dashboard /></PrivateRoute>,
      },
      {
        path: "/dashboard/my-orders",
        element: <MyOrder />,
      },
      {
        path: "/dashboard/add-product",
        element: <SellerRoute><AddProduct /></SellerRoute>,
      },
      {
        path: "/dashboard/my-products",
        element: <SellerRoute><MyProducts /></SellerRoute>,
      },
      {
        path: "/dashboard/all-sellers",
        element:<AdminRoute><AllSeller /></AdminRoute> ,
      },
      {
        path: "/dashboard/all-buyers",
        element:<AdminRoute><AllBuyer   /></AdminRoute> ,
      },
      {
        path: "/dashboard/reported-product",
        element:<AdminRoute><ReportedProduct /></AdminRoute> ,
      },
      {
        path: "/dashboard/payment/:orderId",
        element: <Payment />,
      },
    ],
  },
]);

export default Routes;
