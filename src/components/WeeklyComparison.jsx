import React from 'react'

const WeeklyComparison = ({display}) => {

    const days = ['Monday', 'Wednesday', 'Friday', '']


  return (
    <section id='compare' onClick={display} className='min-h-screen w-full absolute left-0 z-50 top-0 min opacity-80 bg-black flex items-center justify-center'>
        <section className="w-5/6 h-1/2 bg-white opacity-100 border-2">
            <article>
                {days.map(day=>(
                    <p key={days.indexOf(day)} className='my-2 border-b-2 py-2 pl-2 cursor-pointer'>Competition</p>
                ))}
            </article>
        </section>
    </section>
  )
}

export default WeeklyComparison;
