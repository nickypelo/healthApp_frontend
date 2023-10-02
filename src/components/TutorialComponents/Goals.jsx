import React, { useState } from 'react'
import RadioButton from '../../utilities/RadioButton';
import GoalForm from '../../utilities/GoalForm';

const Goals = () => {

    const [loseWeight, setLoseWeight] = useState('');
    const [gainMuscle, setGainMuscle] = useState('');
    const [stayFit, setStayFit] = useState('');

  return (
    <>
      <h1 className="text-3xl pt-16 mb-4">Goals</h1>
      
      {/* <form action="" onSubmit={e=>e.preventDefault()}>
        <RadioButton label='Lose Weight'
                    name='goal'
                    value={loseWeight}
                    setValue={setLoseWeight}
        />

        <RadioButton label='Gain Muscle'
                      name='goal'
                      value={gainMuscle}
                      setValue={setGainMuscle}
        />

        <RadioButton label='Stay Fit'
                      name='goal'
                      value={stayFit}
                      setValue={setStayFit}
        />
      </form> */}
      <GoalForm btn={'Save'}/>
      
    </>
  )
}

export default Goals;
