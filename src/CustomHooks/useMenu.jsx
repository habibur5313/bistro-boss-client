import React, { useEffect, useState } from 'react';

const useMenu = () => {
                    const [menus,setMenus] = useState([])
                    useEffect(() => {
                                        fetch('http://localhost:5000/menus')
                                        .then(res => res.json())
                                        .then(data => {
                                                            setMenus(data)
                                        })
                    },[])
                    return menus
};

export default useMenu;
