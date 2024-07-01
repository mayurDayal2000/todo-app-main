import { useState } from "react";
import sampleTasks from "../utilities/tasks.json";

export type FilterType = "all" | "active" | "completed";

export type Todo = {
  id: number;
  text: string;
  isCompleted: boolean;
};

export function useTodo() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");

  const [todos, setTodos] = useState<Todo[]>(sampleTasks || []);

  const handleActiveFilter = (action: FilterType) => {
    setActiveFilter(action);
  };

  const addTodo = (text: string) => {
    setTodos([...todos, { id: Date.now(), text, isCompleted: false }]);
  };

  const toggleTodoCompletion = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };

  const removeTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.isCompleted));
  };

  return {
    activeFilter,
    handleActiveFilter,
    todos,
    addTodo,
    toggleTodoCompletion,
    removeTodo,
    clearCompleted,
  };
}
