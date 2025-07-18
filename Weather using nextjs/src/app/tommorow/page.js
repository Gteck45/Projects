import React from 'react'
import Forecast from '../components/Forecast'
import Navbar from '../components/Navbar'

const page = () => {
    return (
        <>
            <div className="absolute inset-0 -z-10 h-full mobile:h-fit tablet:h-fit w-full items-center  [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] ">
                <Navbar />
                <Forecast />
               
            </div>
        </>
    )
}

export default page