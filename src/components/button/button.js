import React from 'react'

function Button({title}) {
    console.log({title});
  return (
    <a href='/' className='w-full md:w-auto bg-blue-400 hover:bg-blue-300
    py-3 px-6 rounded-lg text-white text-center text-l md:text-xl font-bold transition:ease-in'>
        {title}
    </a>
  )
}

export default Button;