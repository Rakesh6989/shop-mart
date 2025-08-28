"use client";
import { useState } from "react";
import Image from "next/image";
import {
  Search,
  ShoppingCart,
  CircleUserRound,
  Store,
  EllipsisVertical,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";
const NAV_ITEMS = [
  {
    label: "Login",
    icon: CircleUserRound,
    hideTextOnMobile: false,
  },
  {
    label: "Cart",
    icon: ShoppingCart,
    hideTextOnMobile: false,
  },
  {
    label: "Become a Seller",
    icon: Store,
    hideTextOnMobile: false,
  },
  {
    label: "",
    icon: EllipsisVertical,
    hideTextOnMobile: true,
  },
];
export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
        <div className="hidden md:flex items-center gap-8 ml-5 text-sm font-medium">
          {NAV_ITEMS.map(({ label, icon: Icon, hideTextOnMobile }, idx) => (
            <button
              key={idx}
              className="flex items-center gap-2 group p-1.5 rounded-lg hover:bg-blue-600 hover:text-white transition"
            >
              <Icon className="h-6 w-6" />
              {!hideTextOnMobile && (
                <>
                  <span className="hidden sm:inline">{label}</span>
                  {label === "Login" && (
                    <ChevronDown className="ml-[-6px] transition-transform duration-300 group-hover:rotate-180" />
                  )}
                </>
              )}
            </button>
          ))}
        </div>
        <button
          className="md:hidden flex items-center p-2 rounded-lg hover:bg-gray-100"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
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
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg px-4 py-4 space-y-3">
          {NAV_ITEMS.map(({ label, icon: Icon, hideTextOnMobile }, idx) => (
            <button
              key={idx}
              className="w-full flex items-center gap-3 p-2 rounded-lg hover:bg-blue-600 hover:text-white transition"
            >
              <Icon className="h-6 w-6" />
              {!hideTextOnMobile && (
                <>
                  <span>{label}</span>
                  {label === "Login" && (
                    <ChevronDown className="ml-[-6px] transition-transform duration-300 group-hover:rotate-180" />
                  )}
                </>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
