import { createBrowserRouter } from "react-router-dom";
import CategoryLayout from "../Layout/CategoryLayout";
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
import CategoryProduct from "../Pages/CategoryProduct/CategoryProduct";
import AddProduct from "../Pages/Dashboard/AddProduct/AddProduct";
import AllSeller from "../Pages/Dashboard/AllSeller/AllSeller";
import Dashboard from "../Pages/Dashboard/Dashboard";
import MyProducts from "../Pages/Dashboard/MyProducts/MyProducts";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import NotFound from "../Pages/NotFound/NotFound";
import Register from "../Pages/Register/Register";

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
        path: "/category/:categoryName",
        element: <CategoryLayout />,
        children: [
          {
            path: "/category/:categoryName",
            element: <CategoryProduct />,
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
    element: <DashboardLayout />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/dashboard/my-orders",
        element: <Dashboard />,
      },
      {
        path: "/dashboard/add-product",
        element: <AddProduct />,
      },
      {
        path: "/dashboard/my-products",
        element: <MyProducts />,
      },
      {
        path: "/dashboard/all-sellers",
        element: <AllSeller />,
      },
      {
        path: "/dashboard/all-buyers",
        element: <Dashboard />,
      },
      {
        path: "/dashboard/reported-product",
        element: <Dashboard />,
      },
    ],
  },
]);

export default Routes;
