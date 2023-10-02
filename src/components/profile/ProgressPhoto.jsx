import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header';

const ProgressPhoto = () => {

    const [uploadedBefore, setUploadedBefore] = useState('');
    const [uploadedAfter, setUploadedAfter] = useState('');
    const [beforeImage, setBeforeImage] = useState('');
    const [afterImage, setAfterImage] = useState('');

    const handleSubmitOld = (e) =>{
        e.preventDefault();
        console.log('Old Me')
    }

    const handleSubmitNew = (e) =>{
    e.preventDefault();
    console.log('New Me')
    }


    return (
        <main className='pb-16'>
            <Header heading='Progress Shots'
                    redirect='/profile'
            />
            
            <section className='p-4'>
                {/* <h1 className="text-center m-4 texwhitet-2xl ">It all starts here</h1> */}
                <ul className='text-sm marker pl-8'>
                    <li>{'>'} Upload a picture of your current self</li>
                    <li>{'>'} Upload a picture of the new you</li>
                    <li>{'>'} Compare the differences</li>
                    <li>{'>'} Share Online</li>
                </ul>
                <figure className="flex gap-2 m-2 pb-8 border-b-2 text-gray-400">
                    <img src={beforeImage} alt='Before' width="198" height="239" className='w-1/2 border-2 m-2'/>
                    <img src={afterImage} alt='After' width="198" height="239" className='w-1/2 border-2 m-2 '/>
                </figure>

                <article className='flex flex-col xs:flex-row'>
                    <form className='p-4 text-xs' action="pictures" onSubmit={handleSubmitOld}>
                        <label type="image">Upload Old You</label>
                        <input className=''
                                type="file"
                                name="image" 
                                id="image"
                                />
                        <button className='bg-blue-400 rounded-full p-1 w-8 h-8 text-white text-xs font-bold' type='submit'>^</button>
                    </form>

                    <form className='p-4 text-xs ' action="pictures" onSubmit={handleSubmitNew}>
                        <label type="image">Upload New You</label>
                        <input 
                                type="file"
                                name="image" 
                                id="image"
                                />
                        <button className='bg-blue-400 rounded-full p-1 w-8 h-8 text-white text-xs font-bold' type='submit'>^</button>
                    </form>
                </article>
            </section>
        </main>
        
    ) 
}

export default ProgressPhoto
