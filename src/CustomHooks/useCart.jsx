import React, { useEffect } from "react";
import useAxios from "./useAxios";
import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";

const useCart = () => {
  const axiosSecure = useAxios();
  const {user} = useAuth()

    const { isPending, error, data : cart=[],refetch } = useQuery({
      queryKey: ["cart",user?.email],
      queryFn: () =>
        axiosSecure.get(`/carts/${user?.email}`).then(({ data }) => {
          
          return data;

        }),
    });

  return [cart,refetch]
};

export default useCart;
