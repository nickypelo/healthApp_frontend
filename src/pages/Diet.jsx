import React, { useContext, useEffect, useState } from 'react';
import Header from '../components/Header';
import TokensContext from '../context/TokensContext';
import { useNavigate } from 'react-router-dom';
import MealSection from '../utilities/MealSection';

//image imports
import chicken1 from '../../public/chicken.jpg'
import chicken2 from '../../public/chicken2.jpg'
import taste2 from '../../public/stew2.jpg'
import taste1 from '../../public/stew.jpg'
import glass from '../../public/glass.png'
import plus from '../../public/plus.png'
import AuthContext from '../context/AuthContext';

const Diet = () => {

    const redirect = useNavigate()

    const {user} = useContext(AuthContext)

    //useStates for the page
    const [dish1, setDish1] = useState(false);
    const [dish2, setDish2] = useState(false);
    const [dish3, setDish3] = useState(false);
    const [dish4, setDish4] = useState(false);
    const [water, setWater] = useState([]) //creating a list just to map cups of water


    //Redirect user to sign in
    const inside = () =>{
        redirect('/login')
    }

    //change the states of meal options from option to selected
    const setters = (id) =>{
        if(id === 'id1'){
            setDish1(!dish1)
        }
        else if(id === 'id2'){
            setDish2(!dish2)
        }
        else if(id === 'id3'){
            setDish3(!dish3)
        }
        else if(id === 'id4'){
            setDish4(!dish4)
        }
    }
   
    //preload the food history
    useEffect(()=>{
        if(localStorage.getItem('food')){
            const foodItems = JSON.parse(localStorage.getItem('food'));
            for(let i = 0; i<foodItems.length; i++){
                setters(foodItems[i].id)
            }
        }
        else{
            localStorage.setItem('food', JSON.stringify([]))
        }

    },[])

    //preload the water history
    useEffect(()=>{
        if(localStorage.getItem('water')){
            const foodItems = JSON.parse(localStorage.getItem('water'));
            setWater(foodItems)
            console.log('babe')
        }
        else{
            localStorage.setItem('water', JSON.stringify([]))
        }
    }, [])
    

     //increment for every cup of water
     const drink = () => {
        let i = localStorage.getItem('water').length
        if(water.length<8){
            localStorage.setItem('water', JSON.stringify([...water, String(i)]))
            setWater([...water, String(i)]);
            console.log(water)
        }
        if(water.length === 8){
        }

        if(water.length>8){
            ''
        }
    }

    return (
        <main className=''>
            <Header heading='Diet Section'/>

            {/* Meal Section*/}
            <h2 className="w-fit m-4 px-2 text-black bg-neutral-200">
                    Suggested Meal Plan 
            </h2>

            {/* Meal Options Section */}
            <section className='flex flex-wrap gap-4'>
                <MealSection
                    image={chicken1}
                    dish={dish1}
                    setters={setters}
                    selector={'id1'}
                />
                <MealSection
                    image={chicken2}
                    dish={dish2}
                    setters={setters}
                    selector={'id2'}
                />
                <MealSection
                    image={taste1}
                    dish={dish3}
                    setters={setters}
                    selector={'id3'}
                />
                <MealSection
                    image={taste2}
                    dish={dish4}
                    setters={setters}
                    selector={'id4'}
                />
            </section> 

            {/* water Section*/}
            <h2 className="w-fit m-4 px-2 text-black bg-neutral-200 relative">
                    Water
                    <button onClick={drink}><img className='absolute bg-white top-1 left-16' src={plus} width='20' height='20'/></button>
            </h2>
            
        <section className='flex m-4 border-2 min-h-24 flex-wrap gap-2'>
                {water.map(cup=>(
                    <figure key={water.indexOf(cup)} className='w-16 h-24 p-4'>
                        <img src={glass} alt="cup" />
                    </figure>
                ))}
        </section>

        <section>
        <h2 className="w-fit m-4 px-2 text-black bg-neutral-200">
                    Have any Suggestions?
            </h2>
            <p className="w-fit m-4 px-2  ">Share your recipes for review from fellow gym mates</p>
            {user ?
                <form action="" className='w-3/4 mx-auto' onSubmit={(e)=>e.preventDefault()}>
                    <div className='mb-4'>
                    <label className='pr-4 block' htmlFor="">Dish</label>
                        <input type="text" />
                    </div>
                    <div>
                    <label className='pr-4 block' htmlFor="">Recipe</label>
                        <textarea name="" id="" cols="20" rows="10"></textarea>
                    </div>
                    <button className='text-black bg-white px-2' >Share</button>
                </form>  
                :
                <button onClick={inside}><p className="w-fit m-4 px-2 bg-white rounded-2xl text-black ">Sign In</p></button>
            }
        
        </section>
        </main>
    )
}

export default Diet;
