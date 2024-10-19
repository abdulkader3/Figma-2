import React from 'react'

const COVIDVaccine = () => {
  return (
    <>
    <div className=" mainCOVIDVaccine w-full px-[35px] pt-[35px] lg:pt-[40px] lg:pl-[70px] md:pt-[40px] md:px-[56px]  ">

        <div className="w-full flex justify-center md:justify-start ">
        <h2 className='text-[24px] md:text-[36px] font-bold font-montserrat w-[230px] md:w-[586px] lg:text-[48px] '>Get your vaccine 
        registration today</h2>
        </div>

        <img className=' block lg:hidden w-[305px] md:w-[401px] mt-5 mb-[38px] md:mt-10 md:mb-[70px] ' src="photos/COVIDVaccine.png" alt="COVIDV" />

    </div>
      
    </>
  )
}

export default COVIDVaccine
