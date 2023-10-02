import React from 'react';
const Checkbox = ({reason}) => {
   
    return (
        <div className='flex  w-80 mx-auto items-center my-3'>
            <input 
            type="checkbox" 
            name={reason} 
            className="appearance-none w-4 h-4 border-2 border-gray-400 rounded-sm bg-white checked:bg-blue-800 checked:border-0"           
            />
             <p className='ml-4 text-xl'>{reason}</p>
           
        </div>
    );
}

export default Checkbox;
