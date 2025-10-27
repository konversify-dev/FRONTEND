import React from "react";
import { FiSearch } from "react-icons/fi";

export default function SearchFilterBar({
  filters = [],
  onSearchChange,
  onFilterChange,
}) {
  return (
    <div className="bg-white shadow-sm justify-center item-center rounded-xl p-4 flex items-center gap-x-4 overflow-x-auto shadow-gray-300 mb-6">
      {/* 🔍 Search box */}
      <div className="relative flex-shrink-0 w-full sm:w-[300px] md:w-[400px] lg:w-[500px]">
        <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-secondary" />
        <input
          type="text"
          placeholder="Search here..."
          onChange={(e) => onSearchChange?.(e.target.value)}
          className="w-full border border-secondary rounded-[10px] pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-light"
        />
      </div>

      {/* 🔽 Dynamic filter dropdowns */}
      <div className="flex gap-x-3">
        {filters.map((filter) => (
          <select
            key={filter.id}
            onChange={(e) => onFilterChange?.(filter.id, e.target.value)}
            className="w-[150px] border border-secondary rounded-[10px] px-4 py-2 text-sm text-gray-500 bg-white focus:outline-none focus:ring-2 focus:ring-primary-light"
          >
            <option value="">{filter.placeholder}</option>
            {filter.options.map((opt, idx) => (
              <option key={idx} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        ))}
      </div>
    </div>
  );
}
