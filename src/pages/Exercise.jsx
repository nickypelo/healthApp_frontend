import React, {useEffect, useState} from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';

const Exercise = () => {


  const [BMI, setBMI] = useState('')

  useEffect(()=>{
        if(localStorage.getItem('BMI')){
            const bmi = JSON.parse(localStorage.getItem('BMI'));
            setBMI(bmi.detail)
        }
    },[])

    //preload the food history
    useEffect(()=>{
      if(localStorage.getItem('exercise')){
          const exerciseItems = JSON.parse(localStorage.getItem('exercise'));
          for(let i = 0; i<exerciseItems.length; i++){
              setters(exerciseItems[i].id)
          }
      }
      else{
          localStorage.setItem('exercise', JSON.stringify([]))
      }

  },[])


  return (
    <main>
      <Header heading='Exercises'/>

        <article className='mb-5 m-4'>
          <h1 className=" text-2xl font-bold">
            You are currently {BMI}
          </h1>
          <p>Based on your BMI, we crafted a training regiment to get you to your most optimal self</p>
          <p>Follow this pre-made plan for best results</p>
          <p>Optionally, you can also choose your difficulty</p>
        </article> 

        <Link to='/exercise/beginner'>
          <article className="flex justify-end items-center p-4 font-bold w-4/5 my-4 mx-auto h-28 xs:h-44 rounded-lg bg-black text-white">
            <h2 className="text-right text-xl">Beginner</h2>
          </article>
        </Link>

        <Link to='/exercise/intermediate'>
          <article className="flex justify-end items-center p-4 font-bold w-4/5 my-4 mx-auto h-28 xs:h-44 rounded-lg bg-black text-white">
            <h2 className="text-right text-xl">Intermediate</h2>
          </article>
        </Link>

        <Link to='/exercise/advanced'>
          <article className="flex justify-end items-center p-4 font-bold w-4/5 my-4 mx-auto h-28 xs:h-44 rounded-lg bg-black text-white">
            <h2 className="text-right text-xl">Advanced</h2>
          </article>
        </Link>
        {/* <div>
          <p className='text-center font-medium text-slate-900' >Read each article to get 10 tokens</p>
        <ExcerciseCard/>
          </div>   */}

    </main>
  )
}

export default Exercise;
