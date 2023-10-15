import React, {useContext, useEffect, useState} from 'react';
import FoodProgressBar from '../components/gamification/FoodProgressBar';
import ProgressBar from '../components/gamification/ProgressBar';
import Header from '../components/Header';
import ScoreBoard from '../components/ScoreBoard'
import TokensContext from '../context/TokensContext';
import WeeklyComparison from '../components/WeeklyComparison';

//image imports for food
import star from '../../public/star.png'
import sad from '../../public/sad.png';
import neutral from '../../public/neutral.png';
import happy from '../../public/happy.png';


//image imports for exercise
import saddy from '../../public/sad.png';
import neutrally from '../../public/neutral.png';
import happyly from '../../public/happy.png';


const Progress = () => {

    const [red, setRed] = useState('bg-red-400');
    const [icon, setIcon] = useState(sad);
    const [orange, setOrange] = useState('');
    const [green, setGreen] = useState('');

    const [reddy, setReddy] = useState('bg-red-400');
    const [gymmy, setGymmy] = useState(sad);
    const [orangy, setOrangy] = useState('');
    const [greeny, setGreeny] = useState('');

    const [show, setShow] = useState('hidden');
    const [display, setDisplay] = useState(false);
    const [dietCount, setDietCount] = useState(0)
    const [exerciseCount, setExerciseCount] = useState(0)

    let d = 0
    let gym = 0

    const {points} = useContext(TokensContext);

     // To change the meal progress bar
     const handleMealProgressBar = () =>{
        console.log('we here', dietCount)
        
        if(d === 2){
            setOrange('bg-orange-400')
            setRed('bg-orange-400')
            setIcon(neutral)
        }
        else if(d  > 2){
            setRed('bg-green-600');
            setOrange('bg-green-600');
            setGreen('bg-green-600');
            setIcon(happy);
        }
    }

     // To change the meal progress bar
     const handleExcerciseProgressBar = () =>{
        console.log('we here', exerciseCount)
        
        if(gym === 2){
            setOrangy('bg-orange-400')
            setReddy('bg-orange-400')
            setIcon(neutral)
        }
        else if(gym  > 2){
            setReddy('bg-green-600');
            setOrangy('bg-green-600');
            setGreeny('bg-green-600');
            setGymmy(happy);
        }
    }


    //prevent progress display from resetting when we refresh
    useEffect(()=>{
        if(localStorage.getItem('food')){
            const foodItems = JSON.parse(localStorage.getItem('food'));
            setDietCount(foodItems.length);
            d = foodItems.length
        }
        handleMealProgressBar()

        if(localStorage.getItem('exercise')){
            const exerciseItems = JSON.parse(localStorage.getItem('exercise'));
            setExerciseCount(exerciseItems.length)
            gym = exerciseItems.length
        }
        handleExcerciseProgressBar()
    },[])



    const showBtn = ()=>{
        show === 'hidden'
         ?
         setShow('')
         :
         setShow('hidden')
    }

     //display my weekly schedule
    const handleDisplay = () =>{
        console.log('clicked')
        setDisplay(!display)
    }

    // useEffect(()=>{
    //     axios
    //     .get(URL)
    //     .then(response=>{
    //         if(response.status < 300){
    //             console.log('received');
    //             setCompetition(response.data)
    //         }
    //         else{
    //             console.log('Askies')
    //         }
    //     })
    //     .catch(error=>{
    //         console.log('Error');
    //     })
    // })

  return (
    <main className=''>
        <Header heading='My Progress' />

        {/* See Other Users progress  */}
        <ScoreBoard show={show}
                    showBtn={showBtn}
        />

        {/* Daily Progress Bar */}
        <ProgressBar />

        <article className="w-11/12 mx-auto my-4 border-2 p-2 relative  bg-white text-black rounded-3xl">
            <h2 className="w-fit bg-neutral-200 font-semibold p-2">Following Diet?</h2>
            <p className="text-sm">1 Meal or less = 0 tokens</p>
            <p className="text-sm">2 meals = 8 tokens</p>
            <p className="text-sm">more than 2 meals = 15 tokens</p>

            {dietCount > 2 ?
                <img src={star} className='absolute top-3 right-3' />
                :
                undefined
            }
            
            <FoodProgressBar
                    icon={gymmy}
                    red={reddy}
                    orange={orangy}
                    green={greeny}
            />
        </article>

        <article className="w-11/12 mx-auto my-4 border-2 p-2 relative bg-white text-black rounded-3xl">
            <h2 className="w-fit bg-neutral-200 font-semibold p-2">Following Reps?</h2>
            <p className="text-sm">1 Workout or less = 0 tokens</p>
            <p className="text-sm">3 Workouts = 15 tokens</p>
            <p className="text-sm">5 or more Workouts = 28 tokens</p>

            {dietCount > 2 ?
                <img src={star} className='absolute top-3 right-3' />
                :
                undefined
            }

            <FoodProgressBar
                    icon={icon}
                    red={red}
                    orange={orange}
                    green={green}
            />
        </article>
        
        <article className='mx-4'>
            <h2 className='my-4 text-2xl pl-2 font-bold'>More Information</h2>
            <p onClick={showBtn} className='my-2 border-b-2 py-2 pl-2 cursor-pointer line-through'>Competition</p>

            {display ?
                <WeeklyComparison display={handleDisplay}/>
                :
                <p onClick={handleDisplay} className='my-2 border-b-2 py-2 pl-2 cursor-pointer'>Schedule Days Results</p>
            }
            <p onClick={showBtn} className='my-2 border-b-2 py-2 pl-2 cursor-pointer'>Group</p>
        </article>
      
    </main>
  )
}

export default Progress;
