import React from 'react'
import { Link } from 'react-router-dom'


const Card = ({constants}) => {
  return (
    <div className='bg-teal-500 rounded-lg flex-1 shadow p-6   hover:bg-slate-600 flex justify-center text-center min-w-min overflow-visible ' >


    
    <h5 className="mb-2 text-2xl font-bold tracking-tight text-white "><Link to={`/${constants.title}`}>{constants.title}</Link></h5>

    </div>
  )
}

export default Card