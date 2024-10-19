import React from "react";
import { PiPaperPlaneTiltLight } from "react-icons/pi";


const Quote = () => {
  return (
    <>
      <div className="w-full h-[103px] md:h-[160px] lg:h-[217.5px] flex justify-center ">
        <div className=" w-[305px] md:w-[709px] lg:w-[1067px] lg:h-[435px] md:h-[320px] md:rounded-[50px] h-[206px] bg-[rgba(196,196,196,0.15)] rounded-[20px] flex justify-center items-center absolute ">
          <div className=" w-[280px] md:w-[659px] lg:w-[1031px] lg:h-[400px] md:h-[263px] md:rounded-[50px] h-[147px] bg-[#17C2EC] rounded-[10px] flex flex-col items-center ">
            <p className="text-[18px] font-bold font-montserrat text-white mt-[16px] mb-[5px] md:text-[36px] lg:text-[48px] lg:mt-[70px] lg:mb-5 ">Get a quote</p>
            <p className="text-[10px] font-medium font-montserrat text-white md:text-[20px] lg:text-[24px] ">Please do enter your email address below</p>
            
            <div className=" w-[233px] md:w-[549px] md:h-[75px] h-[40px] flex mt-[24px] mb-[28px] lg:mt-10 lg:mb-[107px] ">
                <div className=" w-[75%] h-full bg-white rounded-l-full ">
                    <input className=" w-full h-full rounded-l-full outline-none md:text-[20px] text-[10px] font-medium font-montserrat pl-[31px] " type="text" placeholder="lenux.ng@gmail.com" />
                </div>
                <button className=" text-white w-[25%] text-[23px] md:text-[40px] flex justify-center items-center h-full bg-[#0B153C] rounded-r-full ">
                    <PiPaperPlaneTiltLight />
                </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Quote;
