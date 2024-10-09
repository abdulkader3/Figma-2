import React from "react";
import { BsCalendar2Date } from "react-icons/bs";
import { FaRegClock } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { LuShield } from "react-icons/lu";

const Home = () => {
  return (
    <>
      <div className="container flex flex-col items-center justify-center w-full h-full ">
        <div className="main w-full h-full bg-[#0B153C] pl-[35px]  pt-[56px] ">
          {/* navbar start */}
          <div className="navbar items-center justify-between flex">
            <div className="logo text-[18px] font-bold text-white font-montserrat ">
              <p>Vaccination.ng</p>
            </div>
            <div className="manuIcon w-[45px] h-[45px] flex bg-[#c4c4c470] mr-[35px] justify-center items-center rounded-md ">
              <HiMiniBars3BottomRight className="text-[33px] text-white " />
            </div>
          </div>
          {/* navbar end */}

          {/* section one start */}
          <section className=" sectionOne w-full h-full mt-[32px]">
            <div className="sectionOneDivOne pr-[30px]">
              <p className="text-[11px] font-montserrat font-bold text-[#17C2EC] ">
                Get Vaccinated. Boost your Immune System
              </p>
              <p className="text-[22px] my-[20px] font-montserrat font-extrabold text-[#17C2EC] ">
                {" "}
                <span className="text-white">
                  COVID-19 Vaccination Got Easier With,
                </span>{" "}
                Vaccination.ng
              </p>
              <p className="text-[12px] font-montserrat font-bold text-[#fff] ">
                Vaccination.ng will help you find the nearest centre for
                vaccination, in all 36 states in Nigeria.
              </p>
            </div>
          </section>
          {/* section one end */}

          {/* section tow start */}
          <section className="sectionTowbutton mt-[40px] w-full pr-[35px]  text-[14px] font-bold font-montserrat ">
            <div className="w-full flex justify-between">
              <button className="w-[120px] h-[45px]  rounded-[15px] hover:bg-[#17C2EC] text-white border-[2px] border-[#17C2EC] transition-all hover:scale-110 active:scale-95 ">
                Get Vaccine
              </button>
              <button className="w-[120px] h-[45px]  rounded-[15px] hover:bg-[#17C2EC] text-white border-[2px] border-[#17C2EC] transition-all hover:scale-110 active:scale-95 ">
                Help Centre
              </button>
            </div>

            <div className="mt-[50px] photo w-full sectionTowphotos ">
              <img src="photos/coronaVacticen.png" alt="photos" />
            </div>
          </section>
          {/* section tow end */}

          {/* section three start */}
          <section className="w-full full sectionThree mt-[49px] flex flex-col">
            <div className="sectionThreetext w-full text-white flex gap-5 text-[14px] font-montserrat font-bold items-center ">
              <div className="manuIcon w-[30px] h-[30px] flex bg-[#c4c4c470] justify-center items-center rounded-md ">
                <FaRegClock className="text-[20px] text-[#17C2EC]" />
              </div>
              <p>Schedule your Vaccination</p>
            </div>

            <div className=" relative w-[250px] h-[270px] mt-5 ">
              <div className="w-[250px] h-[242px] bg-[rgba(196,196,196,0.05)] sectionThreeDiv rounded-tr-[20px] rounded-tl-[20px] "></div>
              <div className="w-[250px] h-full bottom-0 bg-[rgba(196,196,196,0.1)] rounded-tr-[20px] rounded-tl-[20px] absolute sectionThreeDiv  ">
               
              
              
                <div className="w-full flex mt-[24px] ml-[10px] items-center gap-[10px] ">

                  <div className="icon">
                    <div className="manuIcon w-[30px] h-[30px] flex bg-[rgba(196,196,196,0.1)] justify-center items-center rounded-md ">
                      <FaLocationDot className="text-[20px] text-[#17C2EC]" />
                    </div>
                  </div>

                  <div className="text ">
                    <p className="text-[13px] font-semibold font-montserrat text-[rgba(255,255,255,0.5)] ">Location</p>
                    <p className="text-[13px] font-semibold font-montserrat text-[#fff] ">Ikeja Lagos, Nigeria</p>
                   
                  </div>
                </div>



                <div className="w-full flex mt-[24px] ml-[10px] items-center gap-[10px] ">

                  <div className="icon">
                    <div className="manuIcon w-[30px] h-[30px] flex bg-[rgba(196,196,196,0.1)] justify-center items-center rounded-md ">
                      <BsCalendar2Date className="text-[20px] text-[#17C2EC]" />
                    </div>
                  </div>

                  <div className="text ">
                    <p className="text-[13px] font-semibold font-montserrat text-[rgba(255,255,255,0.5)] ">Date</p>
                    <p className="text-[13px] font-semibold font-montserrat text-[#fff] ">29 February, 2022</p>
                   
                  </div>
                </div>



                <div className="w-full flex mt-[24px] ml-[10px] items-center gap-[10px] ">

                  <div className="icon">
                    <div className="manuIcon w-[30px] h-[30px] flex bg-[rgba(196,196,196,0.1)] justify-center items-center rounded-md ">
                      <LuShield className="text-[20px] text-[#17C2EC]" />
                    </div>
                  </div>

                  <div className="text ">
                    <p className="text-[13px] font-semibold font-montserrat text-[rgba(255,255,255,0.5)] ">Vaccine Type</p>
                    <p className="text-[13px] font-semibold font-montserrat text-[#fff] ">Mordena</p>
                   
                  </div>
                </div>

                <div className="w-full h-full">
                <button className="w-[130px] ml-[13px] mt-5 h-[40px] text-[14px] font-montserrat font-bold   rounded-[8px] hover:bg-[#17C2EC] text-[#17C2EC] hover:text-[#fff] border-[2px] border-[#17C2EC] transition-all hover:scale-110 active:scale-95 ">
                Submit
              </button>
                </div>





              </div>
            </div>
          </section>
          {/* section three end */}
        </div>

        {/* independendet section four start */}
        <section className="w-full h-auto backgraoundPhotos flex flex-col items-center ">
          <div className="w-full h-[40px] bg-white flex items-center  justify-center ">
            <div className=" flex items-center justify-center gap-[6px] opacity-70">
              <img
                className="w-[72px] h-[16px] "
                src="photos/Moderna_logo1.png"
                alt="logo"
              />
              <img
                className="w-[72px] h-[29px] "
                src="photos/Moderna_logo2.png"
                alt="logo"
              />
              <img
                className="w-[72px] h-[20px] "
                src="photos/Moderna_logo3.png"
                alt="logo"
              />
              <img
                className="w-[72px] h-[14px] "
                src="photos/Moderna_logo4.png"
                alt="logo"
              />
            </div>
          </div>

          <div className=" w-[250px] h-[381px] bg-[rgba(196,196,196,0.1)] rounded-[20px] mt-[84px] flex flex-col items-center  ">
            <div className="w-full h-[40px] bg-[rgba(196,196,196,0.05)] rounded-tl-[10px] rounded-tr-[10px]  mb-[21px] flex justify-center items-center">
              <p className="text-[10px] font-bold font-montserrat text-white ">
                Check your COVID-19 result on our Database
              </p>
            </div>

            <div className="w-[230px] h-[50px] ">
              <input
                className=" w-full text-white h-full bg-transparent outline-none border-[rgba(196,196,196,0.15)] transition-all  border-[2px] focus:border-[#17C2EC] rounded-[10px] pl-[17px] "
                type="text"
                placeholder="Okeowo"
              />
            </div>

            <div className="w-[230px] h-[50px] mt-5 ">
              <input
                className=" text-white w-full h-full bg-transparent outline-none border-[rgba(196,196,196,0.15)] transition-all  border-[2px] focus:border-[#17C2EC] rounded-[10px] pl-[17px] "
                type="text"
                placeholder="Okeowo"
              />
            </div>

            <div className="w-full">
              <button className="w-[130px] ml-[13px] mt-5 h-[40px] text-[14px] font-montserrat font-bold   rounded-[8px] hover:bg-[#17C2EC] text-[#17C2EC] hover:text-[#fff] border-[2px] border-[#17C2EC] transition-all hover:scale-110 active:scale-95 ">
                Check
              </button>
            </div>

            <div className="w-[230px] h-[50px] bg-[rgba(196,196,196,0.05)] rounded-[10px] rounded-tr-[10px]  mb-[21px] flex justify-center items-center">
              <p className="text-[10px] font-bold font-montserrat text-center text-[#17C2EC] ">
                Need a certificate for your COVID-19 result? Please click{" "}
                <span className=" underline">here</span>{" "}
              </p>
            </div>
          </div>
        </section>
        {/* independendet section four start */}
      </div>
    </>
  );
};

export default Home;
