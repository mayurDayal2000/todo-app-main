import { FilterType } from "../hooks/useTodo";

type FilterActionsProps = {
  activeFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
};

export function FilterActions({
  activeFilter,
  onFilterChange,
}: FilterActionsProps) {
  const filterOptions: FilterType[] = ["all", "active", "completed"];

  return (
    <ul className="flex items-center justify-center gap-x-4">
      {filterOptions.map((filter) => (
        <li key={filter} role="presentation">
          <button
            type="button"
            role="tab"
            aria-selected={activeFilter === filter}
            aria-controls={`${filter}-todos`}
            className={`text-sm font-bold transition-colors ease-in hover:text-[#494C6B] dark:hover:text-[#E3E4F1] ${
              activeFilter === filter
                ? "text-[#3A7CFD]"
                : "text-[#9495A5] dark:text-[#5B5E7E]"
            }`}
            onClick={() => onFilterChange(filter)}
          >
            {filter.charAt(0).toUpperCase() + filter.slice(1)}
          </button>
        </li>
      ))}
    </ul>
  );
}
