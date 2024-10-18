import React from "react";
import Minimize from "./Minimize";
import { LuUsers } from "react-icons/lu";
import { IoArrowBack, IoThermometer } from "react-icons/io5";
import { FiShield } from "react-icons/fi";

const Immune = () => {
  return (
    <>
      <div className=" Mainimmune ">
        <div className="w-full lg:flex  lg:justify-between ">
          <h2 className=" w-[265px] md:w-[450px] lg:w-auto text-[24px] md:text-[36px] font-montserrat font-bold text-[#fff]  ">
            Why get vaccinated today?
          </h2>
          <h2 className=" w-[265px] md:w-[536px] text-[14px] md:text-[20px] font-montserrat font-normal text-[rgba(255,255,255,0.5)] mt-[17px] mb-[40px] md:mt-[40px] lg:mt-0 md:mb-[50px] ">
            Magna adipiscing at elit at ornare lectus nibh lorem. Ac, sed ac
            lorem pellentesque vestibulum risus matti. In molestie condimentum
            malesuada non.{" "}
          </h2>
        </div>

        <div className="w-full ">
          <div className=" lg:flex lg:items-end lg:justify-between ">
            <div className=" w-[276px] md:w-[449px] bg-[rgba(196,196,196,0.2)] rounded-tl-[25px] rounded-tr-[90px] rounded-b-[25px] pt-5 pl-5 pb-[30px] md:pt-10 md:pl-10 md:pb-[74px] ">
              <div className=" flex text-[30px] text-[#17C2EC] justify-center items-center w-[50px] h-[50px] md:w-[100px] md:h-[100px] md:text-[69px] bg-[rgba(196,196,196,0.1)] rounded-[10px] ">
                <FiShield />
              </div>
              <h2 className=" text-[#17C2EC] text-[14px] md:text-[24px] font-montserrat font-bold my-5 md:mt-10 mb-[30px]  ">
                Protects your immune system against viruses
              </h2>
              <p className=" text-[12px] md:text-[18px] md:w-[353px] font-medium font-montserrat w-[235px] text-white ">
                Velit ut consectetur mauris, orci amet, faucibus. Sit turpis
                fringilla ipsum pretium, dictum. Dolor eget vel nulla lorem ac.
              </p>
              <div className="w-[94px] md:w-[142px] md:text-[18px] md:gap-[10] text-[#17C2EC] text-[12px] font-bold font-montserrat flex gap-[5px] mt-[26px] md:mt-10 ">
                <p>Read More</p> <IoArrowBack className=" rotate-180 text-[20px] md:text-[30px]" />
              </div>
            </div>

            <div className=" md:flex md:gap-[37px] ">
              <Minimize
                userIcon={<LuUsers />}
                taitalTex={"Minimize the spread of the Virus"}
                more={"Read More"}
                MoreIcon={<IoArrowBack className=" rotate-180" />}
              />
              <Minimize
                userIcon={<IoThermometer />}
                taitalTex={"Protect yourself"}
                more={"Read More"}
                MoreIcon={<IoArrowBack className=" rotate-180" />}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Immune;
