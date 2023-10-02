import React, { useState } from 'react';

const BMI = () => {

    const [weight, setWeight] = useState(0);
    const [height, setHeight] = useState(0);

    let BMI = weight/((height/100)*(height/100));

    const BMIresults = (value) =>{
        if(value< 18.5){
            return ''
        }
        else if(value<24.9){
            return ''
        }
        else if(value<29.9){
            return ''
        }
        else if(value>=30){
            return ''
        }
    }

  return (
    <section className=''>
        <h1 className="text-3xl pt-16 mb-4">BMI</h1>
        <article >
            <div className='m-4 p-4'>
                <label className='block mb-2' htmlFor="weight">Weight (in kg)</label>
                <input className='block w-fit mx-auto text-black text-center'
                    name='weight'
                    type="text" 
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                />
            </div>
            <div>
                <label className='block mb-2' htmlFor="height">Height (in cm)</label>
                <input className='block w-fit mx-auto text-black text-center'
                    name='height'
                    type="text" 
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                />
            </div>
            <p className='w-16 mx-auto h-8 text-black bg-white flex justify-center mt-8'>{Math.round(BMI)}</p>
        </article>
      
    </section>
  )
}

export default BMI;
