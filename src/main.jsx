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
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: 'myCart',
        element: <MyCart></MyCart>
      },
      {
        path: 'allUsers',
        element: <AllUsers></AllUsers>
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
