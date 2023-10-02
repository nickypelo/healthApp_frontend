import React, {useState} from 'react';
import Check from '../../utilities/Check';

const AdjustSchedule = ({setViewSchedule}) => {

  const [daysOfWeek, setDaysOfWeek] = useState([]);
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']


  //adds and removes the number of days for gym
  const handleIncrements = (day, checked) => {
       checked ? setDaysOfWeek([...daysOfWeek, day]) : setDaysOfWeek(daysOfWeek.filter((days)=> days !== day))
  }  

  const updateSchedule = (e) => {
    e.preventDefault();
    console.log("what's up doc")

}


  return (
    <>
        <section onClick={setViewSchedule} className='min-h-screen absolute bg-black opacity-90 w-full top-0 left-0 z-20 flex items-center justify-center'>
        </section>
        <article className=" text-black absolute z-50 w-full top-20 left-0 text-center bg-white opacity-100 border-2">
            <h1 className="text-3xl pt-16">Schedule for the week</h1>
            <form action="schedule" onSubmit={updateSchedule}>
            {days.map(item =>(
                <Check key={days.indexOf(item)}
                        label={item}
                        value={item}
                        setValue={handleIncrements}
                />
                ))}
            </form>
        </article>
       
      
    </>
  )
}

export default AdjustSchedule;
