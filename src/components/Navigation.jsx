import React from 'react';
import { Link } from 'react-router-dom';
import homeIcon from '../../public/home-1-svgrepo-com.svg';
import exerciseIcon from '../../public/exercise-application-calculate-smartphone-calories-workout-health-svgrepo-com.svg';
import progressIcon from '../../public/progress-svgrepo-com.svg';
import profileIcon from '../../public/profile-1341-svgrepo-com.svg'
import dietIcon from '../../public/diet-healthy-organic-svgrepo-com.svg'


const Navigation = () => {
  return (
    <nav className='max-w-2xl mx-auto '>
        <ul className='fixed bottom-0  w-full max-w-2xl flex list-none border-t-2 rounded-t-2xl border-x-black border-2 justify-around p-4 bg-white text-black text-sm'>
            <li>
              <Link to='/'><img src={homeIcon} width='35' className='w-9 mx-auto block' /> Home</Link>
            </li>
            <li>
              <Link to='/exercise'><img src={exerciseIcon} width='35'className='w-9 mx-auto block'/> Exercises</Link>
            </li>
            <li>
              <Link to='/progress'><img src={progressIcon} width='35' className='w-9 mx-auto block'/>Progress</Link>
            </li>
            <li>
              <Link to='/diet'><img src={dietIcon} width='35' className='w-9 mx-auto block'/>Dietary</Link>
            </li>
            <li>
              <Link to='/profile'><img src={profileIcon} width='35' className='w-9 mx-auto block'/>Profile</Link>
            </li>
        </ul>
      
    </nav>
  )
}

export default Navigation
