import React, { useState } from 'react'
import Goals from './TutorialComponents/Goals'
import ExerciseSchedule from './TutorialComponents/ExerciseSchedule'
import BMI from './TutorialComponents/BMI'
import Welcome from './TutorialComponents/Welcome';
import { useNavigate } from 'react-router-dom';


const Tutorial = () => {

    const [next, setNext] = useState(0);
    const returnHome = useNavigate();

    const tutorialPages = () =>{
        if(next===0){
            return <Welcome/>
        }
        else if(next===1){
            return <Goals/>
        }
        else if(next===2){
            return <ExerciseSchedule/>
        }
        else if(next===3){
            return <BMI/>
        }
        else if(next===4){
            localStorage.setItem('entered', 'yep');
            returnHome('/')
        }
    }

  return (
    <main className=' h-85v text-white font-bold text-center'>

        <section className='h-tutView text-lg'>
            {tutorialPages()}
        </section>
        {/* //className='px-2 border-2 rounded-lg text-sm text-black bg-white' */}
        <button onClick={()=>setNext(next+1)} className='w-fit mx-auto bg-blue-400 px-4 py-1 rounded-md text-white font-semibold'>Next</button>
    </main>
  )
}

export default Tutorial
