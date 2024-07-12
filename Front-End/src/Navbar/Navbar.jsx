import React from "react";
import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <>
      <nav className="bg-[#E7F6F2] fixed w-full z-10">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className=" flex h-16 items-center justify-space-between w-full">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <NavLink to="/"><button className="rounded-md bg-gray-900 px-3 ml-5 py-2 text-sm font-medium text-white" >Home</button></NavLink>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start justify-self-end">
              <div className="flex flex-shrink-0 items-center cur">
                <NavLink to="/">
                  <img
                    className="h-8 w-auto"
                    src="https://res.cloudinary.com/ddsxrzg64/image/upload/v1720446698/Buyaway-removebg-preview_mlfr1z.png"
                    alt="Buy Away"
                  />
                </NavLink>
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white"
                    aria-current="page"
                  >
                    by Nitin Panchal
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
