import React from "react";

function Devs() {
    return (
        <div className="flex justify-center items-center bg-transparent text-white">


            <div className="flex flex-col justify-center items-center gap-7 p-6 backdrop-blur-lg border-transparent rounded-lg shadow-lg md:gap-5">



                <div className="flex flex-col md:flex-row justify-center items-center gap-5">
                    <div className="flex flex-col justify-center items-center gap-5">
                        <h1 className="animate-pulse font-bold text-[rgb(71,255,47)]">4th year</h1>
                        <div className="flex flex-col justify-center items-center gap-3">
                            <img src="/devs/4th1.jpg" alt="Image 1" className="h-72 w-72 object-cover md:w-52 md:h-52 rounded-lg max-w-full" />
                            <p className="text-xs">Aryan Bargal</p>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-5">
                        <h1 className="animate-pulse font-bold text-[rgb(71,255,47)]">3rd year</h1>
                        <div className="flex flex-col md:flex-row justify-center items-center gap-5">
                            <div className="flex flex-col justify-center items-center gap-3">
                                <img src="../public/devs/3rd1.jpg" alt="Image 2" className="h-72 w-72 object-cover md:w-52 md:h-52 rounded-lg max-w-full" />
                                <p className="text-xs">Abhinav Chawda</p>
                            </div>

                            <div className="flex flex-col justify-center items-center gap-3">
                                <img src="../public/devs/3rd2.jpg" alt="Image 2" className="h-72 w-72 object-cover md:w-52 md:h-52 rounded-lg max-w-full" />
                                <p className="text-xs">Shankarshan Dwivedi</p>
                            </div>
                        </div>
                    </div>
                </div>
                <h1 className="animate-pulse font-bold text-[rgb(71,255,47)]">2nd year</h1>
                <div className="flex flex-col md:flex-row justify-center items-center gap-5">
                    <div className="flex flex-col justify-center items-center gap-3">
                        <img src="../public/devs/2nd1.jpg" alt="Image 2" className="h-72 w-72 object-cover md:w-52 md:h-52 rounded-lg max-w-full" />
                        <p className="text-xs">Gaurav Shukla</p>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-3">
                        <img src="../public/devs/2nd2.jpg" alt="Image 2" className="h-72 w-72 object-cover md:w-52 md:h-52 rounded-lg max-w-full" />
                        <p className="text-xs">Aayushmaan Yadav</p>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-3">
                        <img src="../public/devs/2nd3.jpg" alt="Image 2" className="h-72 w-72 object-cover md:w-52 md:h-52 rounded-lg max-w-full" />
                        <p className="text-xs">Shivendra Chauhan</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Devs;
