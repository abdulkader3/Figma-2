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
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="mainMain">
        <div className="main">
          {/* navbar start */}
          <div className="navbar">
            <div className="logo ">
              <p>Vaccination.ng</p>
            </div>

            <div className="block lg:hidden">
              <div className="manuIcon">
                <HiMiniBars3BottomRight className="iconManuBar" />
              </div>
            </div>

            <div className=" hidden lg:block">
              <div className="">
                <ul className="flex items-center gap-[25px] text-white text-[24px] font-montserrat font-medium justify-start ">
                  <li>
                    <Link to="#">Home</Link>
                  </li>
                  <li>
                    <Link to="#">Services</Link>
                  </li>
                  <li>
                    <Link to="#">Schedule</Link>
                  </li>
                  <li>
                    <Link to="#">Contact us</Link>
                  </li>
                </ul>

                <button className="manuButton"></button>
              </div>
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
                <div className="flex flex-wrap ml-[10px] lg:ml-0 justify-evenly  gap-[15px] mt-5 lg:items-center ">


                  

                  
                  {/* right side */}
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
