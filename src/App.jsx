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
      <section className='bg-black h-6 fixed left-0 right-0'>
          <div>
            
          </div>
      </section>
     <section className='flex justify-center  animate-infinite-gradient-color'>
     <div className='grid  gap-9  2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3    md:grid-cols-2 sm:grid-cols-1  mt-40     '>
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
