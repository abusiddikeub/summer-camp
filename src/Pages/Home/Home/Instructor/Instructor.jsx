import React from 'react';

import InstractorHook from '../../../../Component/Hooks/InstractorHook';
import InstructorShow from './InstructorShow';
import UseClassHooks from '../../../../Component/Hooks/UseClassHooks';


const Instructor = () => {
  const [classes] = UseClassHooks()

               return (
            <div className='grid md:grid-cols-2 gap-10'>
              {
                classes.map(item => <InstructorShow 
                key={item._id}
                item={item}
                ></InstructorShow>)
              }
            </div>
               );
};

export default Instructor;