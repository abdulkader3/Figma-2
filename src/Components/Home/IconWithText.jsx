import React from 'react'

const IconWithText = ({ Icon, title, subtitle ,  }) => {
  return (
    <>
     <div className="w-full flex items-center gap-[10px] md:gap-[20px] ">
    <div className="icon">
      <div className=" w-[30px] md:w-[50px] md:h-[50px] md:rounded-[10px] h-[30px] flex bg-[rgba(196,196,196,0.1)] justify-center items-center rounded-md ">
        <Icon className="text-[20px] md:text-[30px] text-[#17C2EC]" />
      </div>
    </div>
    <div className="text-[13px] md:text-[20px] lg:text-[24px] lg:font-bold font-semibold font-montserrat">
      <p className={`text-[rgba(255,255,255,0.5)]`}>
        {title}
      </p>
      <p className={`text-[#fff]`}>
        {subtitle}
      </p>
    </div>
  </div>
      
    </>
  )
}

export default IconWithText
