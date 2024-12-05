import Image from 'next/image'
import React from 'react'

const SuccessMessage = () => {
  return (
    <div className='px-16 py-12 flex flex-col items-center gap-8'>
        <Image src="/success.svg" width={200} height={200} alt="success"></Image>
      <p className='text-theme-secondary font-normal text-xl'>Registation done successfully.</p>
    </div>
  )
}

export default SuccessMessage
