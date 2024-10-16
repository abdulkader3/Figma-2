import React, { useState } from "react";
import { BsCalendarDateFill } from "react-icons/bs";
import { FaRegClock } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import "./Home.css";
import IconWithText from "../Components/Home/IconWithText";
import BrandLogo from "../Components/Home/BrandLogo";
import From from "../Components/Home/From";
import { IoShieldOutline } from "react-icons/io5";
import LgManu from "../Components/Home/LgManu";
import { IoIosArrowBack } from "react-icons/io";

const Home = () => {

  // for manu button 
  const [one , tow] = useState(true)

  const show = ()=>{
    tow(!one)
  }

  return (
    <>
      <div className="mainMain">
        <div className="main">
          {/* navbar start */}
          <div className="navbar">
            <button className="logo ">
              <p>Vaccination.ng</p>
              <div className=" LogoButtomBar "></div>
            </button>
            

            <div className="block lg:hidden">
              <div onClick={show} className="manuIcon">
                <HiMiniBars3BottomRight className="iconManuBar" />
              </div>
              {
                  one ? <div className=" slideerManu translate-y-[-700px] duration-300">
                  <LgManu ULcss='flex-col mt-[50px] items-end ' DivCss='flex-col pr-[30px]' buttonContent='< back' onclick={show} />
                </div> : <div className=" slideerManu translate-y-0 duration-300">
                <LgManu ULcss='flex-col mt-[50px] items-end ' DivCss='flex-col pr-[30px]' buttonContent='< back' onclick={show} />
              </div>
                }
              



            </div>

            <div className=" hidden lg:block">
              <LgManu ULcss='items-center' buttonContent='Check Status'/>
            </div>
          </div>
          {/* navbar end */}

          <div className=" lg:flex lg:justify-between">
            <div className="">
              {/* section one start */}
              <section className="sectionOne">
                <div className="sectionOneDivOne">
                  <p className="sectionOneDivOneTExt lg:text-[24px]">
                    Get Vaccinated. Boost your Immune System
                  </p>
                  <p className="sectionOneDivOneTExt2 lg:text-[48px]">
                    <span className="text-white">
                      COVID-19 Vaccination Got Easier With,
                    </span>{" "}
                    Vaccination.ng
                  </p>
                  <p className="text-[14px] lg:text-[24px] font-montserrat font-bold text-[#fff] md:w-[502px]">
                    Vaccination.ng will help you find the nearest centre for
                    vaccination, in all 36 states in Nigeria.
                  </p>
                </div>
                <div className="w-full flex gap-5 mt-[40px] lg:mt-[50px] ">
                  <button className="buttonGH">Get Vaccine</button>
                  <button className="buttonGH">Help Centre</button>
                </div>
              </section>
              {/* section one end */}
            </div>

            <div className="">
              {/* section two start */}
              <section className="sectionTowbutton">
                <div className="mt-[50px] lg:w-[622px] lg:h-[617px] photo w-full sectionTowphotos">
                  <img
                    className="lg:w-[622px] lg:h-[617px]"
                    src="photos/coronaVacticen.png"
                    alt="photos"
                  />
                </div>
              </section>
              {/* section two end */}
            </div>
          </div>

          {/* section three start */}
          <section className="w-full full sectionThree mt-[49px] flex flex-col">
            <div className="sectionThreetext w-full text-white font-montserrat font-bold flex items-center gap-[10px] mb-5">
              <div className="w-[30px] h-[30px] lg:w-[50px] lg:h-[50px] flex bg-[#c4c4c470] justify-center items-center rounded-md">
                <FaRegClock className="text-[20px] text-[#17C2EC] lg:text-[30px] " />
              </div>
              <p className="text-[14px] lg:text-[24px]">
                Schedule your Vaccination
              </p>
            </div>

            <div className="relative w-[305px] md:w-[670px] lg:w-[1299px] flex items-end h-[242px] lg:h-[160px] ">
              <div className="sectionThreeDiv lg:h-[160px]"></div>
              <div className="sectionThreeDiv2 lg:h-[150px]">

                  {/* for mobile */}
               <div className=" block md:hidden lg:hidden">
                   <div className="flex flex-wrap ml-[10px] lg:ml-0  gap-[15px] mt-2 lg:items-center ">
                      <IconWithText title="Location" subtitle="Ikeja Lagos, Nigeria" Icon={FaLocationDot} />
                      <IconWithText title="Date" subtitle="29 February, 2022" Icon={BsCalendarDateFill} />
                      <IconWithText title="Vaccine Type" subtitle="Mordena" Icon={IoShieldOutline} />
                      <div className=" w-full ">
                       <button className=" buttonSubmit"> Submit </button>
                      </div>
                    </div>
                </div>


                  {/* for tab */}
               <div className=" md:block lg:hidden hidden">

                   <div className="flex justify-between mt-[37px] pl-[11px] pr-[12px] ">

                      <div className=" flex flex-col gap-[41px] ">
                        <IconWithText title="Location" subtitle="Ikeja Lagos, Nigeria" Icon={FaLocationDot} />
                        <IconWithText title="Vaccine Type" subtitle="Mordena" Icon={IoShieldOutline} />
                      </div>

                      <div className=" flex flex-col gap-[41px] ">
                       <IconWithText title="Date" subtitle="29 February, 2022" Icon={BsCalendarDateFill} />
                        <div className=" w-full ">
                          <button className=" buttonSubmit"> Submit </button>
                        </div>
                      </div>
                    </div>
                </div>
               
                  {/* for desktop */}
               <div className=" lg:block hidden">
                   <div className="flex px-[39px] pt-[45px] ">
                      <IconWithText title="Location" subtitle="Ikeja Lagos, Nigeria" Icon={FaLocationDot} />
                      <IconWithText title="Date" subtitle="29 February, 2022" Icon={BsCalendarDateFill} />
                      <IconWithText title="Vaccine Type" subtitle="Mordena" Icon={IoShieldOutline} />
                      <div className="">
                      <button className=" buttonSubmit"> Submit </button>
                      </div> 
                    </div>
                </div>

              </div>
            </div>
          </section>
          {/* section three end */}
   
        </div>



        {/* brand logo  */}
        <BrandLogo />

        <div className="Form">
          <From />
        </div>


      </div>
    </>
  );
};

export default Home;
