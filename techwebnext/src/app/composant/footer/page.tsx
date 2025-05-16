import { AiOutlineTwitter } from "react-icons/ai"; 
import { TiSocialTwitterCircular } from "react-icons/ti"; 
import { AiOutlineInstagram } from "react-icons/ai"; 
import { AiFillYoutube } from "react-icons/ai"; 
import { AiFillTwitterCircle } from "react-icons/ai"; 
import { AiFillInstagram } from "react-icons/ai"; 
export default function Footer () {
    return (
      <>
    <div>
       <div className="w-full h-30 bg-neutral-900 lg:h-15">
        <div className="flex justify-between text-white">

            {/* première partie */}
            <div className="space-y-2 ml-4 lg:flex lg:space-x-[710px]">
               <div className=" flex space-x-2 mt-4">
                <img src="/image/Vector.png" alt="" className=""/>
                <p className="font-semibold" >SUN CO.</p>
               </div>

               <div className="text-sm lg:flex lg:space-x-2 mt-4">
                <p> © 2023 dot.card text task. </p>
                <p>All rigths reserved</p>
               </div>
            </div>

            {/* Reseau sociaux */}
            <div className="flex space-x-4 mr-4 text-2xl mt-4">
                <div><AiOutlineInstagram /></div>
                <div><AiOutlineTwitter /></div>
                <div><AiFillYoutube /></div>
            </div>
        
        </div>
       </div>
    </div>
      </>
    )
} 