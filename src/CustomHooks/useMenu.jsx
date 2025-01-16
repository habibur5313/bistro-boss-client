import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import useAxiosPublic from './useAxiosPublic';

const useMenu = () => {
                    const axiosPublic = useAxiosPublic()
                    const {data : menus = [],refetch} = useQuery({
                                        queryKey: ['menus'],queryFn: async() => {
                                      const res = await axiosPublic.get('/menus')
                                           return res.data           
                                        }
                    })
                    return [menus,refetch]
};

export default useMenu;
