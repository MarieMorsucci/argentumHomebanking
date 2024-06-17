import React from 'react'

function Image({src}) {

  return (
    <>
       <img className='w-full' src={src} alt="..." /> 
    </>
  )
}

export default Image