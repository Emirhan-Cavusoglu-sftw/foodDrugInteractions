import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Card = ({constants}) => {
  return (
    <motion.div className={` ${constants.color}  rounded-lg flex-1 shadow-sm p-3 max-sm:text-sm   
     hover:bg-slate-600  justify-center text-center min-w-min overflow-visible  `} 
     whileHover={{ scale: 1.1 , transition:{duration:0.5 , type:'spring', stiffness:300}}}
     >


    
    <h5 className="mb-2 md:text-[22px]  font-bold tracking-tight text-white "><Link to={`/${constants.title}`}>{constants.title}</Link></h5>

    </motion.div>
  )
}


export default Card