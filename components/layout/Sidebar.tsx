import React, { useRef } from "react";
import classNames from "classnames";
import Link from "next/link";
import Image from "next/image";
import { defaultNavItems, NavItem } from "./defaultNavItems";
import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
} from "@heroicons/react/24/outline";

// add NavItem prop to component prop
type Props = {
  collapsed: boolean;
  navItems?: NavItem[];
  setCollapsed(collapsed: boolean): void;
  shown: boolean;
};
const Sidebar = ({
  collapsed,
  navItems = defaultNavItems,
  shown,
  setCollapsed,
}: Props) => {
  const Icon = collapsed ? ChevronDoubleRightIcon : ChevronDoubleLeftIcon;
  return (
    <div
      className={classNames({
        "bg-[#2B124C] text-zinc-50 fixed md:static md:translate-x-0 z-20":
          true,
        "transition-all duration-300 ease-in-out": true,
        "w-[150px]": !collapsed,
        "w-16": collapsed,
        "-translate-x-full": !shown,
      })}
    >
      <div
        className={classNames({
          "flex flex-col justify-between h-screen sticky inset-0 w-full": true,
        })}
      >
        {/* logo and collapse button */}
        <div
          className={classNames({
            "flex items-center border-b border-b-indigo-800 transition-none":
              true,
            "p-4 justify-between": !collapsed,
            "py-4 justify-center": collapsed,
          })}
        >
          {!collapsed && (
  <span className="whitespace-nowrap text-lg font-bold text-white-500">
    suk madik
  </span>
)}

          <button
            className="grid place-content-center hover:bg-indigo-800 w-10 h-10 rounded-full opacity-0 md:opacity-100"
            onClick={() => setCollapsed(!collapsed)}
          >
            <Icon className="w-5 h-5" />
          </button>
        </div>
        <nav className="flex-grow">
          <ul
            className={classNames({
              "my-2 flex flex-col gap-2 items-stretch": true,
            })}
          >
            {navItems.map((item, index) => {
              return (
                <li
                  key={index}
                  className={classNames({
                    "text-indigo-100 hover:bg-indigo-900 flex": true, //colors
                    "transition-colors duration-300": true, //animation
                    "rounded-md p-2 mx-3 gap-4 ": !collapsed,
                    "rounded-full p-2 mx-3 w-10 h-10": collapsed,
                  })}
                >
                  <Link href={item.href} className="flex gap-2">
                    {item.icon} <span>{!collapsed && item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <div
          className={classNames({
            "grid place-content-stretch p-4 ": true,
          })}
        >
          <div className="relative">
  <div className="flex gap-4 items-center h-11 overflow-hidden">
    {/* Your Image and content here */}
  </div>
  <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-black to-transparent"></div>
</div>

          <div className="flex gap-4 items-center h-11 overflow-hidden">
            <Image
              src={
                "https://images.unsplash.com/photo-1580128660010-fd027e1e587a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
              }
              height={36}
              width={36}
              alt="profile image"
              className="rounded-full"
            />
            {!collapsed && (
              <div className="flex flex-col ">
                <span className="text-indigo-50 my-0">Tom Cook</span>
                <Link href="/" className="text-indigo-200 text-sm">
                  View Profile
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;