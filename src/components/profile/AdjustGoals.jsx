import React, { useState } from 'react'
import RadioButton from '../../utilities/RadioButton';
import GoalForm from '../../utilities/GoalForm';

const AdjustGoals = ({setViewGoals}) => {

  return (
    <>
        <section onClick={setViewGoals} className='text-black min-h-screen absolute bg-black opacity-90 w-full top-0 left-0 z-20 flex items-center justify-center'>
        </section>
        <article className="absolute text-black z-50 w-full left-0 top-20 text-center bg-white opacity-100 border-2">
            <h1 className="text-3xl pt-16 mb-4">Change Goals</h1>
        
            <GoalForm btn={'Update'}/>
        </article>
      
    </>
  )
}

export default AdjustGoals;
