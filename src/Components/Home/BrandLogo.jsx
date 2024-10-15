import React from 'react'

const BrandLogo = () => {
  return (
    <>
    <div className="w-full h-[40px] md:h-[80px] lg:h-[150px] bg-white flex items-center justify-center">
              <div className="flex items-center justify-center gap-[6px] md:gap-[24px] lg:gap-[48px]  opacity-70">
                <img className="w-[72px] h-[16px] md:w-[148px] md:h-[34px] lg:h-[66px] lg:w-[288px] " src="photos/Moderna_logo1.png" alt="logo" />
                <img className="w-[72px] h-[29px] md:w-[148px] md:h-[60px] lg:h-[117px] lg:w-[288px]" src="photos/Moderna_logo2.png" alt="logo" />
                <img className="w-[72px] h-[20px] md:w-[148px] md:h-[42px] lg:h-[81px] lg:w-[288px]" src="photos/Moderna_logo3.png" alt="logo" />
                <img className="w-[72px] h-[14px] md:w-[148px] md:h-[29px] lg:h-[57px] lg:w-[288px]" src="photos/Moderna_logo4.png" alt="logo" />
              </div>
            </div>
      
    </>
  )
}

export default BrandLogo
