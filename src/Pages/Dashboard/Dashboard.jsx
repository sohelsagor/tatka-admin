import React, { useState } from 'react'
import HeaderCard from './HeaderCard/HeaderCard'
import UserCountCard from './UserCountCard/UserCountCard'

const Dashboard = () => {
  const [items,setItems]=useState()
  return (
    <>
    <HeaderCard  />
    <div className='border-c2 border w-fit ml-4 gap-2 flex'>
        <button className=''>
          
        </button>
        <button>Week</button>
        <button>Year</button>
    </div>
    <UserCountCard />
    </>
  )
}

export default Dashboard