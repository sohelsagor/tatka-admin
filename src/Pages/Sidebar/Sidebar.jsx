import React from 'react';
import {SiTrustedshops} from 'react-icons/si'

const Sidebar = () => {
  return (
    <>
    <div className='flex flex-col h-5/6	 mt-5 py-6 bg-c2 m-4  items-center justify-items-start rounded-2xl'>
     <div className='flex text-2xl text-c1 font-bold items-center justify-start	 gap-3'>
      <SiTrustedshops /> <span>TATKA eBAZAR</span>
     </div>
    </div>
    </>
  )
}

export default Sidebar