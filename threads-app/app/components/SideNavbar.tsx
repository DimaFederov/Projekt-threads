"use client";

import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Disclosure } from "@headlessui/react";
import {
  MdOutlineSpaceDashboard,
  MdOutlineAnalytics,
  MdOutlineIntegrationInstructions,
  MdOutlineMoreHoriz,
  MdOutlineSettings,
  MdOutlineLogout,
} from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { FaRegComments } from "react-icons/fa";
import { BiMessageSquareDots } from "react-icons/bi";

function SideNavbar() {
  return (
    <div>
      <Disclosure as="nav">
        <Disclosure.Button className="absolute top-4 right-4 inline-flex items-center peer justify-center rounded-md p-2 text-gray-800 hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white group">
          <GiHamburgerMenu
            className="block md:hidden h-6 w-6"
            aria-hidden="true"
          />
        </Disclosure.Button>
        <div className="p-6 w-1/2 h-screen bg-gray-900 z-20 fixed top-0 -left-96 lg:left-0 lg:w-60 peer-focus:left-0 peer:transition ease-out delay-150 duration-200">
          <div className="flex flex-col justify-start item-center">
            <h1 className="text-lg text-center cursor-pointer font-bold text-blue-200 border-b border-gray-800 pb-4 w-full">
              Virtual Dashboard
            </h1>
            <div className="my-4">
              <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-800 p-2 rounded-md group cursor-pointer hover:shadow-lg">
                <MdOutlineSpaceDashboard className="text-2xl text-gray-300 group-hover:text-white" />
                <h3 className="text-base text-gray-200 group-hover:text-white font-semibold">
                  Dashboard
                </h3>
              </div>
              <div className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-800 p-2 rounded-md group cursor-pointer hover:shadow-lg">
                <CgProfile className="text-2xl text-gray-300 group-hover:text-white" />
                <h3 className="text-base text-gray-200 group-hover:text-white font-semibold">
                  Profile
                </h3>
              </div>
              <div className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-800 p-2 rounded-md group cursor-pointer hover:shadow-lg">
                <FaRegComments className="text-2xl text-gray-300 group-hover:text-white" />
                <h3 className="text-base text-gray-200 group-hover:text-white font-semibold">
                  Comments
                </h3>
              </div>
              <div className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-800 p-2 rounded-md group cursor-pointer hover:shadow-lg">
                <MdOutlineAnalytics className="text-2xl text-gray-300 group-hover:text-white" />
                <h3 className="text-base text-gray-200 group-hover:text-white font-semibold">
                  Analytics
                </h3>
              </div>
              <div className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-800 p-2 rounded-md group cursor-pointer hover:shadow-lg">
                <BiMessageSquareDots className="text-2xl text-gray-300 group-hover:text-white" />
                <h3 className="text-base text-gray-200 group-hover:text-white font-semibold">
                  Messages
                </h3>
              </div>
              <div className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-800 p-2 rounded-md group cursor-pointer hover:shadow-lg">
                <MdOutlineIntegrationInstructions className="text-2xl text-gray-300 group-hover:text-white" />
                <h3 className="text-base text-gray-200 group-hover:text-white font-semibold">
                  Integration
                </h3>
              </div>
            </div>
            {/* setting  */}
            <div className="my-4">
              <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-800 p-2 rounded-md group cursor-pointer hover:shadow-lg">
                <MdOutlineSettings className="text-2xl text-gray-300 group-hover:text-white" />
                <h3 className="text-base text-gray-200 group-hover:text-white font-semibold">
                  Settings
                </h3>
              </div>
              <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-800 p-2 rounded-md group cursor-pointer hover:shadow-lg">
                <MdOutlineMoreHoriz className="text-2xl text-gray-300 group-hover:text-white" />
                <h3 className="text-base text-gray-200 group-hover:text-white font-semibold">
                  More
                </h3>
              </div>
            </div>
            {/* logout */}
            <div className="my-4">
              <div className="flex mb-2 justify-start items-center gap-4 pl-5 border border-gray-800 hover:bg-gray-800 p-2 rounded-md group cursor-pointer hover:shadow-lg">
                <MdOutlineLogout className="text-2xl text-gray-300 group-hover:text-white" />
                <h3 className="text-base text-gray-200 group-hover:text-white font-semibold">
                  Logout
                </h3>
              </div>
            </div>
          </div>
        </div>
      </Disclosure>
    </div>
  );
}

export default SideNavbar;
