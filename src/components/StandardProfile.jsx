import React, { useState } from 'react';
import AdjustBMI from './profile/AdjustBMI';
import AdjustGoals from './profile/AdjustGoals';
import AdjustSchedule from './profile/AdjustSchedule';
import Reviews from './profile/Review';

const StandardProfile = () => {

  const [showBMI, setShowBMI] = useState(false); 
  const [showSchedule, setShowSchedule] = useState(false);
  const [showGoals, setShowGoals] = useState(false);
  const [showReviews, setReviews] = useState(false);
  // const [profile, setProfile] = useState(profileIcon)

  const bmiDisplay = () =>{
        setShowBMI(!showBMI);
  }

  const scheduleDisplay = () =>{
    setShowSchedule(!showSchedule);
  }

  const goalsDisplay = () =>{
    setShowGoals(!showGoals);
  }

  const reviewsDisplay = () =>{
    setReviews(!showReviews);
  }
  

  return (
    <>
      <article className="mx-4">

        {showBMI ?
          <AdjustBMI  showBMI={showBMI}
                      setViewBMI={bmiDisplay} 
          />
          :
          <button onClick={bmiDisplay} className="w-full"><p className='text-left my-2 border-b-2 py-2 pl-2'>Update BMI</p></button>
        }

        {showGoals ?
          <AdjustGoals  setViewGoals = {goalsDisplay}
          />
          :
          <button onClick={goalsDisplay} className='w-full'><p className='text-left my-2 border-b-2 py-2 pl-2'>Change Goals</p></button>

        }

        {showSchedule ?
          <AdjustSchedule setViewSchedule={scheduleDisplay} 
          />
          :
          <button onClick={scheduleDisplay} className="w-full"> <p className='text-left my-2 border-b-2 py-2 pl-2'>Adjust Schedule</p></button>
        }

      {showReviews ?
          <Reviews setViewReview={reviewsDisplay} 
          />
          :
          <button onClick={reviewsDisplay} className="w-full"> <p className='text-left my-2 border-b-2 py-2 pl-2'>Review Application</p></button>
        }

        
        
      </article>
      
    </>
  )
}

export default StandardProfile
