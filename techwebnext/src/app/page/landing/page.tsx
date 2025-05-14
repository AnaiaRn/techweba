import Boutton from "@/app/composant/button/page";
import Sidebar from "@/app/composant/sidebar/page";


export default function Landing (){
    return (
        <>
           <div>
           <Sidebar />
            {/* BANNIÈRE DE PUB */}
            <div className="flex justify-center items-center mt-8">
                 <div className="w-[600px] h-[500px] bg-gray-200 lg:w-[70%] lg:h-[300px] rounded-2xl">
                   <div className="space-y-4 lg:flex lg:flex-row-reverse justify-between lg:mt-10">

                     <div className="flex justify-center items-center mt-2 lg:mr-70">
                        <img src="/image/6.png" alt=""  className="w-72 lg:w-[350px]"/>
                     </div>
                     <div className=" space-y-5 text-center lg:ml-70">
                        <p className="text-orange-600 font-semibold text-3xl">25% OFF</p>
                        <p className="font-semibold text-5xl">Summer Sale</p>
                        <p className="text-gray-600">Discover our summer styles with discount</p>
                        <Boutton />
                     </div>

                   </div>
                </div>
            </div>
           </div>
            
           
        </>
    )
}