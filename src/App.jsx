import { useState } from 'react'
import Card from './components/Card'

import { constants } from './constants'
import { Route,Routes,Link } from 'react-router-dom'
import Description from './components/Description'
import {motion} from 'framer-motion'

function App() {
  

  return (
    <>
    
     <Routes>
      {/* animate-infinite-scroll */}
     <Route  path='/' element={
      <>
      <section className=' h-20 fixed left-0 right-0 flex w-full justify-between items-center mdspace-x-4 bg-slate-950 border-slate-950 border-b-indigo-600 border-4 '>
          <div className='flex text-3xl font-extrabold font-rightheus justify-between items-center text-transparent bg-gradient-to-r bg-clip-text from-amber-300 via-amber-400 to-amber-500 '>
            BesinVeİlaçEtkileşimleri
          </div>
          <ul className='flex items-center justify-center text-center space-x-4 ml-32 mr-96'>
          
            <li className='font-rightheus font-bold text-3xl  w-44 justify-center items-center text-center text-transparent bg-gradient-to-r bg-clip-text from-amber-300 via-amber-400 to-amber-500 shadow-md rounded-md  '><Link >Hakkımızda</Link></li>
            <li className='font-rightheus font-bold text-3xl w-44 text-center text-transparent bg-gradient-to-r bg-clip-text from-amber-300 via-amber-400 to-amber-500  '><Link >Kaynakça</Link></li>
            <li className='font-rightheus font-bold text-3xl  w-44 text-center text-transparent bg-gradient-to-r bg-clip-text from-amber-300 via-amber-400 to-amber-500  shadow-md rounded-md  '><Link >İletişim</Link></li>
          

            
          </ul>
          
      </section>
     <section className='flex justify-center  flex-wrap items-center animate-infinite-gradient-color'>
     <motion.div className='grid   gap-20   2xl:grid-cols-5 xl:grid-cols-2   lg:grid-cols-4  justify-center items-center   max-md:gap-3  md:grid-cols-2 max-sm:grid-cols-2  mt-40     '
     initial={{opacity:0 , y:100}}
     animate={{opacity:1, y:0}}
     transition={{duration:1, delay:0.5}}
     >
     {constants?.map(con=>(
       

        <Card constants={con}></Card>
        
        ))}
        </motion.div>
        </section>
        </>
        }
      ></Route>
     <Route  path='/:title' element={<Description constants={constants}/>} />
      
        </Routes>
       
        
    </>
  )
}

export default App
