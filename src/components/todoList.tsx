import { AnimatePresence, Reorder } from "framer-motion";
import { Todo } from "../hooks/useTodo";
import { TodoItem } from "./todoItem";
import { Dispatch } from "react";

type TodoListProps = {
  todos: Todo[];
  updateTodos: Dispatch<React.SetStateAction<Todo[]>>;
  onToggleTodo: (id: number) => void;
  onRemoveTodo: (id: number) => void;
};

export function TodoList({
  todos,
  updateTodos,
  onToggleTodo,
  onRemoveTodo,
}: TodoListProps) {
  return (
    <section className="mt-4 w-full rounded-t bg-white shadow-md transit-colors dark:bg-[#25273D]">
      <h2 className="sr-only">Todo List</h2>

      <Reorder.Group
        axis="y"
        values={todos}
        onReorder={updateTodos}
        role="list"
      >
        <AnimatePresence>
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={() => onToggleTodo(todo.id)}
              onRemove={() => onRemoveTodo(todo.id)}
            />
          ))}
        </AnimatePresence>
      </Reorder.Group>
    </section>
  );
}
