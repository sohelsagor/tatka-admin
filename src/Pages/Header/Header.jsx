
import React ,{useState}from 'react'
import {BiSearch} from 'react-icons/bi';
import {MdOutlineHelp,MdNotifications} from 'react-icons/md';



import Img from '../../assets/sohel.jpg'

const Header = () => {
  const [open,setOpen]=useState(false);
  const Profiles=['Profile Page','Order invoices','Signout'];
 

  return (
    <div className='flex justify-between	items-center px-4 '>
      <div className='py-6 items-center flex mt-6'>
        <input type="search" placeholder='Search' className='p-4 px-10 focus:outline-1 focus:outline-c2	rounded-l-xl placeholder:text-2xl		' />
        <button className='p-5  bg-btn'><BiSearch /></button>
      </div>
      <div className='flex items-center gap-3 text-2xl cursor-pointer  '>
        <span><MdOutlineHelp /></span>
        <span><MdNotifications /></span>
       
         <div className='flex flex-col '>
          <span className='text-sm	font-bold'>Sohel </span>
          <small className='text-sm'>Admin Profile</small>
        </div>
    
        <div>
        <img src={Img} alt="" className='h-14 w-14 rounded-full relative ' onClick={()=>setOpen(!open)}  />
      {open &&  <div  className='bg-white p-2 w-60 shadow-lg absolute right-4'>
          <ul>
            <div className='flex gap-2'>
            <img src={Img} alt="" className='h-12 w-12 rounded-full ' />
            <div className='flex flex-col '>
              <span className='text-sm font-bold'>Sohel</span>
              <span className='text-sm'>Sohel19sagor@gmail.com</span>
              
            </div>
            
            </div>
            <hr className='mt-2' />
            {
              Profiles.map((profile)=>(
                <li key={profile} className="text-lg	p-1 "><a href="#">{profile}</a>

                </li>
              ))
            }
          </ul>
        </div>}
        </div>
      </div>

    </div>
  )
}

export default Header