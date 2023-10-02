import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import TokensContext from '../../context/TokensContext';

const ProgressBar = () => {

  // const {color1, color2, color3, color4, color5} = useContext(ProgressContext);

  const [color1, setColor1] = useState('');
  const [color2, setColor2] = useState('');
  const [color3, setColor3] = useState('');
  const [color4, setColor4] = useState('');
  const [color5, setColor5] = useState('');

  const measureProgress = (dayObjective) =>{
    if(dayObjective === 1){
      setColor1('bg-red-600');
    }
    else if(dayObjective === 2){
      setColor1('bg-red-600');
      setColor2('bg-red-400');
    }
    else if(dayObjective === 3){
      setColor1('bg-red-600');
      setColor2('bg-red-400');
      setColor3('bg-orange-400');
    }
    else if(dayObjective === 4){
      setColor1('bg-red-600');
      setColor2('bg-red-400');
      setColor3('bg-orange-400');
      setColor4('bg-green-200');
    }
    else if(dayObjective === 5){
      setColor1('bg-red-600');
      setColor2('bg-red-400');
      setColor3('bg-orange-400');
      setColor4('bg-green-200');
      setColor5('bg-green-600');
    }
  }

  //preload current progress
  useEffect(()=>{
    let add = 0
    if(localStorage.getItem('water')){
        const foodItems = JSON.parse(localStorage.getItem('water'));
        if(foodItems.length === 8){
          add += 1
        }
      }

    if(localStorage.getItem('food')){
        const foodItems = JSON.parse(localStorage.getItem('food'));
        if(foodItems.length > 2){
          add +=1
        }
    }
    measureProgress(add)

  }, [])
    

  return (
    <section className='w-11/12 mx-auto my-4 border-2 p-2  bg-white text-black rounded-3xl'>

        <h1 className='my-4 text-center text-xl font-bold'>Daily Progress Bar</h1>
        {/* Progress information */}
        <p className="text-sm">Stage .1 = completed water intake <em className='font-bold text-red-600'><Link to='/diet'>Check</Link></em></p>
        <p className="text-sm">Stage .2 = completed meals <em className='font-bold text-red-600'><Link to='/diet'>Check</Link></em></p>
        <p className="text-sm">stage .3 = completed exercises <em className='font-bold text-red-600'><Link to='/exercise'>Check</Link></em></p>
        <p className="text-sm">stage .4 = read at least 1 article <em className='font-bold text-red-600'><Link to='/exercise'>Check</Link></em></p>
        <p className="text-sm">stage .5 = completed stage 1 - 4</p>

        {/* Progress Display */}

        <article className="flex text-center justify-between h-24 mt-4 font-bold">
            <div className={`${color1} w-1/5 flex justify-center items-center`}>Stage .1</div>
            <div className={`${color2} w-1/5 flex justify-center items-center`}>Stage .2</div>
            <div className={`${color3}w-1/5 flex justify-center items-center`}>Stage .3</div>
            <div className={`${color4} w-1/5 flex justify-center items-center`}>Stage .4</div>
            <div className={`${color5} w-1/5 flex justify-center items-center`}>Stage .5</div>
        </article>
      
    </section>
  )
}

export default ProgressBar;
