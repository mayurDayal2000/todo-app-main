import { useEffect, useState } from "react";
import sampleTasks from "../utilities/tasks.json";

export type FilterType = "all" | "active" | "completed";

export type Todo = {
  id: number;
  text: string;
  isCompleted: boolean;
};

export function useTodo() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");

  const [todos, setTodos] = useState<Todo[]>(() => {
    try {
      const storedTodos = localStorage.getItem("todo-items");
      return storedTodos ? JSON.parse(storedTodos) : sampleTasks || [];
    } catch (error) {
      console.log("Error parsing todos from localstorage: ", error);
      return sampleTasks || [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("todo-items", JSON.stringify(todos));
    } catch (error) {
      console.error("Error saving todos to localstorage: ", error);
    }
  }, [todos]);

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
    setTodos,
    addTodo,
    toggleTodoCompletion,
    removeTodo,
    clearCompleted,
  };
}
