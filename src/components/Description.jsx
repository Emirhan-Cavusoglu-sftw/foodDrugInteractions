import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { nar, apple1, apple2, apple3, bg1, bg2 } from "../assets/images";
import { motion } from "framer-motion";
const Description = ({ constants }) => {
  const { title } = useParams();
  const [titlee, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [description1, setDescription1] = useState();
  const [description1v1, setDescription1v1] = useState();
  const [description1v2, setDescription1v2] = useState();
  const [description1v3, setDescription1v3] = useState();
  const [description1v4, setDescription1v4] = useState();
  const [description2v5, setDescription2v5] = useState();
  const [subtitle1, setSubtitle1] = useState();
  const [image1, setImage1] = useState();
  const [image2, setImage2] = useState();
  const [list1, setList1] = useState();
  const [list2, setList2] = useState();

  useEffect(() => {
    constants.forEach((element) => {
      if (element.title == title) {
        setDescription(element.description);
        setDescription1v1(element.description1v1);
        setDescription1v2(element.description1v2);
        setDescription1v3(element.description1v3);
        setDescription1v4(element.description1v4);
        setDescription2v5(element.description2v5);
        setSubtitle1(element.subtitle1);
        setTitle(element.title);
        setDescription1(element.description1);
        setImage1(element.image1);
        setImage2(element.image2);
        setList1(element.list1);
        setList2(element.list2);
      }
    });
  }, [title]);

  return (
    <main className="flex flex-col leading-10 text-center justify-center items-center bg-gradient-to-b from-gray-900 via-purple-900 to-violet-600flex     ">
      <motion.div
        className="mb-[550px] mt-10  text-justify flex flex-col justify-center items-center  max-w-[1000px] "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 4, delay: 0.9, type: "spring" }}
      >
        <h1 className=" text-5xl font-bold font-rightheus   text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-violet-400 to-lime-400">
          {titlee}
        </h1>

        {/* <h1 className='text-cyan-400 text-2xl font-bold mt-48 max-w-7xl'>{description}</h1> 
        
        bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500
        bg-gradient-to-r from-amber-100 via-amber-200 to-amber-400
        bg-gradient-to-r from-green-300 via-green-400 to-green-500

        
        
        */}
        
        <ul className="list-disc text-xl mt-32  font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 space-y-5 ">
          <li><h1 className="text-2xl bg-gradient-to-r text-transparent bg-clip-text from-yellow-200 via-violet-400 to-lime-400">{subtitle1}</h1></li>
          <li>
            <blockquote>
              <p
                className="mt-14  font-bold font-palanquin text-transparent bg-clip-text 
 leading-10 text-2xl  max-w-5xl  "
              >
                {description1}
              </p>
            </blockquote>
          </li>
          <li>
            <blockquote>
              <p
                className="mt-14  font-bold font-palanquin text-transparent bg-clip-text 
 leading-10 text-2xl  max-w-5xl  "
              >
                {description1v3}
              </p>
            </blockquote>
          </li>
          <li>
            <blockquote>
              <p
                className="mt-14  font-bold font-palanquin text-transparent bg-clip-text 
 leading-10 text-2xl  max-w-5xl  "
              >
                {description1v4}
              </p>
            </blockquote>
          </li>
          <li>
            <blockquote>
              <p
                className="mt-14  font-bold font-palanquin text-transparent bg-clip-text 
 leading-10 text-2xl  max-w-5xl  "
              >
                {description1v2}
              </p>
            </blockquote>
          </li>
          <li>
            <blockquote>
              <p
                className="mt-14  font-bold font-palanquin text-transparent bg-clip-text 
 leading-10 text-2xl  max-w-5xl  "
              >
                {description2v5}
              </p>
            </blockquote>
          </li>
          
          
        </ul>

        {/* <h2 className=' text-4xl font-bold font-kanit mt-7 text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-green-400 to-green-500'>Besinlerle etkileşimi</h2> */}

        {/* <ul className="list-disc text-xl mt-10  font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-green-200 to-green-500 space-y-5 ">
          <li>{list1}</li>
          <li>{list2}</li>
        </ul> */}
        {/* <div className='flex flex-1 items-center justify-center '>

        <img src={image1} alt="naa" width={300}  />
        <img src={image2} alt="elma" width={200} />

        



       </div> */}
      </motion.div>
    </main>
  );
};

export default Description;
