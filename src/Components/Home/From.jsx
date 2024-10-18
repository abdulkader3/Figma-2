import React from "react";
import InputField from "./InputField";

const From = () => {
  return (
    <>
      {/* independent section four start */}
      <section className="w-full h-auto backgraoundPhotos flex flex-col items-center">
        <div className="w-[250px] mb-[32px] md:mb-[57px] lg:mb-[63px] md:w-[667px] lg:w-[1299px] lg:h-[341px] h-[381px] md:h-[482px] bg-[rgba(196,196,196,0.1)] rounded-[20px] mt-[84px] flex flex-col items-center lg:items-start ">
          <div className="w-full lg:pl-[93px] h-[40px] md:h-[55px] bg-[rgba(196,196,196,0.05)] rounded-tl-[10px] rounded-tr-[10px] mb-[21px] flex justify-center lg:justify-start items-center">
            <p className="text-[10px] md:text-[20px] font-bold font-montserrat text-white">
              Check your COVID-19 result on our Database
            </p>
          </div>

          <div className=" block md:hidden">
            {/* Using InputField component */}
            <InputField placeholder="Okeowo" />
            <InputField placeholder="NIK Number" />
            <div className="w-full flex justify-center">
              <button className="w-[130px] ml-[13px] mt-5 h-[40px] text-[14px] font-montserrat font-bold rounded-[8px] hover:bg-[#17C2EC] text-[#17C2EC] hover:text-[#fff] border-[2px] border-[#17C2EC] transition-all hover:scale-110 active:scale-95">
                Check
              </button>
            </div>

            <div className="w-full mt-[48px]">
            <div className="w-[230px] h-[50px] bg-[rgba(196,196,196,0.05)] rounded-[10px] rounded-tr-[10px] mb-[21px] flex justify-center items-center">
              <p className="text-[10px] font-bold font-montserrat text-center text-[#17C2EC]">
                Need a certificate for your COVID-19 result? Please click{" "}
                <span className="underline">here</span>
              </p>
            </div>
            </div>
          </div>

          <div className=" md:block hidden lg:pl-[93px] ">
            <div className=" w-[447px] lg:flex lg:gap-5 ">
              {/* Using InputField component */}
              <InputField
                forResponsive="md:w-full md:h-[69px]"
                placeholder="Okeowo"
              />
              <InputField
                forResponsive="md:w-full md:h-[69px]"
                placeholder="NIK Number"
              />
              <div className="w-full">
                <button className="w-[130px] md:w-[172px] md:h-[64px] md:rounded-[20px] ml-[13px] mt-5 h-[40px] text-[14px] font-montserrat font-bold rounded-[8px] hover:bg-[#17C2EC] text-[#17C2EC] hover:text-[#fff] border-[2px] border-[#17C2EC] transition-all hover:scale-110 active:scale-95">
                  Check
                </button>
              </div>
            </div>

            <div className="w-[230px]  md:w-[538px] lg:w-[1113px] lg:h-[70px] md:mt-[50px] h-[50px] bg-[rgba(196,196,196,0.05)] rounded-[10px] rounded-tr-[10px] mb-[21px] flex justify-center items-center">
              <p className="text-[10px] md:text-[14px] lg:text-[24px] font-bold font-montserrat text-center text-[#17C2EC]">
                Need a certificate for your COVID-19 result? Please click{" "}
                <span className="underline">here</span>
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* independent section four end */}
    </>
  );
};

export default From;
