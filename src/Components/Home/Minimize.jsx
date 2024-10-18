import React from 'react'
import { IoArrowBack } from 'react-icons/io5'


const Minimize = ({ userIcon , taitalTex, more , MoreIcon }) => {
  return (
    <>

    <div className=" w-[188px] h-[202px] lg:w-[350px] lg:h-[350px] md:w-[296px] md:h-[290px] md:pt-10 md:pl-10  pt-5 pl-5  bg-transparent border-[3px] text-white border-[rgba(185,185,185,0.5)] rounded-[30px] md:rounded-[60px] mt-[30px] ">
        <div className=" w-[50px] md:w-[69px] md:h-[69px] md:text-[49px] text-[30px] flex justify-center items-center  rounded-[10px] h-[50px] bg-[rgba(196,196,196,0.1)] ">
           {userIcon}
        </div>
        <h2 className=' text-[14px] lg:mt-[40px] lg:mb-[52px] font-montserrat font-bold my-5 md:mt-10 md:mb-5 w-auto md:w-[214px]  md:text-[20px] lg:text-[24px] lg:w-[257px] '> {taitalTex} </h2>
        <div className="w-[150px] md:mb-[31px] md:w-[142px] md:text-[18px] md:gap-[10px] flex items-center gap-[5px] text-[14px] font-bold font-montserrat text-[rgba(255,255,255,0.5)] ">
            <p className='  '> {more} </p> {MoreIcon}
        </div>
    </div>
      
    </>
  )
}

export default Minimize
