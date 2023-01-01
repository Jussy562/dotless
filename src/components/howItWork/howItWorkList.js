import React from 'react'

function HowItWorkList({item}) {
  return (
    <div className='flex flex-col w-1/2'>
        <ol>
            <li className="flex flex-col mb-8">
                <h4 className='text-2xl font-bold'>{item.name}</h4>
                <p className='text-xl'>{item.desc}</p>
            </li>
        </ol>
    </div>
  )
}

export default HowItWorkList