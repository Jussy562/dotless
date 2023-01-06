import React from 'react'
import HowItWorkList from './howItWorkList'
import howItWorkFiles from './howItWorkFile' 



function HowItWork({item}) {
  return (
    <div className='flex flex-col'>
        <div className='flex mb-8'>
            <h3 className='text-dark text-2xl font-bold'>
                It is easy to use <span className='text-blue-200'>DOTLESS</span>.
                All you have to do is to follow the steps below:
            </h3>
        </div>
        
        <div className='flex flex-row md:flex-row md:items-center'>
            <div className='flex gap-8'>
                {
                    howItWorkFiles.map((item) => (
                    <HowItWorkList key={item.id} item={item} />
                    ))
                }
            </div>
            {/* <div className='flex w-1/3'>
                <div>
                    <img src='/asset/cleaning8.jpg' alt='dotless cleaning'   />
                </div>
            </div> */}
        </div>
    </div>
  )
}

export default HowItWork