import ThemeContext from "@/Context/ThemeContext";
import { useContext, useState } from "react";
import RangeSlider from "./Filter/RangeSlide";

const SidebarFilters = ({ onFiltersChange }) => {
  const defaultFilters = {
    gender: "Male",
    ageRange: [18, 100],
    heightRange: [0, 10],
    permanentDivision: "",
    biodataId: "",
  };

  const [filters, setFilters] = useState(defaultFilters);
  const { isDarkMode } = useContext(ThemeContext);

  const handleGenderChange = (e) => {
    setFilters({ ...filters, gender: e.target.value });
  };

  const handleAgeChange = (newAgeRange) => {
    setFilters({ ...filters, ageRange: newAgeRange });
  };

  const handleHeightChange = (newHeightRange) => {
    setFilters({ ...filters, heightRange: newHeightRange });
  };

  const handleDivisionChange = (e) => {
    setFilters({ ...filters, permanentDivision: e.target.value });
  };

  const handleBiodataIdChange = (e) => {
    setFilters({ ...filters, biodataId: e.target.value });
  };

  const applyFilters = () => {
    onFiltersChange(filters);
  };

  const clearFilters = () => {
    setFilters(defaultFilters);
    onFiltersChange(defaultFilters);
  };

  return (
    <div className="space-y-4">
      {/* Gender Filter */}
      <div>
        <label
          className={`block text-sm font-medium ${
            isDarkMode ? "text-gray-200" : "text-gray-900"
          }`}
        >
          Gender
        </label>
        <select
          value={filters.gender}
          onChange={handleGenderChange}
          className={`w-full p-2 border rounded ${
            isDarkMode
              ? "bg-gray-800 text-gray-200 border-gray-600"
              : "bg-white text-gray-900 border-gray-300"
          }`}
        >
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </div>

      {/* Age Range Filter */}
      <RangeSlider
        label="Age Range"
        min={0}
        max={100}
        values={filters.ageRange}
        onChange={handleAgeChange}
      />

      {/* Height Range Filter */}
      <RangeSlider
        label="Height Range"
        min={0}
        max={10}
        values={filters.heightRange}
        onChange={handleHeightChange}
      />

      {/* Permanent Division Filter */}
      <div>
        <label
          className={`block text-sm font-medium ${
            isDarkMode ? "text-gray-200" : "text-gray-900"
          }`}
        >
          Permanent Division
        </label>
        <select
          value={filters.permanentDivision}
          onChange={handleDivisionChange}
          className={`w-full p-2 border rounded ${
            isDarkMode
              ? "bg-gray-800 text-gray-200 border-gray-600"
              : "bg-white text-gray-900 border-gray-300"
          }`}
        >
          <option value="">Select Division</option>
          <option value="Dhaka">Dhaka</option>
          <option value="Chattagra">Chattagra</option>
          <option value="Rangpur">Rangpur</option>
          <option value="Barisal">Barisal</option>
          <option value="Khulna">Khulna</option>
          <option value="Mymensingh">Mymensingh</option>
          <option value="Sylhet">Sylhet</option>
        </select>
      </div>

      {/* Biodata ID Filter */}
      <div>
        <label
          className={`block text-sm font-medium ${
            isDarkMode ? "text-gray-200" : "text-gray-900"
          }`}
        >
          Biodata ID
        </label>
        <input
          type="text"
          value={filters.biodataId}
          onChange={handleBiodataIdChange}
          className={`w-full p-2 border rounded ${
            isDarkMode
              ? "bg-gray-800 text-gray-200 border-gray-600"
              : "bg-white text-gray-900 border-gray-300"
          }`}
        />
      </div>

      {/* Apply Filters Button */}
      <button
        onClick={applyFilters}
        className={`w-full py-2 rounded ${
          isDarkMode ? "bg-BgPrimary text-gray-200" : "bg-BgPrimary text-white"
        } transition`}
      >
        Apply Filters
      </button>

      {/* Clear Filters Button */}
      <button
        onClick={clearFilters}
        className={`w-full py-2 rounded mt-2 ${
          isDarkMode ? "bg-gray-600 text-gray-200" : "bg-gray-500 text-white"
        } transition`}
      >
        Clear Filters
      </button>
    </div>
  );
};

export default SidebarFilters;
