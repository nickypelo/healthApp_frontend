import React from 'react'

const RadioButton = ({label, name,value,setValue}) => {
  return (
    <div className='px-16 py-4 text-left'>
        <input className='mr-3'
            name={name}
            type="radio" 
            value={value}
            onChange={(e) => setValue(e.target.value)}
        />
        <label htmlFor="">{label}</label>

    </div>
  )
}

export default RadioButton;
