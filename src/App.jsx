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
          <div className='flex justify-between items-center  text-5xl font-nabla'>
            Bir<span className='text-green-900'>Diyetisyen</span>
          </div>
          <ul className='flex space-x-4  mr-96'>
          
            <li className='font-caveat font-bold text-4xl px-2 text-center text-yellow-950 w-44 bg-yellow-500 shadow-md rounded-md  '><Link >Hakkımızda</Link></li>
            <li className='font-caveat font-bold  text-4xl p-1 text-center text-yellow-950 w-44 bg-yellow-500 shadow-md rounded-md  '><Link >Kaynakça</Link></li>
            <li className='font-caveat font-bold text-4xl p-1 text-center text-yellow-950 w-44 bg-yellow-500 shadow-md rounded-md  '><Link >İletişim</Link></li>
          

            
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
