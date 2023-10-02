import React, {useState} from 'react'
import RadioButton from './/RadioButton';

const GoalForm = ({btn}) => {

    const [loseWeight, setLoseWeight] = useState('');
    const [gainMuscle, setGainMuscle] = useState('');
    const [stayFit, setStayFit] = useState('');



    const updateGoals = (e) => {
        e.preventDefault();
        console.log('goal')
        localStorage.setItem('goals', JSON.stringify([loseWeight,gainMuscle,stayFit]))
        setGainMuscle('')
        setLoseWeight('')
        setStayFit('')
    }

    return (
        <>
            <form className='pb-4' action="" onSubmit={updateGoals}>
            <RadioButton label='Lose Weight'
                        name='goal'
                        value='Lose'
                        setValue={()=>setLoseWeight('Lose')}
            />

            <RadioButton label='Gain Muscle'
                        name='goal'
                        value='Gain'
                        setValue={()=>setGainMuscle('Gain')}
            />

            <RadioButton label='Stay Fit'
                        name='goal'
                        value='Fit'
                        setValue={()=>setStayFit('Fit')}
            />
            <button className=' bg-blue-400 rounded-lg h-8 mt-8 px-2 text-white font-bold' type='submit'>{btn}</button>
        </form>
        
        </>
    )
}

export default GoalForm
