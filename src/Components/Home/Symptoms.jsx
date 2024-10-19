import React from "react";

const Symptoms = () => {
  return (
    <>
      <div className=" MainSymptoms ">
        <div className="w-full flex flex-col items-center">
          <p className=" text-[12px] md:text-[20px] lg:text-[24px] font-montserrat font-bold text-white lg:mt-[66px] lg:mb-5 md:mt-10 mb-[10px] mt-[25px] ">
            Covid-19 Prevention
          </p>

          <p className=" text-[24px] md:text-[36px] lg:text-[48px] font-montserrat font-extrabold text-white ">
            {" "}
            <span className="text-[#17C2EC]">COVID-19</span> Symptoms
          </p>

          <p className=" text-[12px] lg:mt-10 md:text-[18px] md:mt-10 mt-[10px] lg:text-[24px] font-medium font-montserrat text-[rgba(255,255,255,0.5)] text-center w-[296px] md:w-[553px] lg:w-[952px] ">
            Adipiscing nec etiam tortor elit quisque. Arcu aliquet convallis
            aenean eu velit. Mi vestibulum, ullamcorper venenatis imperdiet
            augue arcu donec neque.
          </p>
        </div>
      </div>
    </>
  );
};

export default Symptoms;
