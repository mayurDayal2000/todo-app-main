import { memo } from "react";
import { FilterType } from "../types";

type FilterActionsProps = {
  activeFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
};

export const FilterActions = memo(function FilterActions({
  activeFilter,
  onFilterChange,
}: FilterActionsProps) {
  const filterOptions: FilterType[] = ["all", "active", "completed"];

  return (
    <div
      className="flex items-center justify-center gap-x-4"
      role="radiogroup"
      aria-label="Filter todos"
    >
      {filterOptions.map((filter) => (
        <button
          key={filter}
          type="button"
          role="radio"
          aria-checked={activeFilter === filter}
          className={`text-sm font-bold transition-colors duration-200 hover:text-[#494C6B] dark:hover:text-[#E3E4F1] focus:outline-none focus-visible:underline ${
            activeFilter === filter
              ? "text-[#3A7CFD]"
              : "text-[#9495A5] dark:text-[#5B5E7E]"
          }`}
          onClick={() => onFilterChange(filter)}
        >
          {filter.charAt(0).toUpperCase() + filter.slice(1)}
        </button>
      ))}
    </div>
  );
});
