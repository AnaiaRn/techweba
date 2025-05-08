import Boutton from "@/app/composant/button/page";
import Sidebar from "@/app/composant/sidebar/page";


export default function Landing (){
    return (
        <>
           <div>
           <Sidebar />
            {/* BANNIÈRE DE PUB */}
            <div className="sm:flex sm:justify-center sm:items-center sm:mt-9">
                <div className="w-[80%] sm:h-[550px]  md:h-[350px]  bg-gray-200  rounded-3xl ">
                    <div>
                        <div className="flex justify-center items-center">
                            <img src="image/6.png" alt="" className="w-[250px]"/>
                        </div>
                        <div className=" sm:text-center">
                            <p className="font-semibold text-orange-600 text-[40px]">25% OFF</p>
                            <p className="font-semibold text-[50px]">Summer Sale</p>
                            <p>Discover our summer styles with discount</p>
                        </div>
                    </div>
                    <div className="">
                        <Boutton /> 
                    </div>
                </div>
            </div>
           </div>
            
           
        </>
    )
}