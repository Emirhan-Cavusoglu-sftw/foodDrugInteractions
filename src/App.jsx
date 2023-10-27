import { useState } from 'react'
import Card from './components/Card'

import { constants } from './constants'
import { Route,Routes,Link } from 'react-router-dom'
import Description from './components/Description'


function App() {
  

  return (
    <>
    <section>
      
      
      
      
      </section>  
     <Routes>
      {/* animate-infinite-scroll */}
     <Route  path='/' element={
     <section className='flex justify-center '>
     <div className='grid  gap-9  2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3  md:grid-cols-2 sm:grid-cols-1 mt-40    '>
     {constants?.map(con=>(
       

        <Card constants={con}></Card>
        
        ))}
        </div>
        </section>
        }
      ></Route>
     <Route  path='/:title' element={<Description constants={constants}/>} />
      
        </Routes>
       
        
    </>
  )
}

export default App
