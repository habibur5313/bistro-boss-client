import React from 'react';
import Banner from '../Banner/Banner';
import OrderSection from '../OrderSection/OrderSection';
import MenuSection from '../Menu/MenuSection';
import MenuBanner from '../MenuBanner/MenuBanner';
import Testimonials from '../Testimonials/Testimonials';
import BistroBoss from '../BistroBoss/BistroBoss';

const Home = () => {
                    return (
                                        <div>
                                         <Banner></Banner>  
                                         <OrderSection></OrderSection> 
                                         <BistroBoss></BistroBoss>
                                         <MenuSection></MenuSection> 
                                         <MenuBanner></MenuBanner> 
                                         <Testimonials></Testimonials>              
                                        </div>
                    );
};

export default Home;