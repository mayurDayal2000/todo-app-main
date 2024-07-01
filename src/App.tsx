import { FilterActions } from "./components/filterActions";
import { Header } from "./components/header";
import { TodoForm } from "./components/todoForm";
import { TodoList } from "./components/todoList";
import { useTodo } from "./hooks/useTodo";

export default function App() {
  const {
    activeFilter,
    todos,
    addTodo,
    toggleTodoCompletion,
    removeTodo,
    handleActiveFilter,
    clearCompleted,
  } = useTodo();

  const filteredTodos = todos.filter((todo) => {
    if (activeFilter === "active") return !todo.isCompleted;
    if (activeFilter === "completed") return todo.isCompleted;
    return true;
  });

  const todosCount = todos.filter((todo) => !todo.isCompleted).length;

  return (
    <div className="min-h-screen w-full bg-[#FAFAFA] px-6 transition-colors ease-in md:flex md:items-center md:justify-center dark:bg-[#171823]">
      <div className="mx-auto w-full max-w-xl py-10">
        <Header />

        <main className="w-full">
          <TodoForm onSubmit={addTodo} />
          <TodoList
            todos={filteredTodos}
            onToggleTodo={toggleTodoCompletion}
            onRemoveTodo={removeTodo}
          />

          <section className="flex w-full items-center justify-between px-5 py-4">
            <p className="text-xs text-[#9495A5] md:text-sm dark:text-[#5B5E7E]">
              {todosCount} items left
            </p>

            <nav className="hidden md:block">
              <FilterActions
                activeFilter={activeFilter}
                onFilterChange={handleActiveFilter}
              />
            </nav>

            <button
              type="button"
              className="text-xs text-[#9495A5] md:text-sm dark:text-[#5B5E7E] hover:text-[#494C6B] dark:hover:text-[#E3E4F1]"
              onClick={clearCompleted}
            >
              Clear Completed
            </button>
          </section>

          <nav className="mt-4 w-full rounded bg-white p-3 shadow-md transition-colors ease-in md:hidden dark:bg-[#25273D]">
            <FilterActions
              activeFilter={activeFilter}
              onFilterChange={handleActiveFilter}
            />
          </nav>
        </main>
      </div>
    </div>
  );
}
