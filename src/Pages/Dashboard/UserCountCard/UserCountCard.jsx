import React from 'react'

import {RiShieldUserFill} from 'react-icons/ri'
const Data=[
    {
        title:"Customers",
        todayValue:`14,208`,
        count:[
            { weekValue:`54,208`},
             {monthValue:`74,208`},
             {yearValue:`104,208`},
            ],
        icon: <RiShieldUserFill />
    },
    {
        title:"Customers",
        todayValue:`14,208`,
        count:[
            { weekValue:`54,208`},
             {monthValue:`74,208`},
             {yearValue:`104,208`},
            ],
        icon: <RiShieldUserFill />
    },
    {
        title:"Customers",
        todayValue:`14,208`,
        count:[
            { weekValue:`54,208`},
             {monthValue:`74,208`},
             {yearValue:`104,208`},
            ],
        icon: <RiShieldUserFill />
    },
    {
        title:"Customers",
        todayValue:`14,208`,
        count:[
            { weekValue:`54,208`},
             {monthValue:`74,208`},
             {yearValue:`104,208`},
            ],
        icon: <RiShieldUserFill />
    },
    {
        title:"Customers",
        todayValue:`14,208`,
        count:[
            { weekValue:`54,208`},
             {monthValue:`74,208`},
             {yearValue:`104,208`},
            ],
        icon: <RiShieldUserFill />
    },
    {
        title:"Customers",
        todayValue:`14,208`,
        weekValue:`54,208`,
        monthValue:`74,208`,
        yearValue:`104,208`,
        icon: <RiShieldUserFill />
    },
    {
        title:"Customers",
        todayValue:`14,208`,
        weekValue:`54,208`,
        monthValue:`74,208`,
        yearValue:`104,208`,
        icon: <RiShieldUserFill />
    },
    {
        title:"Customers",
        todayValue:`14,208`,
        weekValue:`54,208`,
        monthValue:`74,208`,
        yearValue:`104,208`,
        icon: <RiShieldUserFill />
    },
    {
        title:"Customers",
        todayValue:`14,208`,
        weekValue:`54,208`,
        monthValue:`74,208`,
        yearValue:`104,208`,
        icon: <RiShieldUserFill />
    },
    {
        title:"Customers",
        todayValue:`14,208`,
        weekValue:`54,208`,
        monthValue:`74,208`,
        yearValue:`104,208`,
        icon: <RiShieldUserFill />
    },
    {
        title:"Customers",
        todayValue:`14,208`,
        weekValue:`54,208`,
        monthValue:`74,208`,
        yearValue:`104,208`,
        icon: <RiShieldUserFill />
    },
    {
        title:"Customers",
        todayValue:`14,208`,
        weekValue:`54,208`,
        monthValue:`74,208`,
        yearValue:`104,208`,
        icon: <RiShieldUserFill />
    },  {
        title:"Customers",
        todayValue:`14,208`,
        weekValue:`54,208`,
        monthValue:`74,208`,
        yearValue:`104,208`,
        icon: <RiShieldUserFill />
    },
    {
        title:"Customers",
        todayValue:`14,208`,
        weekValue:"Today",
        monthValue:`74,208`,
        yearValue:`104,208`,
        icon: <RiShieldUserFill />
    },  {
        title:"Customers",
        todayValue:`14,208`,
       count:[
       { weekValue:`54,208`},
        {monthValue:`74,208`},
        {yearValue:`104,208`},
       ],
        icon: <RiShieldUserFill />
    },
    {
        title:"Customers",
        todayValue:`14,208`,
        weekValue:`54,208`,
        monthValue:`74,208`,
        yearValue:`104,208`,
        icon: <RiShieldUserFill />
    },


]

const UserCountCard = () => {
  return (
    <>



    
   <div className=' grid-cols-4 grid gap-2  p-4 '>
       {
        Data.map((dat) => (
            <div key={dat}  className=' flex justify-between items-center w-72	 gap-4 h-28	p-3 rounded-md bg-c2 '>
               
                <div className='flex flex-col'>
                <span>{dat.title}</span>
                <small>{dat.weekValue}</small>
            </div>
            <span  className='text-2xl text-white p-4 rounded-lg'>
                {dat.icon}
            </span>
            
        </div>
        )
       )}
    
    </div>
    </>
  )
}

export default UserCountCard