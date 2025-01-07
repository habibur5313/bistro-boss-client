import React, { useState } from "react";
import useCart from "../../CustomHooks/useCart";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  const [cart] = useCart();
  const [admin, setAdmin] = useState(true);

  return (
    <div className="container mx-auto">
      {admin ? (
        <>
        <div className="flex gap-10">
          <div className="w-72 py-10 px-4 bg-orange-500 min-h-screen">
            <h1 className="text-4xl text-center font-bold mt-20">
              BISTRO BOSS
            </h1>
            <p className="text-2xl text-center font-medium uppercase">
              restaurant
            </p>
            <ul className="mb-6 space-y-2 text-xl font-medium mt-10">
              <li>
                <NavLink to={'/dashboard/adminHome'}>ADMIN HOME</NavLink>
              </li>
              <li>
                <NavLink to={'/dashboard/addItems'}>ADD ITEMS</NavLink>
              </li>
              <li>
                <NavLink to={'/dashboard/manageItems'}>MANAGE ITEMS</NavLink>
              </li>
              <li>
                <NavLink to={'/dashboard/manageBookings'}>MANAGE BOOKINGS</NavLink>
              </li>
              <li>
                <NavLink to={'/dashboard/allUsers'}>ALL USERS</NavLink>
              </li>
              <li>
                <NavLink to={'/dashboard/myBooking'}>MY BOOKING</NavLink>
              </li>
              <div className="divider"></div>
              <li>
                <NavLink to={'/'}>HOME</NavLink>
              </li>
              <li>
                <NavLink to={'/menu'}>MENU</NavLink>
              </li>
              <li>
                <NavLink to={'/shop'}>SHOP</NavLink>
              </li>
              <li>
                <NavLink to={'/contact'}>CONTACT</NavLink>
              </li>
            </ul>
          </div>
          <div className="w-full">
                    <Outlet></Outlet>
          </div>
        </div></>
      ) : (
        <div className="flex gap-10">
          <div className="w-72 py-10 px-4 bg-orange-500 min-h-screen">
            <h1 className="text-4xl text-center font-bold mt-20">
              BISTRO BOSS
            </h1>
            <p className="text-2xl text-center font-medium uppercase">
              restaurant
            </p>
            <ul className="mb-6 space-y-2 text-xl font-medium mt-10">
              <li>
                <NavLink to={'/dashboard/userHome'}>USER HOME</NavLink>
              </li>
              <li>
                <NavLink to={'/dashboard/ADD ITEMS'}>RESERVATION</NavLink>
              </li>
              <li>
                <NavLink to={'/dashboard/paymentHistory'}>PAYMENT HISTORY</NavLink>
              </li>
              <li>
                <NavLink to={'/dashboard/myCart'}>MY CART</NavLink>
              </li>
              <li>
                <NavLink to={'/dashboard/addReview'}>ADD REVIEW</NavLink>
              </li>
              <li>
                <NavLink to={'/dashboard/myBooking'}>MY BOOKING</NavLink>
              </li>
              <div className="divider"></div>
              <li>
                <NavLink to={'/'}>HOME</NavLink>
              </li>
              <li>
                <NavLink to={'/menu'}>MENU</NavLink>
              </li>
              <li>
                <NavLink to={'/shop'}>SHOP</NavLink>
              </li>
              <li>
                <NavLink to={'/contact'}>CONTACT</NavLink>
              </li>
            </ul>
          </div>
          <div className="w-full">
                    <Outlet></Outlet>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
