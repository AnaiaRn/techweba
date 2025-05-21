import { AiOutlineArrowRight } from "react-icons/ai"; 
import Boutton from "@/app/composant/button/page";
import Sidebar from "@/app/composant/sidebar/page";
import Compteur from "@/app/composant/compteur/Page";
import Footer from "@/app/composant/footer/page";

export default function Cart() {
    return (
        <div className="flex flex-col min-h-screen overflow-y-auto lg:overflow-hidden">
            {/* Sidebar */}
            <Sidebar />

            {/* Contenu principal */}
            <div className="flex-grow w-full">
                <div className="space-y-2 lg:flex lg:flex-row-reverse lg:justify-center mt-8">
                    {/* Summary */}
                    <div className="flex justify-center lg:ml-[40px]">
                        <div className="w-[80%] h-[450px] lg:w-[600px] lg:h-[480px] lg:space-y-6 bg-white rounded-2xl mt-4 shadow">
                            <h1 className="font-bold text-xl lg:text-xl mt-4 ml-4">Summary</h1>
                            <div className="text-gray-700 text-sm lg:text-[17px] space-y-8">
                                <div className="flex justify-between mt-4">
                                    <p className="ml-4">Subtotal</p>
                                    <p className="mr-4">$90.00</p>
                                </div>
                                <div className="flex justify-between mt-4">
                                    <p className="ml-4">Shipping and delivery</p>
                                    <p className="mr-4">$20.00</p>
                                </div>
                                <div className="flex justify-between mt-4">
                                    <p className="ml-4">Tax</p>
                                    <p className="mr-4">$60.00</p>
                                </div>
                                <div className="flex justify-between mt-4">
                                    <p className="ml-4">Discount</p>
                                    <p className="mr-4 text-red-500">-$6.00</p>
                                </div>
                                <div className="border-1 border-gray-300 mt-4"></div>
                                <div className="flex justify-between mt-10">
                                    <p className="ml-4">Total</p>
                                    <p className="mr-4">$176</p>
                                </div>
                                <div className="mt-8 flex justify-center">
                                    <Boutton label="Checkout" icon={<AiOutlineArrowRight />} />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Your bag */}
                    <div className="flex justify-center">
                        <div className="w-[80%] h-[400px] lg:w-[700px] lg:h-[350px] rounded-2xl mt-4">
                            <h1 className="font-bold text-xl lg:text-2xl mt-4 ml-4">Your bag</h1>
                            {/* Produit et Decription */}
                            <div className="flex justify-between border-b border-gray-300">
                                {/* Image */}
                                <div className="ml-4 mt-4">
                                    <img src="image/3.svg" alt="" className="w-[150px] md:w-[180px]"/>
                                </div>
                                {/* Description et prix */}
                                <div className="space-y-2">
                                    {/* Prix */}
                                    <div className="flex space-x-30 mr-4 font-semibold md:space-x-72 mt-4">
                                        <p className="">Nike</p>
                                        <p>$200</p>
                                    </div>
                                    {/* Description */}
                                    <div className="text-gray-700">
                                        <p className="text-[15px]">Nike Airforce premium</p>
                                    </div>
                                    {/* Compteur */}
                                    <div className="mt-5">
                                        <Compteur />
                                    </div>
                                    <div className="text-gray-700 font-semibold">
                                        <p className="underline">Remove</p>
                                    </div>
                                </div>
                            </div>
                            {/* 2 */}
                            <div className="flex justify-between ">
                                {/* Image */}
                                <div className="ml-4 mt-4">
                                    <img src="image/2.svg" alt="" className="w-[150px] md:w-[180px]"/>
                                </div>
                                {/* Description et prix */}
                                <div className="space-y-2">
                                    {/* Prix */}
                                    <div className="flex space-x-30 mr-4 font-semibold md:space-x-72 mt-4">
                                        <p className="">Nike</p>
                                        <p>$200</p>
                                    </div>
                                    {/* Description */}
                                    <div className="text-gray-700">
                                        <p className="text-[15px]">Nike Airforce premium</p>
                                    </div>
                                    {/* Compteur */}
                                    <div className="mt-5">
                                        <Compteur />
                                    </div>
                                    <div className="text-gray-700 font-semibold">
                                        <p className="underline">Remove</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    
                </div>
            </div>
            {/* Footer */}
           <div className="mt-10">
           <Footer />
           </div>
        </div>
    );
}
