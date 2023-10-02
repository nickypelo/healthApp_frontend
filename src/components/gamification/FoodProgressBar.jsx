import React from 'react';

const MealProgressBar = ({icon , red, orange, green}) => {


  return (
    <article>
      <div className="w-4/5 h-14 mt-4 mx-auto text-center flex border-2">
        <div className={`w-1/3 ${red}`}>
          <img src={icon} alt="neutral_face" width='28' height='28'className='block w-fit mx-auto'/>
        </div>

        <div className={`w-1/3 ${orange}`}>
          <img src={icon} alt="neutral_face" width='28' height='28'className='block w-fit mx-auto'/>
        </div>

        <div className={`w-1/3 ${green}`}>
          <img src={icon} alt="neutral_face" width='28' height='28'className='block w-fit mx-auto'/>
        </div>
      </div>
    </article>
  )
}

export default MealProgressBar;
