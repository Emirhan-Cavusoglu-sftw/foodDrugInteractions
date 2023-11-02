import React from 'react'
import { Link } from 'react-router-dom'


const Card = ({constants}) => {
  return (
    <div className={` ${constants.color}  rounded-lg flex-1 shadow-sm p-4 max-sm:text-sm    hover:bg-slate-600 flex justify-center text-center min-w-min overflow-visible `} >


    
    <h5 className="mb-2 md:text-xl font-bold tracking-tight text-white "><Link to={`/${constants.title}`}>{constants.title}</Link></h5>

    </div>
  )
}


export default Card