import React from "react";

const PatientsCard = ({Name , location , comment , photosPatients , patentsCardCss}) => {
  return (
    <>
      <div className={`PatientsCard ${patentsCardCss}`}>
        <div className="w-full flex gap-[15px] items-center">
          <div className=" w-[53.38px] h-[53.38px] md:w-[70px] md:h-[70px] ">
            <img src={photosPatients} alt="patents" />
          </div>
          <div className="">
            <p className="text-[13.55px] font-bold font-montserrat md:text-[20px]">
              {Name}
            </p>
            <p className=" PatientsName text-[9px] font-bold font-montserrat text-[rgba(0,0,0,0.5)] md:text-[14px] ">
              {location}
            </p>
          </div>
        </div>

        <div className="w-full flex justify-center">
          <p className="text-center mx-[3px] mt-[30px] md:text-[18px]">
            {comment}
          </p>
        </div>
      </div>
    </>
  );
};

export default PatientsCard;
