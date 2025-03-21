export type FilterType = "all" | "active" | "completed";

export type Todo = {
  id: number;
  text: string;
  isCompleted: boolean;
};
