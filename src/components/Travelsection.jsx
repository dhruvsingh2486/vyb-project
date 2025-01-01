import React from "react";
import frstphoto from "../assets/Frame 1574.png";
import darjeelingImg from "../assets/darjeeling.png";
import indiaGateImg from "../assets/indiagate.png";
import blackMountains from "../assets/black-mountains.png";

function Travelsection() {
  const tourCard = [
    {
      id: 1,
      heading: "Darjeeling Itenerary",
      place: "West Bengal",
      image: darjeelingImg,
    },
    {
      id: 2,
      heading: "Darjeeling Itenerary",
      place: "West Bengal",
      image: darjeelingImg,
    },
    {
      id: 3,
      heading: "Delhi Itenerary",
      place: "Delhi",
      image: indiaGateImg,
    },
    {
      id: 4,
      heading: "Delhi Itenerary",
      place: "Delhi",
      image: indiaGateImg,
    },
  ];
  return (
    <>
      <section>
        <div className="w-11/12 lg:w-10/12 xl:10/12 border-white m-auto bg-black rounded-3xl text-white lg:h-[1830px] xl:h-[1830px] h-[1400px] ">
          <img
            src={frstphoto}
            alt=""
            className="rounded-3xl hover:text-[#fdba74] hover:text-xl hover:font-medium duration-200 relative z-0"
          />
          <div className="h-44 gap-0 lg:gap-10 flex flex-col border-green-600 relative z-10 text-center hover:text-[#fdba74] hover:font-medium duration-200 mt-[-140px] lg:mt-[-380px]">
            <p className=" border-blue-300 lg:text-9xl xl:text-9xl text-4xl font-bold text-center ">
              TRAVEL
            </p>

            <h1 className="font-medium border-red-400 font-primaryjost lg:text-3xl xl:[text-3xl] my-8 text-center w-11/12 lg:w-7/12 lg:px-2 lg:mx-56 text-md relative mx-4 ">
              Turn your travel experience into itineraries, travel package with
              VYB Store and share with your true followers.
            </h1>
          </div>

          <h1 className="font-medium font-primaryjost text-2xl my-4 text-center lg:text-3xl border-red-600 lg:mt-64 xl:mt-64">
            Explore Our Curated Travel Itineraries
          </h1>

          {/* Image Cards  */}

          <div className="flex flex-wrap gap-10 lg:gap-3 xl:gap-3 border-gray-500 mt-14 h-[630px] lg:px-6 lg:h-[450px] xl:[330px] ">
            {tourCard.map((card) => (
              <div
                key={card.key}
                className=" border-green-300 w-5/12 lg:w-[240px] rounded-2xl text-white my-2 cursor-pointer hover:text-[#fdba74] lg:hover:text-xl xl:hover:text-xl hover:font-medium duration-200"
              >
                <img src={card.image} alt="" className="rounded-2xl" />

                <h1 className="font-bold text-center className=relative z-10 mt-[-70px]">
                  {card.heading}
                </h1>
                <p className="text-center">{card.place}</p>
              </div>
            ))}
          </div>

          <div className=" border-blue-500 rounded-3xl flex flex-col gap-44 mt-9 h-92 bg-gradient-to-tl from-indigo-800 via-neutral-900 to-fuchsia-900 lg:h-[720px]">
            <p className="text-2xl text-white font-medium text-center mt-7 lg:text-4xl  xl:text-4xl">
              How to list?
            </p>

            <img
              src={blackMountains}
              alt=""
              className=" border-red-500 rounded-3xl"
            />

            <p className="text-2xl text-white font-medium text-center relative z-10 mt-[-270px] lg:text-4xl lg:mt-[-400px] xl:mt-[-400px] xl:text-4xl">
              You Curate Experience
            </p>
            <p className="text-2xl text-white font-medium text-center relative z-10 mt-[-180px] lg:text-4xl lg:mt-[-170px] xl:mt-[-170px] xl:text-4xl">
              We Make It Happen
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Travelsection;
