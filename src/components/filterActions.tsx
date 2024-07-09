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
    <div className="flex items-center justify-center gap-x-4">
      {filterOptions.map((filter) => (
        <button
          key={filter}
          type="button"
          className={`text-sm font-bold transit-colors hover:text-[#494C6B] dark:hover:text-[#E3E4F1] ${
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
}
