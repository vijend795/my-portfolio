import React from 'react'

const Heading = ({children}) => {
  return (
    <div 
    // className='capitalize text-3xl text-center mb-8 font-semibold shadow-md p-3 w-full shadow-blue-400'
    className='capitalize text-3xl text-center mb-8 font-semibold p-3 w-full underline'
    
    >
    {children}
  
    
    </div>

  )
}

export default Heading