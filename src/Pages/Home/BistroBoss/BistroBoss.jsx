import React from 'react';
import chiefService from '../../../assets/home/chef-service.jpg'

const BistroBoss = () => {
                    return (
                                        <div className='py-40 mt-20' style={{backgroundImage: `url(${chiefService})`}}>
                                               <div className='bg-white rounded-xl py-20 mx-40'>
                                                            <h2 className='text-center text-3xl font-semibold uppercase '>Bistro Boss</h2>
                                                            <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
                                        </div>             
                                        </div>
                    );
};

export default BistroBoss;