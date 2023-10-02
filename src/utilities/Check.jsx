import React from 'react'

const Check = ({label,value,setValue}) => {
  return (
    <div className='px-16 py-1 text-left'>
        <input className='mr-3'
            type="checkbox" 
            value={value}
            onChange={(e) => setValue(value, e.target.checked)}
        />
        <label htmlFor="">{label}</label>
    </div>
  )
}

export default Check
