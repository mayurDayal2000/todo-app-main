import { FormEvent, useState } from "react";

type TodoFormProps = {
  onSubmit: (text: string) => void;
};

export function TodoForm({ onSubmit }: TodoFormProps) {
  const [todoText, setTodoText] = useState<string>("");
  const [isError, setIsError] = useState<boolean>(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const trimmedText = todoText.trim();
    if (trimmedText) {
      onSubmit(trimmedText);
      setTodoText("");
      setIsError(false);
    } else {
      setIsError(true);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoText(e.target.value);
    if (isError) setIsError(false);
  };

  return (
    <form
      className="w-full rounded-md bg-white shadow-md transit-colors dark:bg-[#25273D]"
      onSubmit={handleSubmit}
      aria-label="Add new todo"
    >
      <div className="flex items-center gap-x-3 px-5 py-4 md:gap-x-4 md:px-6 md:py-5 lg:gap-x-6">
        <span
          className="block h-5 w-5 rounded-full border border-[#E3E4F1] transit-colors ease-in md:h-6 md:w-6 dark:border-[#393A4B]"
          aria-hidden="true"
        ></span>

        <input
          type="text"
          placeholder="Create a new todo…"
          className={`w-full bg-transparent text-xs text-[#393A4B] caret-[#3A7CFD] outline-none placeholder:text-[#9495A5] md:text-sm lg:text-base xl:text-lg dark:text-[#C8CBE7] placeholder:dark:text-[#767992] ${
            isError ? "border-b border-red-500" : ""
          }`}
          value={todoText}
          onChange={handleChange}
          aria-label="New todo text"
          aria-invalid={isError}
          aria-required="true"
        />
      </div>
      {isError && (
        <p className="px-5 pb-2 text-xs text-red-500">
          Please enter a task before submitting
        </p>
      )}
    </form>
  );
}
