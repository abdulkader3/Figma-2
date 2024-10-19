import React from "react";

const Patient = () => {
  return (
    <>
      <div className="w-full pl-[35px] md:pl-[56px] lg:pl-[70px] lg:pr-[74px] lg:mt-10 ">
        <div className=" lg:flex lg:justify-between ">
          <div className=" w-[321px] md:w-[654px] ">
            <h3 className=" text-[14px] md:text-[20px] lg:text-[24px] font-bold font-montserrat ">
              Patient’s Full Name
            </h3>

            <input
              className="w-full lg:mt-5 lg:mb-10 lg:text-[24px] pl-5 md:pl-[30px] md:rounded-[20px] md:text-[20px] h-[50px] md:mt-[25px] md:mb-[40px] md:h-[70px] bg-[rgba(11,21,60,0.15)] rounded-[10px] my-5 "
              type="text"
              placeholder="Full name"
            />

            <p className="text-[14px] lg:text-[24px] md:text-[20px] font-bold font-montserrat">
              Mobile Number
            </p>

            <p className="text-[14px] lg:my-5 md:mt-[25px] md:mb-[20px] md:text-[20px] font-medium text-[rgba(0,0,0,0.5)] font-montserrat mt-5 mb-[21px] ">
              Notifications for appointment and reminders will be sent to this
              provided number
            </p>

            <div className=" md:flex md:justify-between md:items-center ">
              {/*=========================== Phone number input ==============================*/}
              <div className="w-full md:w-[400px] h-[50px] md:h-[70px] bg-[rgba(11,21,60,0.15)] rounded-[10px] md:rounded-[20px] flex items-center px-3 ">
                <div className="relative w-full flex items-center">
                  {/* Flag Icon */}
                  <img
                    src="photos/FlagIcon.png"
                    alt="Nigeria Flag"
                    className="w-[40px] h-[40px] absolute left-3"
                  />

                  {/* Select Element */}
                  <select className="w-full pl-[50px] pr-[40px] bg-transparent outline-none appearance-none h-full text-gray-700">
                    <option value="nigeria"></option>
                    <option value="nigeria">🇳🇬 Nigeria</option>
                    <option value="ghana">🇬🇭 Ghana</option>
                    <option value="kenya">🇰🇪 Kenya</option>
                  </select>

                  {/* Arrow Down Icon */}
                  <div className="absolute left-16 pointer-events-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-[rgba(0,0,0,0.25)]"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>

                  {/* separeter */}
                  <div className="w-[3px] rounded-full h-[40px] bg-[rgba(0,0,0,0.15)] absolute left-[100px] "></div>
                  {/* separeter */}

                  {/* input for search */}
                  <input
                    className="w-[250px] md:text-[20px] lg:text-[24px] h-[50px] outline-none bg-transparent text-[rgba(0,0,0,0.25)] "
                    type="text"
                    placeholder="Phone number"
                  />
                </div>
              </div>
              {/*======================== Phone number input end ==============================*/}

              <button className="w-[150px] md:rounded-[20px] md:mt-0 md:mb-0 mt-[19px] md:text-[20px] lg:text-[24px] mb-[60px] h-[50px] md:h-[70px] bg-[#17C2EC] rounded-[10px] text-[14px] font-bold font-montserrat text-white ">
                Verify
              </button>
            </div>

            <button className="w-full md:rounded-[20px] md:my-10 h-[50px] md:text-[20px] lg:text-[24px] md:h-[64px] bg-[#17C2EC] rounded-[10px] text-[14px] font-bold font-montserrat text-white ">
              Submit
            </button>

            <div className="w-full flex justify-between mt-5 mb-[41px] md:mb-[49px] lg:mb-0 ">
              <p className="text-[14px] md:text-[20px] font-montserrat font-bold lg:font-semibold text-[rgba(0,0,0,0.5)] ">
                Already registered ?{" "}
              </p>
              <p className="text-[14px] md:text-[20px] lg:mb-[33px] font-montserrat font-bold lg:font-semibold text-[#17C2EC]">
                Check your status
              </p>
            </div>
          </div>

          <img
            className="md:w-[401px] md:h-[575px] hidden lg:block mt-[-75px] "
            src="photos/COVIDVaccine.png"
            alt="COVIDV"
          />
        </div>
      </div>
    </>
  );
};

export default Patient;
