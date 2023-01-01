import React from 'react'

function Footer() {
  return (
    <div className='px-4 md:px-20 py-20 md:py-40 bg-gray-500'>
        <div className='flex flex-col md:grid  md:grid-cols-3 md:gap-6 mb-16 md:mb-20'>
            <div className='flex flex-col items-start'>
                <div className='mb-6 md:mb-8'>
                    <span>
                        <img src='asset/dot2.png' alt='dotless' className='w-28 md:w-30 lg:w-40' />
                    </span>
                </div>
                <div>
                    <p className='text-xl text-gray-300'>
                        Dotless is a professional and reliable 
                        cleaning service company that uses best 
                        products and techniques to ensure your 
                        home and office is sparkling clean.
                    </p>
                </div>
            </div>

            <div className='w-auto flex justify-center '>
                <div className='flex flex-col items-start '>
                    <div className='flex  mb-6 md:mb-8'>
                        <span>
                            <h4 className='text-gray-300 font-bold text-xl'>Links</h4>
                        </span>
                    </div>

                    <div className='flex md:justify-center'>
                        <ul className='text-xl text-gray-300 '>
                            <li>
                                <a href='/' className='hover:text-blue-300'>Home</a>
                            </li>
                            <li>
                                <a href='/' className='hover:text-blue-300'>About</a>
                            </li>
                            <li>
                                <a href='/' className='hover:text-blue-300'>Services</a>
                            </li>
                            <li>
                                <a href='/' className='hover:text-blue-300'>Contact</a>
                            </li>
                        </ul>
                    </div>
                
                </div>
            </div>
            <div className='w-auto flex justify-center'>
                <div className='flex flex-col items-start'>
                        <div className='flex  mb-6 md:mb-8'>
                            <span>
                                <h3 className='text-xl text-gray-300 font-bold'>Contact Us</h3>
                            </span>
                        </div>
                        <div className='flex md:justify-center'>
                            <ul>
                                <li>
                                    <a href='/' className='text-xl text-gray-300 
                                    hover:text-blue-300'>
                                        hello@dotless.com
                                    </a>
                                </li>

                                <li>
                                    <a href='/' className='text-xl text-gray-300 
                                    hover:text-blue-300'>
                                        +2349035401231
                                    </a>
                                </li>
                            </ul>
                        </div>
                </div>
            </div>
        </div>
        <hr />
        <div className='flex justify-center mt-4'>
            <p className='text-l text-white font-bold'>2022 <span className='text-blue-400'>DOTLESS</span>. All right reserved.</p>
        </div>
    </div>
  )
}

export default Footer