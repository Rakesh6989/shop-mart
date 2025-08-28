"use client";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

const categories = [
  {
    name: "Minutes",
    src: "/minutes.png", // apna image dalna
  },
  {
    name: "Mobiles & Tablets",
    src: "/mobiles.png",
  },
  {
    name: "Fashion",
    src: "/fashion.png",
    dropdown: true,
  },
  {
    name: "Electronics",
    src: "/electronics.png",
    dropdown: true,
  },
  {
    name: "Home & Furniture",
    src: "/furniture.png",
    dropdown: true,
  },
  {
    name: "TVs & Appliances",
    src: "/tv.png",
  },
  {
    name: "Flight Bookings",
    src: "/flight.png",
  },
  {
    name: "Beauty, Food..",
    src: "/beauty.png",
    dropdown: true,
  },
  {
    name: "Grocery",
    src: "/grocery.png",
  },
];

export default function CategoryBar() {
  return (
    <div className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-6 px-4 py-3">
        {categories.map((cat, i) => (
          <div
            key={i}
            className="flex flex-col items-center text-sm font-medium text-gray-700 cursor-pointer group"
          >
            {/* Image */}
            <div className="h-14 w-14 flex items-center justify-center">
              <Image
                src={cat.src}
                alt={cat.name}
                width={56}
                height={56}
                className="object-contain"
              />
            </div>

            {/* Text */}    
            <div className="flex items-center gap-1 mt-1">
              <span className="whitespace-nowrap">{cat.name}</span>
              {cat.dropdown && (
                <ChevronDown className="h-4 w-4 text-gray-500 group-hover:rotate-180 transition-transform" />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
