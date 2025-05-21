import { AiOutlineArrowRight } from "react-icons/ai"; 
import Boutton from "@/app/composant/button/page";
import Sidebar from "@/app/composant/sidebar/page";
import Footer from "@/app/composant/footer/page";

export default function Landing() {
    return (
        <div className="flex flex-col min-h-screen  overflow-y-auto lg:overflow-hidden">
            <Sidebar />

            {/* Contenu principal */}
            <div className="flex-grow w-full">
                {/* Bannière de pub */}
                <div className="flex justify-center items-center mt-8">
                    <div className="w-[80%] h-[450px] bg-gray-200 lg:w-[70%] lg:h-[250px] rounded-2xl">
                        <div className="space-y-4 lg:flex lg:flex-row-reverse justify-between lg:mt-5">
                            <div className="flex justify-center items-center mt-4 lg:mr-70 lg:mt-[-10px]">
                                <img src="/image/6.png" alt="" className="w-72 lg:w-[350px]h-auto " />
                            </div>
                            <div className="space-y-5 text-center lg:ml-70">
                                <p className="text-orange-600 font-semibold text-2xl lg:text-3xl">25% OFF</p>
                                <p className="font-semibold text-3xl">Summer Sale</p>
                                <p className="text-gray-500">Discover our summer styles with discount</p>
                                <div className="flex justify-center items-center text-white font-semibold">
                                    <Boutton label="Shop now" icon={<AiOutlineArrowRight />} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="ml-11 mt-8 lg:ml-72">
                    <p className="font-semibold text-2xl">Explore our latest drops :</p>
                </div>

                {/* Liste des produits */}
                <div className="mt-4 flex overflow-x-auto whitespace-nowrap lg:justify-center lg:space-x-14 lg:mr-10">
                    {/* Produit x4 */}
                    {[1, 2, 3, 4].map((id, i) => (
                        <div key={i} className="ml-11 inline-block object-cover space-y-1">
                            <div>
                                <img src={`/image/${id}.svg`} alt="" className="w-[200px] lg:w-[250px]" />
                            </div>
                            <div className="space-y-1">
                                <p className="font-semibold">Nike</p>
                                <p className="text-gray-500">Nike airfirce premium</p>
                                <p>&200</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Footer toujours en bas */}
          
           <div className="mt-20 lg:mt-0">
           <Footer />
           </div>
           
        </div>
    );
}
