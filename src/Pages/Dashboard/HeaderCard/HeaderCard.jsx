import React from 'react'
import {SiTrustedshops} from 'react-icons/si'
const headerCard=[
    {
        title: 'Revenue',
        total: '$18,925',
        icon: <SiTrustedshops />,
        css: { background: '#d1e7dd' },
        iconBg:{background:"#0f5132"}
    },
    {
        title: 'Expense',
        total: '$11,024',
        icon: <SiTrustedshops />,
        css: { background: '#f8d7da' },
        iconBg:{background:"#dc3545"}
    },
    {
        title: `Happy Client's`,
        total: '8,925',
        icon: <SiTrustedshops />,
        css: { background: '#fff3cd' },
        iconBg:{background:"#ffc107"}
    },
    {
        title: 'New StoreOpen',
        total: '8,925',
        icon: <SiTrustedshops />,
        css: { background: '#cff4fc' },
        iconBg:{background:"#0dcaf0"}
    },
]



const HeaderCard = () => {
  return (<>
   
    <div className='flex p-5 gap-2 mt-3 '>
       {
        headerCard.map((card, index) => (
            <div key={index} style={card.css} className='flex items-center w-72	 gap-4 h-20	p-3 rounded-lg  '>
            <span style={card.iconBg} className='text-2xl text-white p-4 rounded-lg'>
                {card.icon}
            </span>
            <div className='flex flex-col'>
                <span>{card.title}</span>
                <small>{card.total}</small>
            </div>
        </div>
        )
       )}
    
    </div>
    </>
  )
}

export default HeaderCard