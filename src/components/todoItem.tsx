import { useId } from "react";
import { Todo } from "../hooks/useTodo";
import checkIcon from "../assets/icons/icon-check.svg";
import crossIcon from "../assets/icons/icon-cross.svg";

type TodoItemProps = {
  todo: Todo;
  onToggle: () => void;
  onRemove: () => void;
};

export function TodoItem({ todo, onToggle, onRemove }: TodoItemProps) {
  const checkboxId = useId();

  return (
    <li className="flex w-full items-center justify-between border-b border-b-[#E3E4F1] px-5 py-4 transition-colors ease-in md:px-6 md:py-5 dark:border-b-[#393A4B]">
      <label
        htmlFor={checkboxId}
        className="flex cursor-pointer select-none items-center gap-x-3 md:gap-x-4 lg:gap-x-6"
      >
        <input
          type="checkbox"
          id={checkboxId}
          checked={todo.isCompleted}
          onChange={onToggle}
          className="sr-only"
        />

        <span
          className={`flex h-5 w-5 items-center justify-center rounded-full border border-[#E3E4F1] transition-colors ease-in hover:border-[#55DDFF] md:h-6 md:w-6 dark:border-[#393A4B] ${
            todo.isCompleted
              ? "bg-gradient-to-br from-[#55DDFF] to-[#C058F3]"
              : "bg-transparent"
          } `}
          aria-hidden="true"
        >
          {todo.isCompleted && <img src={checkIcon} alt="check icon" />}
        </span>

        <p
          className={`text-xs transition-colors ease-in md:text-sm lg:text-base xl:text-lg ${
            todo.isCompleted
              ? "text-[#D1D2DA] line-through dark:text-[#4D5067]"
              : "text-[#494C6B] dark:text-[#C8CBE7]"
          }`}
        >
          {todo.text}
        </p>
      </label>

      <button
        type="button"
        onClick={onRemove}
        aria-label={`Remove todo: ${todo.text}`}
      >
        <img
          src={crossIcon}
          alt="cross icon"
          className="h-3 w-3 md:h-4 md:w-4 lg:h-[1.125rem] lg:w-[1.125rem]"
        />
      </button>
    </li>
  );
}