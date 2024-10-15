import React from "react";
import { BsCalendar2Date } from "react-icons/bs";
import { FaRegClock } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { LuShield } from "react-icons/lu";
import "./Home.css";
import IconWithText from "../Components/Home/IconWithText";
import BrandLogo from "../Components/Home/BrandLogo";
import From from "../Components/Home/From";

const Home = () => {
  return (
    <>
      <div className="container">
        <div className="main">
          {/* navbar start */}
          <div className="navbar">
            <div className="logo ">
              <p>Vaccination.ng</p>
            </div>
            <div className="manuIcon">
              <HiMiniBars3BottomRight className="iconManuBar" />
            </div>
          </div>
          {/* navbar end */}

          {/* section one start */}
          <section className="sectionOne">
            <div className="sectionOneDivOne">
              <p className="sectionOneDivOneTExt">
                Get Vaccinated. Boost your Immune System
              </p>
              <p className="sectionOneDivOneTExt2">
                <span className="text-white">
                  COVID-19 Vaccination Got Easier With,
                </span>{" "}
                Vaccination.ng
              </p>
              <p className="text-[14px] font-montserrat font-bold text-[#fff] md:w-[502px]">
                Vaccination.ng will help you find the nearest centre for
                vaccination, in all 36 states in Nigeria.
              </p>
            </div>
          </section>
          {/* section one end */}

          {/* section two start */}
          <section className="sectionTowbutton">
            <div className="w-full flex gap-5">
              <button className="buttonGH">Get Vaccine</button>
              <button className="buttonGH">Help Centre</button>
            </div>

            <div className="mt-[50px] photo w-full sectionTowphotos">
              <img src="photos/coronaVacticen.png" alt="photos" />
            </div>
          </section>
          {/* section two end */}

          {/* section three start */}
          <section className="w-full full sectionThree mt-[49px] flex flex-col">
            <div className="sectionThreetext w-full text-white font-montserrat font-bold flex items-center gap-[10px] mb-5">
              <div className="w-[30px] h-[30px] flex bg-[#c4c4c470] justify-center items-center rounded-md">
                <FaRegClock className="text-[20px] text-[#17C2EC]" />
              </div>
              <p className="text-[14px]">Schedule your Vaccination</p>
            </div>

            <div className="relative w-[305px] md:w-[670px] flex items-end h-[242px]">
              <div className="sectionThreeDiv"></div>
              <div className="sectionThreeDiv2">
                <div className="flex flex-wrap ml-[10px] gap-[15px] mt-5 ">


                  {/* Using IconWithText component */}
                 <div className=" md:flex md:flex-col gap-5">
                 <IconWithText
                    Icon={FaLocationDot}
                    title="Location"
                    subtitle="Ikeja Lagos, Nigeria"
                  />
                  <IconWithText
                    Icon={BsCalendar2Date}
                    title="Date"
                    subtitle="29 February, 2022"
                  />
                 </div>



                 
                <div className=" md:flex md:flex-col gap-5">
                <IconWithText
                    Icon={LuShield}
                    title="Vaccine Type"
                    subtitle="Mordena"
                  />
                  <div className="">
                  <button className=" buttonSubmit ">
                    Submit
                  </button>
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
        <From/>




      </div>
    </>
  );
};

export default Home;
