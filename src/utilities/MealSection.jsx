import React from 'react'

const MealSection = ({image, dish, setters, selector}) => {

    //Tracks which meals are being selected
    const confirm = (id) =>{
        if(localStorage.getItem('food')){
            const foodItems = JSON.parse(localStorage.getItem('food'));
            const foodString = localStorage.getItem('food')

            if(foodItems.length === 0){
                console.log('start')
                localStorage.setItem('food', JSON.stringify([...foodItems, {id:id}]))
            }
            else if(!foodString.includes(id)){
                console.log('Hello')
                localStorage.setItem('food', JSON.stringify([...foodItems, {id:id}]))
            }
            else{
                console.log('Bye bye')
                const newList = foodItems.filter(item=> item.id !== id)
                setters(id)
                localStorage.setItem('food', JSON.stringify(newList))
            }
        }
        setters(id)
    }

    //switch button text
    const buttonText = (value) =>{
        if(value === true){
            return 'Made'
        }
        return 'Make'
    }

    //switch button color
    const buttonColor = (value) =>{
        if(value === true){
            return 'bg-green-600 text-white px-2'
        }
        return 'bg-neutral-200 text-black px-2'
    }

    return (
        <article className={`shadow-xl  bg-[url('${image}')] bg-center bg-cover rounded-2xl w-72 h-32 mx-auto flex justify-center relative items-center`}>
                <p className='text-2xl bg-black text-white font-bold px-2'>Recipe</p>
                <button onClick={()=>confirm(selector)} className={`absolute bottom-0 right-2 ${buttonColor(dish)}`}>{buttonText(dish)}</button>
        </article>
    )
}

export default MealSection
