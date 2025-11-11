import React, { useState, useRef, useEffect } from "react";
import { FiChevronDown } from "react-icons/fi";

export default function CustomDropdown({
  options = [],
  defaultValue = "Select an option",
  onChange,
  width = "w-48",
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(defaultValue);
  const dropdownRef = useRef(null);

  // Tutup dropdown saat klik di luar area
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (option) => {
    setSelected(option);
    setIsOpen(false);
    if (onChange) onChange(option);
  };

  return (
    <div ref={dropdownRef} className={`relative inline-block text-left ${width}`}>
      {/* Tombol Utama */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="
          inline-flex items-center justify-between
          w-full px-4 py-2
          bg-white text-gray-700 font-medium
          rounded-lg border border-gray-300
          shadow-sm hover:bg-gray-50
          focus:outline-none
          transition-all duration-200
        "
      >
        {selected}
        <FiChevronDown
          className={`ml-2 h-5 w-5 transform transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          className="
            absolute z-10 mt-2 w-full
            bg-white border border-gray-200
            rounded-lg shadow-lg
          "
        >
          {options.map((option, index) => (
            <div
              key={index}
              onClick={() => handleSelect(option)}
              className="
                px-4 py-2 text-gray-700 hover:bg-gray-200
                cursor-pointer transition-colors duration-150
              "
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
