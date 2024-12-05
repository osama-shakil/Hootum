import React from 'react'

const CustomLabel = ({price}) => {
  return (
    <div className='text-md font-noraml p-2 rounded bg-black text-white w-24'>
        ₺ {price.toLocaleString()}
    </div>
  )
}

export default CustomLabel
