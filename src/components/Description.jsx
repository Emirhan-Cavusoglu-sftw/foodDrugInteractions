import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { nar, apple1, apple2, apple3, bg1, bg2 } from "../assets/images";
import { motion } from "framer-motion";
const Description = ({ constants }) => {
  const { title } = useParams();
  const [titlee, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [description1, setDescription1] = useState();
  const [description2, setDescription2] = useState();
  const [description3, setDescription3] = useState();
  const [description4, setDescription4] = useState();
  const [description5, setDescription5] = useState();
  const [description6, setDescription6] = useState();
  const [description7, setDescription7] = useState();
  const [description8, setDescription8] = useState();
  const [description9, setDescription9] = useState();

  const [description1v1, setDescription1v1] = useState();
  const [description1v2, setDescription1v2] = useState();
  const [description1v3, setDescription1v3] = useState();
  const [description1v4, setDescription1v4] = useState();
  const [description2v1, setDescription2v1] = useState();
  const [description2v2, setDescription2v2] = useState();
  const [description2v3, setDescription2v3] = useState();
  const [description2v4, setDescription2v4] = useState();
  const [description2v5, setDescription2v5] = useState();
  const [description2v6, setDescription2v6] = useState();
  const [description3v1, setDescription3v1] = useState();
  const [description3v2, setDescription3v2] = useState();
  const [description3v3, setDescription3v3] = useState();
  const [description3v4, setDescription3v4] = useState();
  const [description4v1, setDescription4v1] = useState();
  const [description4v2, setDescription4v2] = useState();
  const [description4v3, setDescription4v3] = useState();
  const [description4v4, setDescription4v4] = useState();
  const [description5v1, setDescription5v1] = useState();
  const [description5v2, setDescription5v2] = useState();
  const [description5v3, setDescription5v3] = useState();
  const [description5v4, setDescription5v4] = useState();
  const [description6v1, setDescription6v1] = useState();
  const [description6v2, setDescription6v2] = useState();
  const [description6v3, setDescription6v3] = useState();
  const [description6v4, setDescription6v4] = useState();
  const [description7v1, setDescription7v1] = useState();
  const [description7v2, setDescription7v2] = useState();
  const [description7v3, setDescription7v3] = useState();
  const [description7v4, setDescription7v4] = useState();
  const [description8v1, setDescription8v1] = useState();
  const [description8v2, setDescription8v2] = useState();
  const [description8v3, setDescription8v3] = useState();
  const [description8v4, setDescription8v4] = useState();
  const [description9v1, setDescription9v1] = useState();
  const [description9v2, setDescription9v2] = useState();
  const [description9v3, setDescription9v3] = useState();
  const [description9v4, setDescription9v4] = useState();

  const [subtitle1, setSubtitle1] = useState();
  const [subtitle2, setSubtitle2] = useState();
  const [subtitle3, setSubtitle3] = useState();
  const [subtitle4, setSubtitle4] = useState();
  const [subtitle5, setSubtitle5] = useState();
  const [subtitle6, setSubtitle6] = useState();
  const [subtitle7, setSubtitle7] = useState();
  const [subtitle8, setSubtitle8] = useState();
  const [subtitle9, setSubtitle9] = useState();

  const [image1, setImage1] = useState();
  const [image2, setImage2] = useState();
  const [list1, setList1] = useState();
  const [list2, setList2] = useState();

  useEffect(() => {
    constants.forEach((element) => {
      if (element.title == title) {
        setDescription(element.description);
        setDescription1(element.description1);
        setDescription2(element.description2);
        setDescription3(element.description3);
        setDescription4(element.description4);
        setDescription5(element.description5);
        setDescription6(element.description6);
        setDescription7(element.description7);
        setDescription8(element.description8);
        setDescription9(element.description9);

        setDescription1v1(element.description1v1);
        setDescription1v2(element.description1v2);
        setDescription1v3(element.description1v3);
        setDescription1v4(element.description1v4);
        setDescription2v1(element.description2v1);
        setDescription2v2(element.description2v2);
        setDescription2v3(element.description2v3);
        setDescription2v4(element.description2v4);
        setDescription2v5(element.description2v4);
        setDescription2v6(element.description2v6);
        setDescription3v1(element.description3v1);
        setDescription3v2(element.description3v2);
        setDescription3v3(element.description3v3);
        setDescription3v4(element.description3v4);
        setDescription4v1(element.description4v1);
        setDescription4v2(element.description4v2);
        setDescription4v3(element.description4v3);
        setDescription4v4(element.description4v4);
        setDescription5v1(element.description5v1);
        setDescription5v2(element.description5v2);
        setDescription5v3(element.description5v3);
        setDescription5v4(element.description5v4);
        setDescription6v1(element.description6v1);
        setDescription6v2(element.description6v2);
        setDescription6v3(element.description6v3);
        setDescription6v4(element.description6v4);

        setDescription7v1(element.description7v1);
        setDescription7v2(element.description7v2);
        setDescription7v3(element.description7v3);
        setDescription7v4(element.description7v4);

        setDescription8v1(element.description8v1);

        setDescription8v2(element.description8v2);
        setDescription8v3(element.description8v3);
        setDescription8v4(element.description8v4);

        setDescription9v1(element.description9v1);
        setDescription9v2(element.description9v2);
        setDescription9v3(element.description9v3);
        setDescription9v4(element.description9v4);

        setSubtitle1(element.subtitle1);
        setSubtitle2(element.subtitle2);
        setSubtitle3(element.subtitle3);
        setSubtitle4(element.subtitle4);
        setSubtitle5(element.subtitle5);
        setSubtitle6(element.subtitle6);
        setSubtitle7(element.subtitle7);
        setSubtitle8(element.subtitle8);
        setSubtitle9(element.subtitle9);

        setTitle(element.title);
        setImage1(element.image1);
        setImage2(element.image2);
        setList1(element.list1);
        setList2(element.list2);
      }
    });
  }, [title]);

  return (
    <main className="flex flex-col leading-10 text-center justify-center items-center bg-gradient-to-b from-gray-900 via-purple-900 to-violet-700  min-h-[200vh]  ">
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
          <li>
            <h1 className="text-2xl bg-gradient-to-r text-transparent bg-clip-text from-yellow-200 via-violet-400 to-lime-400">
              {subtitle1}
            </h1>
          </li>
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
                {description1v1}
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
          <ul>
            <li>
              <h1 className="text-2xl bg-gradient-to-r text-transparent bg-clip-text from-yellow-200 via-violet-400 to-lime-400">
                {subtitle2}
              </h1>
            </li>
            <li>
              <blockquote>
                <p
                  className="mt-14  font-bold font-palanquin text-transparent bg-clip-text 
 leading-10 text-2xl  max-w-5xl  "
                >
                  {description2}
                </p>
              </blockquote>
            </li>
            <li>
              <blockquote>
                <p
                  className="mt-14  font-bold font-palanquin text-transparent bg-clip-text 
 leading-10 text-2xl  max-w-5xl  "
                >
                  {description2v1}
                </p>
              </blockquote>
            </li>
            <li>
              <blockquote>
                <p
                  className="mt-14  font-bold font-palanquin text-transparent bg-clip-text 
 leading-10 text-2xl  max-w-5xl  "
                >
                  {description2v2}
                </p>
              </blockquote>
            </li>
            <li>
              <blockquote>
                <p
                  className="mt-14  font-bold font-palanquin text-transparent bg-clip-text 
 leading-10 text-2xl  max-w-5xl  "
                >
                  {description2v3}
                </p>
              </blockquote>
            </li>
            <li>
              <blockquote>
                <p
                  className="mt-14  font-bold font-palanquin text-transparent bg-clip-text 
 leading-10 text-2xl  max-w-5xl  "
                >
                  {description2v4}
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
            <li>
              <blockquote>
                <p
                  className="mt-14  font-bold font-palanquin text-transparent bg-clip-text 
 leading-10 text-2xl  max-w-5xl  "
                >
                  {description2v6}
                </p>
              </blockquote>
            </li>
          </ul>
          <ul>
            <li>
              <h1 className="text-2xl bg-gradient-to-r text-transparent bg-clip-text from-yellow-200 via-violet-400 to-lime-400">
                {subtitle3}
              </h1>
            </li>
            <li>
              <blockquote>
                <p
                  className="mt-14  font-bold font-palanquin text-transparent bg-clip-text 
 leading-10 text-2xl  max-w-5xl  "
                >
                  {description3}
                </p>
              </blockquote>
            </li>
            <li>
              <blockquote>
                <p
                  className="mt-14  font-bold font-palanquin text-transparent bg-clip-text 
 leading-10 text-2xl  max-w-5xl  "
                >
                  {description3v1}
                </p>
              </blockquote>
            </li>
            <li>
              <blockquote>
                <p
                  className="mt-14  font-bold font-palanquin text-transparent bg-clip-text 
 leading-10 text-2xl  max-w-5xl  "
                >
                  {description3v2}
                </p>
              </blockquote>
            </li>
            <li>
              <blockquote>
                <p
                  className="mt-14  font-bold font-palanquin text-transparent bg-clip-text 
 leading-10 text-2xl  max-w-5xl  "
                >
                  {description3v3}
                </p>
              </blockquote>
            </li>
            <li>
              <blockquote>
                <p
                  className="mt-14  font-bold font-palanquin text-transparent bg-clip-text 
 leading-10 text-2xl  max-w-5xl  "
                >
                  {description3v4}
                </p>
              </blockquote>
            </li>
          </ul>
          <ul>
            <li>
              <h1 className="text-2xl bg-gradient-to-r text-transparent bg-clip-text from-yellow-200 via-violet-400 to-lime-400">
                {subtitle4}
              </h1>
            </li>
            <li>
              <blockquote>
                <p
                  className="mt-14  font-bold font-palanquin text-transparent bg-clip-text 
 leading-10 text-2xl  max-w-5xl  "
                >
                  {description4}
                </p>
              </blockquote>
            </li>
            <li>
              <blockquote>
                <p
                  className="mt-14  font-bold font-palanquin text-transparent bg-clip-text 
 leading-10 text-2xl  max-w-5xl  "
                >
                  {description4v1}
                </p>
              </blockquote>
            </li>
            <li>
              <blockquote>
                <p
                  className="mt-14  font-bold font-palanquin text-transparent bg-clip-text 
 leading-10 text-2xl  max-w-5xl  "
                >
                  {description4v2}
                </p>
              </blockquote>
            </li>
            <li>
              <blockquote>
                <p
                  className="mt-14  font-bold font-palanquin text-transparent bg-clip-text 
 leading-10 text-2xl  max-w-5xl  "
                >
                  {description4v3}
                </p>
              </blockquote>
            </li>
            <li>
              <blockquote>
                <p
                  className="mt-14  font-bold font-palanquin text-transparent bg-clip-text 
 leading-10 text-2xl  max-w-5xl  "
                >
                  {description4v4}
                </p>
              </blockquote>
            </li>
          </ul>
          <ul>
            <li>
              <h1 className="text-2xl bg-gradient-to-r text-transparent bg-clip-text from-yellow-200 via-violet-400 to-lime-400">
                {subtitle5}
              </h1>
            </li>
            <li>
              <blockquote>
                <p
                  className="mt-14  font-bold font-palanquin text-transparent bg-clip-text 
 leading-10 text-2xl  max-w-5xl  "
                >
                  {description5}
                </p>
              </blockquote>
            </li>
            <li>
              <blockquote>
                <p
                  className="mt-14  font-bold font-palanquin text-transparent bg-clip-text 
 leading-10 text-2xl  max-w-5xl  "
                >
                  {description5v1}
                </p>
              </blockquote>
            </li>
            <li>
              <blockquote>
                <p
                  className="mt-14  font-bold font-palanquin text-transparent bg-clip-text 
 leading-10 text-2xl  max-w-5xl  "
                >
                  {description5v2}
                </p>
              </blockquote>
            </li>
            <li>
              <blockquote>
                <p
                  className="mt-14  font-bold font-palanquin text-transparent bg-clip-text 
 leading-10 text-2xl  max-w-5xl  "
                >
                  {description5v3}
                </p>
              </blockquote>
            </li>
            <li>
              <blockquote>
                <p
                  className="mt-14  font-bold font-palanquin text-transparent bg-clip-text 
 leading-10 text-2xl  max-w-5xl  "
                >
                  {description5v4}
                </p>
              </blockquote>
            </li>
          </ul>
          <ul>
            <li>
              <h1 className="text-2xl bg-gradient-to-r text-transparent bg-clip-text from-yellow-200 via-violet-400 to-lime-400">
                {subtitle6}
              </h1>
            </li>
            <li>
              <blockquote>
                <p
                  className="mt-14  font-bold font-palanquin text-transparent bg-clip-text 
 leading-10 text-2xl  max-w-5xl  "
                >
                  {description6}
                </p>
              </blockquote>
            </li>
            <li>
              <blockquote>
                <p
                  className="mt-14  font-bold font-palanquin text-transparent bg-clip-text 
 leading-10 text-2xl  max-w-5xl  "
                >
                  {description6v1}
                </p>
              </blockquote>
            </li>
            <li>
              <blockquote>
                <p
                  className="mt-14  font-bold font-palanquin text-transparent bg-clip-text 
 leading-10 text-2xl  max-w-5xl  "
                >
                  {description6v2}
                </p>
              </blockquote>
            </li>
            <li>
              <blockquote>
                <p
                  className="mt-14  font-bold font-palanquin text-transparent bg-clip-text 
 leading-10 text-2xl  max-w-5xl  "
                >
                  {description6v3}
                </p>
              </blockquote>
            </li>
            <li>
              <blockquote>
                <p
                  className="mt-14  font-bold font-palanquin text-transparent bg-clip-text 
 leading-10 text-2xl  max-w-5xl  "
                >
                  {description6v4}
                </p>
              </blockquote>
            </li>
          </ul>
          <ul>
            <li>
              <h1 className="text-2xl bg-gradient-to-r text-transparent bg-clip-text from-yellow-200 via-violet-400 to-lime-400">
                {subtitle7}
              </h1>
            </li>
            <li>
              <blockquote>
                <p
                  className="mt-14  font-bold font-palanquin text-transparent bg-clip-text 
 leading-10 text-2xl  max-w-5xl  "
                >
                  {description7}
                </p>
              </blockquote>
            </li>
            <li>
              <blockquote>
                <p
                  className="mt-14  font-bold font-palanquin text-transparent bg-clip-text 
 leading-10 text-2xl  max-w-5xl  "
                >
                  {description7v1}
                </p>
              </blockquote>
            </li>
            <li>
              <blockquote>
                <p
                  className="mt-14  font-bold font-palanquin text-transparent bg-clip-text 
 leading-10 text-2xl  max-w-5xl  "
                >
                  {description7v2}
                </p>
              </blockquote>
            </li>
            <li>
              <blockquote>
                <p
                  className="mt-14  font-bold font-palanquin text-transparent bg-clip-text 
 leading-10 text-2xl  max-w-5xl  "
                >
                  {description7v3}
                </p>
              </blockquote>
            </li>
            <li>
              <blockquote>
                <p
                  className="mt-14  font-bold font-palanquin text-transparent bg-clip-text 
 leading-10 text-2xl  max-w-5xl  "
                >
                  {description7v4}
                </p>
              </blockquote>
            </li>
          </ul>
          <ul>
            <li>
              <h1 className="text-2xl bg-gradient-to-r text-transparent bg-clip-text from-yellow-200 via-violet-400 to-lime-400">
                {subtitle8}
              </h1>
            </li>
            <li>
              <blockquote>
                <p
                  className="mt-14  font-bold font-palanquin text-transparent bg-clip-text 
 leading-10 text-2xl  max-w-5xl  "
                >
                  {description8}
                </p>
              </blockquote>
            </li>
            <li>
              <blockquote>
                <p
                  className="mt-14  font-bold font-palanquin text-transparent bg-clip-text 
 leading-10 text-2xl  max-w-5xl  "
                >
                  {description8v1}
                </p>
              </blockquote>
            </li>
            <li>
              <blockquote>
                <p
                  className="mt-14  font-bold font-palanquin text-transparent bg-clip-text 
 leading-10 text-2xl  max-w-5xl  "
                >
                  {description8v2}
                </p>
              </blockquote>
            </li>
            <li>
              <blockquote>
                <p
                  className="mt-14  font-bold font-palanquin text-transparent bg-clip-text 
 leading-10 text-2xl  max-w-5xl  "
                >
                  {description8v3}
                </p>
              </blockquote>
            </li>
            <li>
              <blockquote>
                <p
                  className="mt-14  font-bold font-palanquin text-transparent bg-clip-text 
 leading-10 text-2xl  max-w-5xl  "
                >
                  {description8v4}
                </p>
              </blockquote>
            </li>
          </ul>
          <ul>
            <li>
              <h1 className="text-2xl bg-gradient-to-r text-transparent bg-clip-text from-yellow-200 via-violet-400 to-lime-400">
                {subtitle9}
              </h1>
            </li>
            <li>
              <blockquote>
                <p
                  className="mt-14  font-bold font-palanquin text-transparent bg-clip-text 
 leading-10 text-2xl  max-w-5xl  "
                >
                  {description9}
                </p>
              </blockquote>
            </li>
            <li>
              <blockquote>
                <p
                  className="mt-14  font-bold font-palanquin text-transparent bg-clip-text 
 leading-10 text-2xl  max-w-5xl  "
                >
                  {description9v1}
                </p>
              </blockquote>
            </li>
            <li>
              <blockquote>
                <p
                  className="mt-14  font-bold font-palanquin text-transparent bg-clip-text 
 leading-10 text-2xl  max-w-5xl  "
                >
                  {description9v2}
                </p>
              </blockquote>
            </li>
            <li>
              <blockquote>
                <p
                  className="mt-14  font-bold font-palanquin text-transparent bg-clip-text 
 leading-10 text-2xl  max-w-5xl  "
                >
                  {description9v3}
                </p>
              </blockquote>
            </li>
            <li>
              <blockquote>
                <p
                  className="mt-14  font-bold font-palanquin text-transparent bg-clip-text 
 leading-10 text-2xl  max-w-5xl  "
                >
                  {description9v4}
                </p>
              </blockquote>
            </li>
          </ul>
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
