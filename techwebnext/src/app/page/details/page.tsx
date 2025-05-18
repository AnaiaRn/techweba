import Boutton from "@/app/composant/button/page";
import Compteur from "@/app/composant/compteur/Page";
import Sidebar from "@/app/composant/sidebar/page";

export default function Details () {
    return (
      <div>
        <Sidebar />
        <div>
          {/* Première partie */}
          <div className="mt-8 lg:flex lg:justify-center lg:space-x-16">

            {/* IMAGE */}
            <div className="flex justify-center items-center ">
            <div className="w-[400px] h-[300px] lg:w-[500px] ">
              <img src="image/4.svg" alt="" className="w-full h-full object-cover rounded-2xl" />
            </div>
            </div>

            {/* ACTIONS */}
            <div className="flex justify-center items-center mt-8">
              <div className="w-[400px] h-[300px] bg-white shadow ">
              {/* description */}
              <div className="space-y-3 ml-2 mt-2">
                <div className="font-semibold"><p>adidas</p></div>
                <div className="text-gray-500"><p>DAILY 3.0 Shoes</p></div>
                <div><p>$98.99</p></div>
              </div>
              {/* div */}
              <div className="border-1 border-gray-200 mt-4"></div>

              {/* action */}
              <div className="ml-2 mt-2">
                <div>
                <p>Quantity</p>
                <Compteur />
                </div>
                <div className="flex justify-center mt-3">
                  <Boutton  label="Add to card" icon=""/>
                </div>

              </div>
              </div>
            </div>
          </div>


        </div>
      </div>
    )
}