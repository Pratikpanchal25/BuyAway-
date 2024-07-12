import React from "react";
import { NavLink } from "react-router-dom";
function Home_mid() {
  return (
    <div>
      <section className="text-gray-600 body-font transition duration-200">
        <div className="container px-5 py-[2rem] mx-auto flex justify-center items-center flex-wrap">
          <div className="lg:w-full flex justify-center items-center lg:mb-0 rounded-lg overflow-hidden">
            <img
              alt="feature"
              className="object-cover h-[20rem]"
              src="https://res.cloudinary.com/ddsxrzg64/image/upload/v1720330098/Buyaway_Logo-removebg-preview_lswkae.png"
            />
          </div>

          <div className="sm:flex  justify-center items-center lg:py-6 -mb-10 lg:w-full lg:pl-12 lg:text-left text-center">
            <NavLink to="candles">
              <div className="flex hover:scale-110 transition duration-300 flex-col mb-10 lg:items-start items-center w-[18rem]  h-[20rem] sm:w-[20rem]  mr-5 border-[1px] border-black rounded-md shadow-sm shadow-black ">
                <div className="flex-grow m-3">
                  <div className="w-full sm:justify-start flex justify-center items-center">
                    <img
                      className="h-[8rem]"
                      src="https://res.cloudinary.com/ddsxrzg64/image/upload/v1720446772/png-transparent-encapsulated-postscript-incense-miscellaneous-logo-silhouette-thumbnail-removebg-preview_dggmao.png"
                      alt=""
                    />
                  </div>
                  <h1 className="text-gray-900 text-lg title-font font-medium mb-3">
                    Agarbatti
                  </h1>
                  <p className="leading-relaxed text-base">
                    Fragrant Agarbattis, Unbeatable Prices: Your One-Stop Shop For Serenity Made
                    Affordable for All.
                  </p>

                  <div className="mt-3 text-indigo-500 inline-flex items-center cursor-pointer">
                    Go for Products
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokellinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </NavLink>
            <div className="flex flex-col mb-10 lg:items-start w-[18rem] sm:mx-10 sm:w-[20rem]  mr-5 items-center border-[1px] border-black rounded-md shadow-sm  h-[20rem] shadow-black hover:scale-110 transition duration-300">
              <NavLink to="/electronics">
                <div className="flex-grow m-3">
                  <div className="w-full sm:justify-start flex justify-center items-center">
                    <img
                      className="h-[8rem]"
                      src="https://res.cloudinary.com/ddsxrzg64/image/upload/v1720446772/jbltune720bt__2_-750x750-removebg-preview_2_ks1pdi.png"
                      alt=""
                    />
                  </div>

                  <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                    Electronics
                  </h2>
                  <p className="leading-relaxed text-base">
                    Top Electronics, Unbeatable Prices: Your One-Stop Shop For
                    Innovation Made Affordable for All
                  </p>
                  <div className="mt-3 text-indigo-500 inline-flex items-center cursor-pointer">
                    Go for Products
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokellinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </div>
                </div>
              </NavLink>
            </div>

            <div className="flex flex-col mb-10 lg:items-start items-center border-[1px] w-[18rem]  sm:w-[20rem]  mr-5 border-black rounded-md shadow-sm shadow-black p-3  hover:scale-110 transition h-[20rem] duration-300">
              <NavLink to="/coolers">
                <div className="w-full sm:justify-start flex justify-center items-center">
                  <img
                    className="h-[8rem] "
                    src="https://res.cloudinary.com/ddsxrzg64/image/upload/v1720446772/air-cooler-fan-2081451-1751472_febgnt.webp"
                    alt=""
                  />
                </div>
                <div className="flex-grow m-2">
                  <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                    Coolers
                  </h2>
                  <p className="leading-relaxed text-[1rem]">
                    High-Performance Coolers, Unbeatable Prices: Comfort Made
                    Affordable for All.
                  </p>
                  <div className="mt-3 text-indigo-500 inline-flex items-center cursor-pointer">
                    Go for Products
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokellinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </div>
                </div>
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home_mid;
