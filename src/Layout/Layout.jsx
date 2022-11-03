import React, { Children } from 'react'
import Header from '../Pages/Header/Header'
import Sidebar from '../Pages/Sidebar/Sidebar'

const Layout = ({children}) => {
  return (
    <section className='bg-c1  flex'>
        <div className=' w-72 p-3 h-full top-0 left-0 fixed bg-c1 pt-5'>
            <Sidebar />
        </div>
        <div className='bg-c1 ml-72 box-border	 justify-start   '>
            <div className=' '>
                <Header />
            </div>
            {children}
        </div>

    </section>
  )
}

export default Layout