import React from 'react'
import Button from '../button/button'

function HomeBanner() {
  return (
    <div className='flex items-center gap-2 mt-20 md:mt-60 md:px-20 px-4 w-full'>
        <div className='w-half'>
            <div className='w-2/3 flex gap-4 flex-col items-start'>
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
        <div className='w-half'>

        </div>
    </div>
  )
}

export default HomeBanner