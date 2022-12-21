import React from 'react'
import HomeBanner from '../../banner/homeBanner'
import DotlesssService from '../../dotlessService/dotlesssService'
import Navbar from '../../navbar/navbar'

function Home() {
  return (
    <>
        <header>
            <Navbar />
            <HomeBanner />
            <DotlesssService />
        </header>
    </>
  )
}

export default Home