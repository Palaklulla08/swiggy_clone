import React from 'react';
import { SiSwiggy } from "react-icons/si";
import { RxCaretDown } from "react-icons/rx";
import { HiBuildingOffice2 } from "react-icons/hi2";
import { IoSearchSharp } from "react-icons/io5";
import { BiSolidOffer } from "react-icons/bi";
import { IoMdHelpCircle } from "react-icons/io";
import { PiSignInBold } from "react-icons/pi";
import { FaShoppingCart } from "react-icons/fa";
function Navbar() {
    return ( 
        <>
        <div className="w-full shadow-md h-20 flex justify-center items-center  ">
          <div className="w-[80%]  flex justify-between">
            <div className="flex items-center ">
                <SiSwiggy className='w-30 h-10 text-[rgb(255,82,0)]'  />
                <p className="font-bold border-b-2 border-black ">others</p>
                <RxCaretDown className='text-xl text-[rgb(255,82,0)]'/>
            </div>
             <div className='flex items-center gap-9'>
                <div className='flex items-center gap-1'><HiBuildingOffice2/><p>Swiggy Coperate</p></div>
                <div className='flex items-center gap-1'><IoSearchSharp/><p>Search</p></div>
                <div className='flex items-center gap-1'><BiSolidOffer/><p>Offers</p></div>
                <div className='flex items-center gap-1'><IoMdHelpCircle/><p>Help</p></div>
                <div className='flex items-center gap-1'><PiSignInBold/><p>Signin</p></div>
                <div className='flex items-center gap-1'><FaShoppingCart/><p>Cart</p></div>
            </div> 
         </div>
        </div>
        </>
     );
}


export default Navbar;