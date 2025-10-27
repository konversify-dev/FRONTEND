import React, { useState } from "react";
import { ChevronDown, Plus } from "lucide-react"; 

export default function Button({
  text,
  variant = "primary",
  icon,
  options = [],
  onClick,
}) {
  const [isOpen, setIsOpen] = useState(false);

  // Warna tombol utama
  const baseStyle =
    "flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-normal text-sm transition focus:outline-none";
  const variants = {
    primary: "bg-[#1262BE] text-white hover:bg-blue-700",
    secondary:
      "bg-white border border-[#1262BE] text-[#1262BE] hover:bg-[#1262BE] hover:text-white",
    dropdown:
      "bg-white border border-[#1262BE] text-[#1262BE] hover:bg-[#1262BE] hover:text-white relative",
  };

  return (
    <div className="relative inline-block">
      {/* Button utama */}
      <button
        className={`${baseStyle} ${variants[variant]}`}
        onClick={() => {
          if (variant === "dropdown") {
            setIsOpen(!isOpen);
          } else if (onClick) {
            onClick();
          }
        }}
      >
        {/* Icon kiri */}
        {icon === "plus" && <Plus size={16} />}
        {text}
        {variant === "dropdown" && (
          <ChevronDown
            size={16}
            className={`transition-transform ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
          />
        )}
      </button>

      {/* Dropdown menu */}
      {variant === "dropdown" && isOpen && options.length > 0 && (
        <ul className="absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded-md shadow-md">
          {options.map((option, index) => (
            <li
              key={index}
              onClick={() => {
                setIsOpen(false);
                option.onSelect && option.onSelect(option.value);
              }}
              className="px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer"
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
