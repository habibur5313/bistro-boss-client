import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import MainLayout from "./Layout/MainLayout";
import Home from "./Pages/Home/Home/Home";
import Menu from "./Pages/Menu/Menu";
import Shop from "./Pages/Shop/Shop";
import AuthProvider from "./Context/AuthProvider";
import Regsiter from "./Pages/Authentication/Regsiter";
import Login from "./Pages/Authentication/Login";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import Dashboard from "./Pages/Cart/Dashboard";
import MyCart from "./Pages/Cart/User/MyCart";
import AllUsers from "./Pages/Cart/Admin/allUsers";
import PrivateRoute from "./ProtectRoute/PrivateRoute";
import AddItems from "./Pages/Cart/Admin/AddItems";
import ManageItems from "./Pages/Cart/Admin/ManageItems";
import AdminRoute from "./ProtectRoute/AdminRoute";
import ItemsUpdate from "./Pages/Cart/Admin/ItemsUpdate";
import Payment from "./Pages/Cart/User/Payment/Payment";
import UserHome from "./Pages/Cart/User/UserHome";
import AdminHome from "./Pages/Cart/Admin/AdminHome";

const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/menu",
        element: <Menu></Menu>,
      },
      {
        path: "/shop/:category",
        element: <Shop></Shop>,
      },
      {
        path: "/register",
        element: <Regsiter></Regsiter>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
  {
    path: "dashboard",
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [
      // normal user
      {
        path: 'myCart',
        element: <MyCart></MyCart>
      },
      {
        path: 'userHome',
        element: <UserHome></UserHome>
      },
      {
        path: 'payment',
        element: <Payment></Payment>
      },
      // admin
      {
        path: 'allUsers',
      element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
      },
      {
        path: 'addItems',
      element: <AdminRoute><AddItems></AddItems></AdminRoute>
      },
      {
        path: 'manageItems',
      element: <AdminRoute><ManageItems></ManageItems></AdminRoute>
      },
      {
        path: 'menus/update/:id',
        element: <AdminRoute><ItemsUpdate></ItemsUpdate></AdminRoute>,
        loader: (({params}) => fetch(`http://localhost:5000/menus/${params.id}`))
      },
      {
        path: 'adminHome',
        element: <AdminRoute><AdminHome></AdminHome></AdminRoute>
      }
    ]
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
    </QueryClientProvider>
  </StrictMode>
);
