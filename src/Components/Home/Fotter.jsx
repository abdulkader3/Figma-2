import React from "react";
import LgManu from "./LgManu";
import { FiYoutube } from "react-icons/fi";
import { IoLogoInstagram } from "react-icons/io5";
import { SlSocialTwitter } from "react-icons/sl";
import { LuFacebook } from "react-icons/lu";
import { Link } from "react-router-dom";

const Fotter = () => {
  return (
    <>
      <div className=" fotter ">
        <div className=" lg:flex lg:items-center lg:justify-between">
          <button className="logo ">
            <p>Vaccination.ng</p>
            <div className=" LogoButtomBar "></div>
          </button>

          <div className="">
            <div className=" block md:hidden">
              <LgManu
                ULcss="flex-col mt-[50px] items-start text-[14px] md:text-[20px] lg:text-[24px] "
                DivCss="flex-col pr-[30px]"
                buttonCss={"hidden"}
              />
            </div>

            <div className=" hidden md:block ">
              <LgManu
                ULcss=" mt-[50px] lg:mt-0 items-start text-[14px] md:text-[20px] lg:text-[24px] "
                DivCss="flex-col pr-[30px]"
                buttonCss={"hidden"}
              />
            </div>
          </div>

          <div className=" flex gap-[3.57px] md:gap-[6.29px] mt-5 md:mt-10 lg:gap-[10px] lg:mt-0 lg:mr-[79px] ">
            <Link to="">
              {" "}
              <FiYoutube className="text-[18px] md:text-[31.45px] lg:text-[50px] text-white hover:scale-105 active:scale-100 transition-all " />{" "}
            </Link>
            <Link to="">
              {" "}
              <IoLogoInstagram className="text-[18px] md:text-[31.45px] lg:text-[50px] text-white hover:scale-105 active:scale-100 transition-all " />{" "}
            </Link>
            <Link to="">
              {" "}
              <SlSocialTwitter className="text-[18px] md:text-[31.45px] lg:text-[50px] text-white hover:scale-105 active:scale-100 transition-all " />{" "}
            </Link>
            <Link to="">
              {" "}
              <LuFacebook className="text-[18px] md:text-[31.45px] lg:text-[50px] text-white hover:scale-105 active:scale-100 transition-all " />{" "}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Fotter;
