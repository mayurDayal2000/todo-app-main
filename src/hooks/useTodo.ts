import { useCallback, useEffect, useMemo, useState } from "react";
import { FilterType, Todo } from "../types";
import sampleTasks from "../utilities/tasks.json";

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

  const handleActiveFilter = useCallback((action: FilterType) => {
    setActiveFilter(action);
  }, []);

  const addTodo = useCallback((text: string) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: Date.now(), text, isCompleted: false },
    ]);
  }, []);

  const toggleTodoCompletion = useCallback((id: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  }, []);

  const removeTodo = useCallback((id: number) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  }, []);

  const clearCompleted = useCallback(() => {
    setTodos((prevTodos) => prevTodos.filter((todo) => !todo.isCompleted));
  }, []);

  const filteredTodos = useMemo(() => {
    return todos.filter((todo) => {
      if (activeFilter === "active") return !todo.isCompleted;
      if (activeFilter === "completed") return todo.isCompleted;
      return true;
    });
  }, [todos, activeFilter]);

  const activeTodosCount = useMemo(
    () => todos.filter((todo) => !todo.isCompleted).length,
    [todos]
  );

  return {
    activeFilter,
    handleActiveFilter,
    filteredTodos,
    activeTodosCount,
    setTodos,
    addTodo,
    toggleTodoCompletion,
    removeTodo,
    clearCompleted,
  };
}
