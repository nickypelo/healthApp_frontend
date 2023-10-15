import React, {useContext, useState} from 'react';
import TokensContext from '../context/TokensContext';

const ScoreBoard = ({show, showBtn}) => {

    const {points} = useContext(TokensContext);

    const [competition, setCompetition] = useState([
        {
            id:1,
            image: 'pho',
            name: 'Legend',
            score: 500
        },
        {
            id:2,
            image: 'pho',
            name: 'Nicodemus',
            score: 420
        },
        {
            id:3,
            image: 'pho',
            name: 'Nicocopops',
            score: 213
        },
        {
            id:4,
            image: 'pho',
            name: 'Nick',
            score: 687
        }
    ])

    let tokens = 30;

    let gauge = (String(Math.floor((tokens/100)*100)) + '%')//Gauge the progress towards goal

  return (
    <section>
        {/* Display My ScoreBoard */}
        <article className='flex justify-between p-4 w-11/12 mx-auto'>
            <figure className="w-16 h-16 rounded-full border-2 ml-4">
                <img src="" alt="" />
            </figure>
            <article className="border-2 w-2/3">
                <div className='md:px-8 flex items-center justify-between pt-2'>
                    <p>Palesa</p>
                    <p>{tokens}/900</p>
                </div>
                <div className='text-center '>
                    <div className={`bg-gradient-to-r from-amber-500 to-lime-600 w-[30%] h-7`}></div>
                </div>
            </article>
        </article>

        {/* Display other peoples scores */}
        <section className={`${show} p-2 text-center border-2 w-11/12 mx-auto`}>
            <button onClick={showBtn} className="border-2 w-fit rounded-lg px-2 font-bold bottom-0 bg-black text-white">close</button>
            <h2 className='text-center my-2'>Other Users</h2>
            {competition.map(item=>(
                 <article key={item.id} className='flex h-10v bg-pink-600 justify-between items-center rounded-xl p-4 mb-4'>
                    <figure className="w-12 h-12 rounded-full border-2 ml-4">
                        <img src="" alt="" />
                    </figure>
                    <article className="px-4 flex flex-col items-center justify-center bg-rose-400 border-2 h-12 w-2/3">
                        <p>{item.name}</p>
                        <p>{item.score}</p>
                    </article>
                </article>
            ))}
        </section>
      
    </section>
    
  )
}

export default ScoreBoard
