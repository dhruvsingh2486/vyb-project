import React from "react";
import heroImg from "../assets/iamge.png";

function Hero() {
  // const heroText = ["One", "Stop", "Marketplace", "For"]

  return (
    <section className=" border-solid border-red-600 w-11/12 mx-auto flex flex-col sm:flex-row gap-8 sm:gap-20 font-primaryjost md:w-10/12 lg:w-10/12 xl:w-10/12">
      {/* left section  */}
      <div className=" border-solid border-blue-400 bg sm:w-6/12 flex flex-wrap">
        <div className="flex">
          <p className="h-16 rounded-2xl font-bold  bg-white text-center content-center text-4xl lg:text-5xl lg:h-20 my-1 mr-1 px-3">
            One
          </p>
          <p className="h-16 rounded-2xl font-bold  bg-white text-center content-center text-4xl lg:text-5xl lg:h-20 px-3 my-1 ml-1">
            Stop
          </p>
        </div>

        <div>
          <p className="h-16 rounded-2xl font-bold  bg-white text-center content-center text-4xl my-1 lg:text-5xl lg:h-20 px-2">
            Marketplace
          </p>
        </div>

        <div className="flex">
          <p className="h-16 rounded-2xl font-bold  bg-white text-center content-center text-4xl my-1 lg:text-5xl lg:h-20 mr-1 px-2">
            For
          </p>

          <p className="h-16 rounded-2xl font-bold  bg-[#00dc82] text-center content-center text-4xl lg:text-5xl lg:h-20 lg:my-1 my-1 ml-1 px-3">
            Influencers
          </p>
        </div>

        <p className="text-white capitalize border-solid border-red-400 my-5 text-2xl sm:my-9 sm:text-4xl font-medium hover:text-[#38bdf8] duration-300">
          "Unleash your influence: sell itineraries, Build your brand, create
          merch and share content - all in one hub."
        </p>

        <button className="text-black bg-[#00dc82] px-6 py-3 rounded-2xl font-medium mr-5">
          Demo Store
        </button>

        <button className=" bg-gradient-to-r from-blue-400 to-orange-500  px-6 py-3 rounded-2xl font-medium ml-5">
          Join Waitlist
        </button>
      </div>

      {/* right section  */}

      <div className=" sm:w-6/12">
        <img className="mt-1" src={heroImg} alt="" />
      </div>
    </section>
  );
}

export default Hero;
