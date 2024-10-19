import React from "react";
import PatientsCard from "./PatientsCard";


const Feedback = () => {
  return (
    <>
      <div className="MainFEEDBACK w-full lg:pl-[74px] lg:pr-[61px] ">
        <div className="w-full flex flex-col items-center">
          <p className="text-[14px] md:text-[20px] lg:text-[24px] font-bold font-montserrat text-[#17C2EC] mt-[30px] mb-5 md:mt-[46px] ">
            FEEDBACK
          </p>
          <p className="text-[24px] lg:text-[48px] font-extrabold font-montserrat md:text-[36px]  ">
            What our Patients Think
          </p>
          <p className="text-[12px] lg:text-[24px] lg:w-[952px] md:mt-[40px] md:mb-[60px] lg:mb-[100px] md:text-[18px] font-medium font-montserrat text-[rgba(0,0,0,0.5)] w-[248px] md:w-[580px] text-center mt-[10px] mb-[16px] ">
            Adipiscing nec etiam tortor elit quisque. Arcu aliquet convallis
            aenean eu velit. Mi vestibulum, ullamcorper venenatis imperdiet
            augue arcu ue.
          </p>
        </div>

        <div className=" block lg:hidden">
        <div className=" w-full flex flex-col items-center">
        
        
        {/* Patients cards */}
        <PatientsCard photosPatients={"photos/passent.png"} location={'Badagry, Lagos'} Name={'Oyindamola Maja'} comment={' Been stressing about a close centre to get the covid-19 vaccine, until i tried Vaccination.ng '} />
        {/* Patients cards */}
        
        {/* Patients cards */}
        <PatientsCard patentsCardCss={'mt-[30.38px] md:mt-[30px]'} photosPatients={"photos/passent.png"} location={'Badagry, Lagos'} Name={'Oyindamola Maja'} comment={' Been stressing about a close centre to get the covid-19 vaccine, until i tried Vaccination.ng '}/>
        {/* Patients cards */}
        
        {/* Patients cards */}
        <PatientsCard patentsCardCss={'mt-[30.38px] mb-[44.38px] md:mb-[59px]'} photosPatients={"photos/passent.png"} location={'Badagry, Lagos'} Name={'Oyindamola Maja'} comment={' Been stressing about a close centre to get the covid-19 vaccine, until i tried Vaccination.ng '}/>
        {/* Patients cards */}

        </div>
        </div>


        <div className=" hidden lg:block">
        <div className=" w-full flex justify-between pb-[106px] ">
        
        
        {/* Patients cards */}
        <PatientsCard photosPatients={"photos/passent.png"} location={'Badagry, Lagos'} Name={'Oyindamola Maja'} comment={' Been stressing about a close centre to get the covid-19 vaccine, until i tried Vaccination.ng '} />
        {/* Patients cards */}
        
        {/* Patients cards */}
        <PatientsCard patentsCardCss={''} photosPatients={"photos/passent.png"} location={'Badagry, Lagos'} Name={'Oyindamola Maja'} comment={' Been stressing about a close centre to get the covid-19 vaccine, until i tried Vaccination.ng '}/>
        {/* Patients cards */}
        
        {/* Patients cards */}
        <PatientsCard patentsCardCss={''} photosPatients={"photos/passent.png"} location={'Badagry, Lagos'} Name={'Oyindamola Maja'} comment={' Been stressing about a close centre to get the covid-19 vaccine, until i tried Vaccination.ng '}/>
        {/* Patients cards */}

        </div>
        </div>
       
        
      </div>
    </>
  );
};

export default Feedback;
