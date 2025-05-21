import Boutton from "@/app/composant/button/page";
import Compteur from "@/app/composant/compteur/Page";
import Footer from "@/app/composant/footer/page";
import Sidebar from "@/app/composant/sidebar/page";

export default function Details () {
    return (
      <div className="flex flex-col min-h-screen  overflow-y-auto lg:overflow-hidden">
        <Sidebar />
        <div className="flex-grow w-full">
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
              <div className="w-[400px] h-[300px] bg-white shadow rounded-xl ">
              {/* nom & prix */}
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
                <p className="font-semibold">Quantity</p>
                <Compteur />
                </div>
                <div className="flex justify-center mt-3">
                  <Boutton  label="Add to card" icon=""/>
                </div>

              </div>
              </div>
            </div>
          </div>

          {/* Deuxieme partie */}
          <div className="mt-10 lg:flex lg:justify-center lg:space-x-32">
              {/* Description */}
            <div className="flex justify-center items-center">
              <div className="w-[400px] h-[300px]  bg-white shadow">
                <div className="font-semibold ml-3 mt-2">
                  <h1>Description</h1>
                </div>

                {/* <div className="border-1 border-gray-200 mt-2"></div> */}

                <div className="text-gray-700 ml-3 space-y-1 mt-3">
                  <p className="">Energie your look with a fresh take on heritage adidas style.
                    The adidas Daily 3.0 Shoes cut a classic profile with a modem suède upper.
                    Your walk acros or commute across town has never looked or feit this good
                  </p>
                  <li>Regular</li>
                  <li>Lace closure</li>
                  <li>Rubber outside with vulcanized look</li>
                  <li>Imported</li>
                </div>
              </div>  
            </div>

            {/* image de pub */}
            <div className="flex justify-center items-center mt-8">
            <div className="w-[400px] h-[300px] lg:w-[400px] lg:h-[200px]">
              <img src="image/5.png" alt="" />
            </div>
            </div>
          </div>
         
        </div>

         {/* Footer */}
         <div className="mt-8">
         <Footer />
         </div>
      </div>
    )
}