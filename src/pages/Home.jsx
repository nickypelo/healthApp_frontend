import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import food from './../../public/dish.png';
import gym from './../../public/gym.png'
import QRCodeGenerator from '../components/QRCodeGenerator';
import Ads from '../components/Ads';

const Home = () => {

  return (
    <main className='font-bold text-white'>
      <Header heading='Healthier'
      />
        <h1 className="text-2xl p-4 font-bold text-center">
          Welcome to Your #1 WorkOut Buddy 
        </h1>
        {/* <Ads /> */}
        <article className='flex flex-col xs:flex-row text-black rounded-lg m-2 bg-blue-200 shadow-2xl font-bold xs:h-44'>
          <h1 className="text-2xl p-4 xs:w-1/2 xs:flex xs:items-center font-semibold">CHALLENGE OF THE MONTH :)</h1>
          <p className='px-4 pb-4 xs:w-1/2 xs:flex xs:items-center xs:p-4'>Get more than 900 tokens and get a 20% Discount on next month's gym membership subscription</p>
        </article> 

        {/* Links diet and exercise pages */}
        <h2 className="text-center m-4">Here's How</h2>
        <article className=" rounded-2xl w-11/12 mx-auto p-2 gap-4 flex flex-col xs:flex-row xs:justify-around">
        {/* <article className=" rounded-2xl w-11/12 mx-auto p-2 grid grid-cols-1 xs:grid-cols-2"> */}


          <div className='flex flex-1 p-5 text-white bg-pink-700 rounded-2xl xs:flex-col xs:items-center'>
            <img src={food} alt="" className="block mr-4 rounded-full w-16 h-16 border-2 border-black" />
            <div className="h-16 flex flex-col justify-center ">
              <em className='block'>Get your diet in check </em>
              <em><Link className='text-black px-2 font-bold bg-white' to='/diet'>here...</Link></em>
            </div>
          </div>

          <div className='flex flex-1 p-5 text-white bg-pink-700 rounded-2xl xs:flex-col xs:items-center '>
            <img src={gym} alt="" className="block mr-4 rounded-full w-16 h-16 border-2 border-black" />
            <div className="h-16 flex flex-col justify-center p-4 ">
              <em className='block'>Get your Routine in check </em>
              <em><Link className=' bg-white px-2 text-black font-bold' to='/exercise'>here..</Link></em>
            </div>
          </div>
        </article>
      
    </main>
  )
}

export default Home;
