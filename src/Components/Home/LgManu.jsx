import React from 'react'
import { Link } from 'react-router-dom'


const LgManu = ({ULcss , DivCss , buttonCss , buttonContent , onclick}) => {
  return (
    <>
    <div className={` mainNav flex gap-[181px] ${DivCss} `}>
                <ul className={`flex  gap-[25px] text-white  font-montserrat font-medium ${ULcss} `}>
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

                <button onClick={onclick} className={`manuButton ${buttonCss}`}> {buttonContent} </button>
              </div>
      
    </>
  )
}

export default LgManu
