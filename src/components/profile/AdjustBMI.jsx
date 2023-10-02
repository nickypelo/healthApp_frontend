import React, { useEffect, useState } from 'react';

const AdjustBMI = ({showBMI, setViewBMI}) => {

    const [weight, setWeight] = useState(0);
    const [height, setHeight] = useState(0);

    let BMI = weight/((height/100)*(height/100));

    const updateBMI = (e) => {
        e.preventDefault();
        console.log("what's up doc")
        localStorage.setItem('BMI', JSON.stringify({value: BMI, detail: BMIresults(BMI)}))
        setViewBMI()

    }

    const BMIresults = (value) =>{
        if(value< 18.5){
            return 'Under Weight'
        }
        else if(value<24.9){
            return 'Fit'
        }
        else if(value<29.9){
            return 'Over Weight'
        }
        else if(value>=30){
            return 'Obese'
        }
    }

    const val = (BMI)=>{
        if(BMI>1 && BMI<40){
            return BMI;
        }
        else{
            return 0
        }
    }

    return (
        <main>
            <section onClick={setViewBMI} className='  min-h-screen absolute bg-black opacity-90 w-full top-0 left-0 z-20 flex items-center justify-center'>
                
            </section>
            <article className="absolute text-black z-50 w-full left-0 text-center top-20 bg-white opacity-100 border-2">
                <h1 className="text-2xl pt-16 mb-4">Adjust your BMI </h1>
                <p className='w-16 mx-auto h-8 text-black bg-white flex justify-center mt-8'>{val(Math.round(BMI))}</p>

                    <form className='p-8 font-bold w-fit mx-auto' action="BMI" onSubmit={updateBMI}>
                        <div className='p-4'>
                            <label className='block mb-2' htmlFor="weight">Weight (in kg)</label>
                            <input className='block w-16 mx-auto border-2 text-black text-center'
                                name='weight'
                                type="text" 
                                value={weight}
                                onChange={(e) => setWeight(e.target.value)}
                            />
                        </div>
                        <div>
                            <label className='block mb-2' htmlFor="height">Height (in cm)</label>
                            <input className='block w-16 mx-auto border-2 text-black text-center'
                                name='height'
                                type="text" 
                                value={height}
                                onChange={(e) => setHeight(e.target.value)}
                            />
                        </div>
                        <button className=' bg-blue-400 rounded-lg h-8 mt-8 px-2 text-white font-bold' type='submit'>update</button>
                    </form>
            </article>
        
        </main>
  )
}

export default AdjustBMI;
