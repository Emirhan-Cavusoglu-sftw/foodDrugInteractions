import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
const Description = ({constants}) => {
  
    const {title} = useParams();
    const [titlee, setTitle] = useState("")
    const [description,setDescription] = useState("");
    const [description1, setDescription1] = useState()
    const [image1, setImage1] = useState()
    const [image2, setImage2] = useState()

    useEffect(()=>{
    constants.forEach(element => {
        if(element.title==title){
            setDescription(element.description);
            setTitle(element.title)
            setDescription1(element.description1)
            setImage1(element.image1)
            setImage2(element.image2)
        }
     });
    },[title])
  
    return (
    <main className='leading-10 text-center justify-center items-center flex flex-col'>
       <h1 className='text-green-400 text-4xl font-bold '>{titlee}</h1>

        <h1 className='text-cyan-400 text-2xl font-bold mt-48 max-w-7xl'>{description}</h1>

        <p className='mt-14 text-green-300 font-mono text-xl  max-w-7xl'>
          {description1}  
        </p>

       <div className='flex flex-1 items-center justify-center'>

        <img src={image1} alt="naa" width={300}  />
        <img src={image2} alt="elma" width={200}  />
       </div>


    
    </main>
  )
}

export default Description;