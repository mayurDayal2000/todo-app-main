import { FilterActions } from "./components/filterActions";
import { Header } from "./components/header";
import { TodoForm } from "./components/todoForm";
import { TodoList } from "./components/todoList";
import { useTodo } from "./hooks/useTodo";

export default function App() {
  const {
    activeFilter,
    filteredTodos,
    activeTodosCount,
    todos,
    setTodos,
    addTodo,
    toggleTodoCompletion,
    removeTodo,
    handleActiveFilter,
    clearCompleted,
  } = useTodo();

  return (
    <div className="font-display bg-screen px-6 transition-colors">
      <div className="mx-auto w-full max-w-xl py-10 md:py-20 lg:py-24">
        <Header />

        <main className="w-full">
          <TodoForm onSubmit={addTodo} />
          <TodoList
            todos={filteredTodos}
            updateTodos={setTodos}
            onToggleTodo={toggleTodoCompletion}
            onRemoveTodo={removeTodo}
          />

          <div className="flex w-full items-center justify-between rounded-b bg-white p-3 px-5 py-4 shadow-md transition-colors dark:bg-[#25273D]">
            <p className="text-xs text-[#9495A5] md:text-sm dark:text-[#5B5E7E]">
              {activeTodosCount} {activeTodosCount === 1 ? "item" : "items"}{" "}
              left
            </p>

            <nav className="hidden md:block" aria-label="Todo filters">
              <FilterActions
                activeFilter={activeFilter}
                onFilterChange={handleActiveFilter}
              />
            </nav>

            <button
              type="button"
              className="text-xs text-[#9495A5] md:text-sm transition-colors dark:text-[#5B5E7E] hover:text-[#494C6B] dark:hover:text-[#E3E4F1]"
              onClick={clearCompleted}
              aria-label="Clear all completed tasks"
            >
              Clear Completed
            </button>
          </div>

          <nav
            className="mt-4 w-full rounded bg-white p-3 shadow-md transition-colors ease-in md:hidden dark:bg-[#25273D]"
            aria-label="Todo filters (mobile)"
          >
            <FilterActions
              activeFilter={activeFilter}
              onFilterChange={handleActiveFilter}
            />
          </nav>

          <p className="mt-10 text-center text-sm text-[#9495A5] lg:text-base dark:text-[#5B5E7E]">
            Drag and drop to reorder list
          </p>
        </main>

        <footer className="mt-12">
          <p className="text-center text-sm text-[#9495A5] lg:text-base dark:text-[#5B5E7E]">
            Challenge by{" "}
            <a
              href="https://www.frontendmentor.io?ref=challenge"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#3A7CFD] underline"
            >
              Frontend Mentor
            </a>
            . Coded by <strong>Mayur Dayal</strong>.
          </p>
        </footer>
      </div>
    </div>
  );
}
