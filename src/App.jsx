import { useState } from 'react'
import Card from './components/Card'

import { constants } from './constants'
import { Route,Routes,Link } from 'react-router-dom'
import Description from './components/Description'


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
          <div>
            sdfa
          </div>
      </section>
     <section className='flex justify-center items-center animate-infinite-gradient-color'>
     <div className='grid  gap-9  2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 items-center   max-md:gap-3  md:grid-cols-2 max-sm:grid-cols-2  mt-40     '>
     {constants?.map(con=>(
       

        <Card constants={con}></Card>
        
        ))}
        </div>
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
