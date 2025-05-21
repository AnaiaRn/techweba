import { AiOutlineShopping } from "react-icons/ai"; 
import React from "react";


export default function Sidebar () {
    return (
        <>
            <div className="flex justify-between items-center w-full h-[65px] bg-white border-gray-200 border-1">
                {/* TITRE & LOGO */}
                <div className="flex space-x-2">
                    <div> 
                        <img src="/image/Vector.png" className="pl-4" />
                    </div>
                    <div className="">
                        <p className="font-semibold">SUN CO.</p>
                    </div>
                </div>

                {/* VIEW CART*/}
                <div className="flex justify-center items-center pt-1 pr-5 pl-1 pb-1  space-x-2 border-1 rounded-lg mr-4">
                    <AiOutlineShopping className="ml-2 text-xl"/> 
                    <a href="" className="font-semibold text-[15px]">View Cart</a>
                </div>
            </div> 
        </>
    )
}