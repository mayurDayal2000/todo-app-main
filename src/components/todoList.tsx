import { Todo } from "../hooks/useTodo";
import { TodoItem } from "./todoItem";

type TodoListProps = {
  todos: Todo[];
  onToggleTodo: (id: number) => void;
  onRemoveTodo: (id: number) => void;
};

export function TodoList({ todos, onToggleTodo, onRemoveTodo }: TodoListProps) {
  return (
    <section className="mt-4 w-full rounded-t bg-white shadow-md transit-colors dark:bg-[#25273D]">
      <h2 className="sr-only">Todo List</h2>

      <ul role="list">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={() => onToggleTodo(todo.id)}
            onRemove={() => onRemoveTodo(todo.id)}
          />
        ))}
      </ul>
    </section>
  );
}
