import React from 'react'

function HowItWorkList({item}) {
  return (
    <div className='flex flex-row w-full md:w-1/2'>
        <ol>
            <li className="flex flex-row ">
                <div className='dotless-steps flex flex-col justify-center items-center  bg-blue-400 p-10 
                rounded-full h-80'>
                  <div>
                    <h4 className='text-2xl font-bold text-dark mb-4'>{item.name}</h4>
                    <p className='text-xl text-gray-800'>{item.desc}</p>
                  </div>
                  
                </div>
            </li>
        </ol>
    </div>
  )
}

export default HowItWorkList