import React from 'react'

const InputField = ({ placeholder , forResponsive }) => {
  return (
    <>
       <div className={`w-[230px] h-[50px] mt-5 ${forResponsive} `}>
    <input
      className="text-white md:text-[20px] w-full h-full bg-transparent outline-none border-[rgba(196,196,196,0.15)] transition-all border-[2px] focus:border-[#17C2EC] rounded-[10px] pl-[17px]"
      type="text"
      placeholder={placeholder}
    />
  </div>
    </>
  )
}

export default InputField
