"use client";
import Image from "next/image";
import {
  Search,
  ShoppingCart,
  CircleUserRound,
  Store,
  EllipsisVertical,
} from "lucide-react";

const NAV_ITEMS = [
  {
    label: "Login",
    icon: CircleUserRound,
    className: "flex",
    hideTextOnMobile: false,
  },
  {
    label: "Cart",
    icon: ShoppingCart,
    className: "flex",
    hideTextOnMobile: false,
  },
  {
    label: "Become a Seller",
    icon: Store,
    className: "hidden sm:flex",
    hideTextOnMobile: false,
  },
  {
    label: "",
    icon: EllipsisVertical,
    className: "hidden sm:flex cursor-pointer font-normal",
    hideTextOnMobile: true,
  },
];

export default function Header() {
  return (
    <div className="bg-white shadow-lg mb-5 sticky top-0 z-50">
      <header className="Container-Div mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3 gap-4">
        <div className="flex items-center flex-shrink-0 mr-5">
          <Image
            src="/fliplogo.svg"
            alt="Flipkart"
            width={140}
            height={30}
            className="h-7 w-auto sm:h-8 cursor-pointer"
          />
        </div>
        <div className="flex-1 hidden sm:flex items-center">
          <div className="flex w-full items-center bg-blue-50 rounded-md border border-gray-200 px-3 py-2">
            <Search className="h-6 w-6 text-gray-500" />
            <input
              type="text"
              placeholder="Search for Products, Brands and More"
              className="ml-2 flex-1 font-semibold bg-transparent cursor-pointer text-sm outline-none placeholder-gray-500"
            />
          </div>
        </div>
        <div className="flex items-center gap-10 ml-5 text-sm font-medium">
          {NAV_ITEMS.map(({ label, icon: Icon, className, hideTextOnMobile }, idx) => (
            <button
              key={idx}
              className={`${className} items-center gap-2 cursor-pointer hover:text-blue-600 transition`}
            >
              <Icon className="h-6 w-6" />
              {!hideTextOnMobile && (
                <span className="hidden sm:inline">{label}</span>
              )}
            </button>
          ))}
        </div>
      </header>
      <div className="px-4 pb-3 sm:hidden">
        <div className="flex items-center bg-blue-50 rounded-md border border-gray-200 px-3 py-2">
          <Search className="h-6 w-6 text-gray-500" />
          <input
            type="text"
            placeholder="Search for Products, Brands and More"
            className="ml-2 flex-1 bg-transparent text-sm outline-none placeholder-gray-500"
          />
        </div>
      </div>
    </div>
  );
}
