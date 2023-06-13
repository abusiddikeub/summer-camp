import React, { useEffect, useState } from 'react';
import Title from '../../../Shared/Title/Title';
import ClassShow from '../ClassShow/ClassShow';
import UseClassHooks from '../../../../Component/Hooks/UseClassHooks';

const PopularClass = () => {
            
               const [classes] = UseClassHooks();

               return (
                            <section className='my-20'>
                                <div>
                             <Title
                             title={'Popular Class Section'}
                             ></Title> 
                <div className="grid md:grid-cols-3 gap-10">
               {classes.map(item =>
               
               <ClassShow
               key={item._id} 
               item={item}
               
               ></ClassShow>)}
      </div>
                              </div>
                            </section>
               );
};

export default PopularClass;