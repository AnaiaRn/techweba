import Sidebar from "@/app/composant/sidebar/page";

export default function Cart () {
    return (
        <>
            <Sidebar />
            <div className="w-screen h-screen bg-gray-100">
                <div className="">
                    {/* SUMMARY */}
                    <div className="flex justify-center items-center">
                        <div className="w-[80%] h-[500px] lg:w-[30%] bg-white mt-5 rounded-2xl">
                            <p className="font-semibold text-2xl mt-2 ml-4">Summary</p>
                        </div>
                    </div>
                    {/* YOUr BAG  */}
                    <div className="flex justify-center items-center">
                        <div className="w-[80%] h-[500px] lg:w-[30%] bg-white mt-5 rounded-2xl">
                            <p className="font-semibold text-2xl mt-2 ml-4">Your bag</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}