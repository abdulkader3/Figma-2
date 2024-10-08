import React from 'react'
import { HiMiniBars3BottomRight } from 'react-icons/hi2'

const Home = () => {
  return (
    <>

   <div className="container flex justify-center w-full h-full ">
    <div className="main w-full h-full bg-[#0B153C] pl-[35px]  pt-[56px] ">


          {/* navbar start */}
        <div className="navbar items-center justify-between flex">
        <div className="logo text-[18px] font-bold text-white font-montserrat ">
          <p>Vaccination.ng</p>
        </div>
        <div className="manuIcon w-[45px] h-[45px] flex bg-[#c4c4c470] mr-[35px] justify-center items-center rounded-md ">
          <HiMiniBars3BottomRight className='text-[33px] text-white ' />
        </div>
        </div>
        {/* navbar end */}



        {/* section one start */}
        <section className=' sectionOne w-full h-full mt-[32px]'>

          <div className="sectionOneDivOne pr-[30px]">
            <p className='text-[11px] font-montserrat font-bold text-[#17C2EC] '>Get Vaccinated. Boost your Immune System</p>
            <p className='text-[22px] my-[20px] font-montserrat font-extrabold text-[#17C2EC] '> <span className='text-white'>COVID-19 Vaccination
            Got Easier With,</span> Vaccination.ng</p>
            <p className='text-[12px] font-montserrat font-bold text-[#fff] '>Vaccination.ng will help you find the
 nearest centre for vaccination, in all 
36 states in Nigeria.</p>
          </div>

        </section>
        {/* section one end */}




        {/* section tow start */}
        <section className='sectionTowbutton mt-[40px] w-full pr-[35px]  text-[14px] font-bold font-montserrat '>

         <div className="w-full flex justify-between">
         <button className='w-[120px] h-[45px]  rounded-[15px] hover:bg-[#17C2EC] text-white border-[2px] border-[#17C2EC] transition-all hover:scale-110 active:scale-95 '>Get Vaccine</button>
          <button className='w-[120px] h-[45px]  rounded-[15px] hover:bg-[#17C2EC] text-white border-[2px] border-[#17C2EC] transition-all hover:scale-110 active:scale-95 '>Help Centre</button>

         </div>

          <div className="mt-[50px] photo w-full ">
            <img src="photos/coronaVacticen.png" alt="photos" />
          </div>


        </section>
        {/* section tow end */}


        {/* section three start */}
        <section>

        </section>
        {/* section three end */}


        {/* section four start */}
        <section>

        </section>
        {/* section four end */}




    </div>
   </div>
      
    </>
  )
}

export default Home
