import React from 'react'
import Button from '../button/button'

function HomeBanner() {
  return (
    <div className='flex flex-col-reverse md:flex-row  items-center mt-20 md:mt-60 md:px-20 px-4 pb-20 w-full '>
        <div className='w-full md:w-1/2'>
            <div className= 'flex gap-4 flex-col items-start'>
                <h2 className='text-blue-400 text-5xl'>
                    Don't spend another day feeling overwhelmed by cleaning.
                </h2>
                <p className='text-2xl text-gray-900 w-2/3 mb-6'>
                    Our professional cleaning service will leave your home sparkling clean.
                    We offer flexible scheduling and customizable cleaning plans.
                    
                </p>
                <Button title="Book Now" />
            </div>
        </div>
        <div className='w-1/2'>
            <div>
                <span>
                    <img src='/asset/clean.png' alt='dotless banner' className='motion-safe:animate-bounce'   />
                </span>
            </div>
        </div>
    </div>
  )
}

export default HomeBanner