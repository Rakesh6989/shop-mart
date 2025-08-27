"use client";
import Image from "next/image";
import { Search, ShoppingCart } from "lucide-react";

export default function Header() {
  return (
    <div className="bg-white shadow-md sticky top-0 z-50">
      <header className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3 gap-4">
        
        {/* Logo */}
        <div className="flex items-center flex-shrink-0">
          <Image
            src="/fliplogo.svg" // apna logo dalna
            alt="Flipkart"
            width={100}
            height={30}
            className="h-6 w-auto sm:h-7"
          />
        </div>

        {/* Search Bar */}
        <div className="flex-1 hidden sm:flex items-center">
          <div className="flex w-full max-w-xl items-center bg-blue-50 rounded-md border border-gray-200 px-3 py-2">
            <Search className="h-5 w-5 text-gray-500" />
            <input
              type="text"
              placeholder="Search for Products, Brands and More"
              className="ml-2 flex-1 bg-transparent text-sm outline-none placeholder-gray-500"
            />
          </div>
        </div>

        {/* Right Side Buttons */}
        <div className="flex items-center space-x-6 text-sm font-medium">
          {/* Login */}
          <button className="flex items-center gap-1 hover:text-blue-600 transition">
            <span className="hidden sm:inline">Login</span>
          </button>

          {/* Cart */}
          <button className="flex items-center gap-1 hover:text-blue-600 transition">
            <ShoppingCart className="h-5 w-5" />
            <span className="hidden sm:inline">Cart</span>
          </button>

          {/* Become Seller */}
          <button className="hidden sm:flex items-center gap-1 hover:text-blue-600 transition">
            <span>Become a Seller</span>
          </button>
        </div>
      </header>

      {/* Mobile Search Bar */}
      <div className="px-4 pb-3 sm:hidden">
        <div className="flex items-center bg-blue-50 rounded-md border border-gray-200 px-3 py-2">
          <Search className="h-5 w-5 text-gray-500" />
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
