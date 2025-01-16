import React from 'react';
import useAxios from './useAxios';
import useAuth from './useAuth';
import { useQuery } from '@tanstack/react-query';

const useAllUsers = () => {
                    const axiosSecure = useAxios();
                    const {user} = useAuth()
                  
                      const { isPending, error, data : users=[],refetch } = useQuery({
                        queryKey: ["users"],
                        queryFn: () =>
                          axiosSecure.get(`/users`).then(({ data }) => {
                            return data;
                  
                          }),
                      });
                  
                    return [users,refetch]
};

export default useAllUsers;