import React, {useState} from 'react';
import Check from '../../utilities/Check';

const ExerciseSchedule = () => {

  const [daysOfWeek, setDaysOfWeek] = useState([]);
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']


  //adds and removes the number of days for gym
  const handleIncrements = (day, checked) => {
       checked ? setDaysOfWeek([...daysOfWeek, day]) : setDaysOfWeek(daysOfWeek.filter((days)=> days !== day))
  }  

  return (
    <>
       <h1 className="text-3xl pt-16">Schedule for the week</h1>
       
       {days.map(item =>(
       <Check key={days.indexOf(item)}
              label={item}
              value={item}
              setValue={handleIncrements}
       />
       ))}
      
    </>
  )
}

export default ExerciseSchedule;
