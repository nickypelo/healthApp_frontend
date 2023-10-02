import React, { useState } from 'react'
import RadioButton from '../../utilities/RadioButton';

const Reviews = ({setViewReview}) => {

    const [rate1, setRate1] = useState('');
    const [rate2, setRate2] = useState('');
    const [rate3, setRate3] = useState('');
    const [rate4, setRate4] = useState('');
    const [rate5, setRate5] = useState('');

    const updateGoals = (e) => {
        e.preventDefault();
        console.log('goal')
        localStorage.setItem('rating', rate2)
    }

  return (
    <>
        <section onClick={setViewReview} className=' min-h-screen absolute bg-black opacity-90 w-full top-0 left-0 z-20 flex items-center justify-center'>
        </section>
        <article className="absolute z-50 w-full left-0 top-16 text-center bg-white opacity-100 border-2">
            <h1 className="pt-16 mb-4 text-black">How has your experience with the app been?</h1>
        
            <form action="" className='pb-4 text-black' onSubmit={e=>e.preventDefault()}>
                <RadioButton label='Very Low'
                            name='rating'
                            value={rate1}
                            setValue={setRate1}
                />

                <RadioButton label='Low'
                            name='rating'
                            value={rate2}
                            setValue={setRate2}
                />

                <RadioButton label='Neutral'
                            name='rating'
                            value={rate3}
                            setValue={setRate3}
                />
                <RadioButton label='Good'
                            name='rating'
                            value={rate4}
                            setValue={setRate4}
                />
                <RadioButton label='Great'
                            name='rating'
                            value={rate5}
                            setValue={setRate5}
                />
                <button className=' bg-blue-400 rounded-lg h-8 mt-8 px-2 text-white font-bold' type='submit'>Submit</button>
            </form>
        </article>
      
    </>
  )
}

export default Reviews;
