import React, { useEffect, useState } from 'react'
import Header from '../../components/Header';

const Advanced = () => {

    const [advancedWorkout, setWorkout] = useState([]);

    useEffect(()=>{
        setWorkout([]);
    }, [])


    return (
        <main>
            <Header heading='Advanced'
                    redirect='/exercise'
            />

            <section className="h-40v text-center rounded-b-3xl round bg-rose-600 shadow-md mb-8">
                            <button className="px-2 bg-orange-200 rounded-md">Start</button>

            </section>

            <section>
                {advancedWorkout.map(set=>(
                    <article key={set.id} className="bg-green-400 rounded-md my-4 w-4/5 h-20 mx-auto flex justify-around">
                        <img src={set.image} alt="" />
                    </article>
                ))}
            </section>
        </main>
  )
}

export default Advanced;
