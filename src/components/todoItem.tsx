import { useId } from "react";
import { Todo } from "../types";
import checkIcon from "../assets/icons/icon-check.svg";
import crossIcon from "../assets/icons/icon-cross.svg";
import { Reorder } from "framer-motion";

type TodoItemProps = {
  todo: Todo;
  onToggle: () => void;
  onRemove: () => void;
};

export function TodoItem({ todo, onToggle, onRemove }: TodoItemProps) {
  const checkboxId = useId();

  return (
    <Reorder.Item
      value={todo}
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ x: -20, opacity: 0 }}
      whileHover={{ scale: 1.005, backgroundColor: "rgba(0,0,0,0.01)" }}
      whileDrag={{
        scale: 1.03,
        backgroundColor: "rgba(58, 124, 253, 0.05)",
        boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
      }}
      transition={{ type: "tween" }}
      className="flex w-full cursor-move items-center justify-between border-b border-b-[#E3E4F1] px-5 py-4 transition-colors md:px-6 md:py-5 dark:border-b-[#393A4B]"
      role="listitem"
      aria-checked={todo.isCompleted}
    >
      <div className="cursor-pointer select-none">
        <input
          type="checkbox"
          id={checkboxId}
          checked={todo.isCompleted}
          onChange={onToggle}
          className="sr-only"
          aria-label={`Mark "${todo.text}" as ${
            todo.isCompleted ? "incomplete" : "complete"
          }`}
        />

        <label
          htmlFor={checkboxId}
          className="flex items-center gap-x-3 md:gap-x-4 lg:gap-x-6"
        >
          <span
            className={`flex h-5 w-5 items-center justify-center rounded-full border border-[#E3E4F1] transition-colors duration-200 hover:border-[#55DDFF] md:h-6 md:w-6 dark:border-[#393A4B] ${
              todo.isCompleted
                ? "bg-gradient-to-br from-[#55DDFF] to-[#C058F3]"
                : "bg-transparent"
            } `}
            aria-hidden="true"
          >
            {todo.isCompleted && <img src={checkIcon} alt="" />}
          </span>

          <span
            className={`text-xs transition-colors duration-200 md:text-sm lg:text-base xl:text-lg ${
              todo.isCompleted
                ? "text-[#D1D2DA] line-through dark:text-[#4D5067]"
                : "text-[#494C6B] dark:text-[#C8CBE7]"
            }`}
          >
            {todo.text}
          </span>
        </label>
      </div>

      <button
        type="button"
        onClick={onRemove}
        aria-label={`Remove todo: ${todo.text}`}
        className="opacity-70 hover:opacity-100 focus:opacity-100 focus:outline-none transition-opacity"
      >
        <img
          src={crossIcon}
          alt=""
          aria-hidden="true"
          className="h-3 w-3 md:h-4 md:w-4 lg:h-[1.125rem] lg:w-[1.125rem]"
        />
      </button>
    </Reorder.Item>
  );
}
